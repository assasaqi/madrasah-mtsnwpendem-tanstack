import { useEffect, useRef, useState } from 'react';
import { Extension } from '@tiptap/core';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading2,
  Heading3,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Quote,
  Redo2,
  RemoveFormatting,
  Strikethrough,
  Underline,
  Undo2
} from 'lucide-react';
import { formatArticleHtml } from '../../utils/helpers';

// Ekstensi perataan paragraf dan subjudul (kiri, tengah, kanan, justify)
const TextAlign = Extension.create({
  name: 'textAlign',

  addOptions() {
    return {
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right', 'justify'],
      defaultAlignment: 'left'
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: null,
            parseHTML: (element) => {
              const align = element.style?.textAlign;
              return this.options.alignments.includes(align) ? align : null;
            },
            renderHTML: (attributes) => {
              if (!attributes.textAlign || attributes.textAlign === this.options.defaultAlignment) {
                return {};
              }
              return { style: `text-align: ${attributes.textAlign}` };
            }
          }
        }
      }
    ];
  },

  addCommands() {
    return {
      setTextAlign:
        (alignment) =>
        ({ commands }) => {
          if (!this.options.alignments.includes(alignment)) return false;
          return this.options.types
            .map((type) => commands.updateAttributes(type, { textAlign: alignment }))
            .some(Boolean);
        },
      unsetTextAlign:
        () =>
        ({ commands }) =>
          this.options.types
            .map((type) => commands.resetAttributes(type, 'textAlign'))
            .some(Boolean)
    };
  }
});

// Tombol toolbar tunggal untuk editor penulisan admin
function ToolbarButton({ active, disabled, label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      aria-pressed={Boolean(active)}
      className={[
        'inline-flex h-7 min-w-7 items-center justify-center rounded px-1.5 text-[11.5px] font-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-40',
        active
          ? 'bg-brand text-white shadow-2xs'
          : 'text-ink/75 hover:bg-[#e2e8f0] hover:text-ink'
      ].join(' ')}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return <span aria-hidden="true" className="mx-0.5 h-4 w-px bg-line" />;
}

// Editor penulisan teks standar (Tiptap) untuk konten artikel, pengumuman, FAQ, agenda, dan sejarah
export default function RichTextEditor({
  value = '',
  onChange,
  placeholder = 'Tuliskan isi konten di sini…',
  minHeight = 180,
  disabled = false
}) {
  const lastEmittedRef = useRef(value || '');
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: {
          openOnClick: false,
          autolink: true,
          HTMLAttributes: {
            rel: 'noopener noreferrer nofollow',
            target: '_blank'
          }
        }
      }),
      TextAlign
    ],
    content: formatArticleHtml(value || ''),
    editable: !disabled,
    onUpdate: ({ editor: instance }) => {
      const nextValue = instance.isEmpty ? '' : instance.getHTML();
      lastEmittedRef.current = nextValue;
      onChange?.(nextValue);
    }
  });

  // Sinkronkan status editable bila prop disabled berubah
  useEffect(() => {
    if (!editor) return;
    editor.setEditable(!disabled);
  }, [editor, disabled]);

  // Sinkronkan konten eksternal saat modal edit dibuka untuk item berbeda atau di-reset
  useEffect(() => {
    if (!editor) return;
    const incoming = value || '';
    if (incoming === lastEmittedRef.current) return;

    const normalizedHtml = formatArticleHtml(incoming);
    if (editor.getHTML() !== normalizedHtml) {
      editor.commands.setContent(normalizedHtml || '', { emitUpdate: false });
    }
    lastEmittedRef.current = incoming;
  }, [editor, value]);

  if (!editor) return null;

  const openLinkPrompt = () => {
    const existingHref = editor.getAttributes('link')?.href || '';
    setLinkUrl(existingHref);
    setLinkOpen((prev) => !prev);
  };

  const applyLink = () => {
    const trimmed = linkUrl.trim();
    if (!trimmed) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      setLinkOpen(false);
      return;
    }

    const safeHref = /^https?:\/\//i.test(trimmed) || trimmed.startsWith('/') || trimmed.startsWith('mailto:')
      ? trimmed
      : `https://${trimmed}`;

    editor.chain().focus().extendMarkRange('link').setLink({ href: safeHref }).run();
    setLinkOpen(false);
  };

  const removeLink = () => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
    setLinkUrl('');
    setLinkOpen(false);
  };

  return (
    <div className="overflow-hidden rounded-md border border-line bg-paper transition-colors focus-within:border-brand/60 focus-within:ring-2 focus-within:ring-brand/10">
      {/* Toolbar pengaturan penulisan standar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-line bg-[#f8fafc] px-2 py-1.5">
        <ToolbarButton
          label="Urungkan (Ctrl+Z)"
          disabled={disabled || !editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo2 size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Ulangi (Ctrl+Y)"
          disabled={disabled || !editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo2 size={14} />
        </ToolbarButton>

        <ToolbarDivider />

        <ToolbarButton
          label="Tebal (Ctrl+B)"
          active={editor.isActive('bold')}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Miring (Ctrl+I)"
          active={editor.isActive('italic')}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Garis bawah (Ctrl+U)"
          active={editor.isActive('underline')}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Coret"
          active={editor.isActive('strike')}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={14} />
        </ToolbarButton>

        <ToolbarDivider />

        <ToolbarButton
          label="Paragraf normal"
          active={editor.isActive('paragraph')}
          disabled={disabled}
          onClick={() => editor.chain().focus().setParagraph().run()}
        >
          <Pilcrow size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Subjudul besar (H2)"
          active={editor.isActive('heading', { level: 2 })}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading2 size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Subjudul kecil (H3)"
          active={editor.isActive('heading', { level: 3 })}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          <Heading3 size={14} />
        </ToolbarButton>

        <ToolbarDivider />

        <ToolbarButton
          label="Rata kiri"
          active={
            editor.isActive({ textAlign: 'left' }) ||
            (!editor.isActive({ textAlign: 'center' }) &&
              !editor.isActive({ textAlign: 'right' }) &&
              !editor.isActive({ textAlign: 'justify' }))
          }
          disabled={disabled}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
        >
          <AlignLeft size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Rata tengah"
          active={editor.isActive({ textAlign: 'center' })}
          disabled={disabled}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
        >
          <AlignCenter size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Rata kanan"
          active={editor.isActive({ textAlign: 'right' })}
          disabled={disabled}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
        >
          <AlignRight size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Rata kanan-kiri (Justify)"
          active={editor.isActive({ textAlign: 'justify' })}
          disabled={disabled}
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        >
          <AlignJustify size={14} />
        </ToolbarButton>

        <ToolbarDivider />

        <ToolbarButton
          label="Daftar poin"
          active={editor.isActive('bulletList')}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Daftar bernomor"
          active={editor.isActive('orderedList')}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Kutipan"
          active={editor.isActive('blockquote')}
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Garis pemisah"
          disabled={disabled}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus size={14} />
        </ToolbarButton>

        <ToolbarDivider />

        <ToolbarButton
          label="Sisipkan / ubah tautan"
          active={editor.isActive('link') || linkOpen}
          disabled={disabled}
          onClick={openLinkPrompt}
        >
          <Link2 size={14} />
        </ToolbarButton>
        <ToolbarButton
          label="Bersihkan format teks"
          disabled={disabled}
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        >
          <RemoveFormatting size={14} />
        </ToolbarButton>
      </div>

      {/* Bar input tautan ringkas */}
      {linkOpen && (
        <div className="flex flex-wrap items-center gap-2 border-b border-line bg-[#f1f5f9] px-3 py-2">
          <input
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                applyLink();
              } else if (e.key === 'Escape') {
                setLinkOpen(false);
              }
            }}
            placeholder="https://contoh.sch.id"
            className="min-w-[180px] flex-1 rounded border border-line bg-paper px-2.5 py-1 text-[12px] text-ink outline-none focus:border-brand"
          />
          <button
            type="button"
            onClick={applyLink}
            className="rounded bg-brand px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-[#065f46] cursor-pointer"
          >
            Terapkan
          </button>
          {editor.isActive('link') && (
            <button
              type="button"
              onClick={removeLink}
              className="rounded border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-rose-700 hover:bg-rose-50 cursor-pointer"
            >
              Hapus
            </button>
          )}
          <button
            type="button"
            onClick={() => setLinkOpen(false)}
            className="rounded px-2 py-1 text-[11px] font-medium text-muted hover:text-ink cursor-pointer"
          >
            Tutup
          </button>
        </div>
      )}

      {/* Area isi teks */}
      <div
        className="rich-editor-content relative cursor-text px-3.5 py-2.5"
        style={{ minHeight }}
        onClick={() => editor.chain().focus().run()}
      >
        {editor.isEmpty && (
          <p className="pointer-events-none absolute left-3.5 top-2.5 select-none text-[12.5px] text-muted/60">
            {placeholder}
          </p>
        )}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
