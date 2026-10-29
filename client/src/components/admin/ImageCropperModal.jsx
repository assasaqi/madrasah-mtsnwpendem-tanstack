import { useState, useRef, useEffect, useCallback } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { cx } from './ui';

export default function ImageCropperModal({
  open,
  imageSrc,
  aspectRatio = 16 / 9,
  title = 'Potong & Sesuaikan Gambar',
  fileName = 'gambar.jpg',
  onCrop,
  onClose,
  onUseOriginal
}) {
  const canvasRef = useRef(null);
  const [imageObj, setImageObj] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [processing, setProcessing] = useState(false);
  const rotation = 0; // Rotasi derajat dinonaktifkan sesuai kebutuhan

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !processing) {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, processing, onClose]);

  // Muat gambar ke objek Image HTML saat URL berubah
  useEffect(() => {
    if (!open || !imageSrc) {
      setImageObj(null);
      return;
    }

    const img = new Image();
    // Gunakan crossOrigin jika bukan blob: atau data: URL
    if (imageSrc.startsWith('http://') || imageSrc.startsWith('https://')) {
      img.crossOrigin = 'anonymous';
    }
    img.onload = () => {
      setImageObj(img);
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    };
    img.onerror = (err) => {
      console.error('Gagal memuat gambar untuk di-crop:', err);
      setImageObj(null);
    };
    img.src = imageSrc;
  }, [open, imageSrc]);

  // Render canvas secara real-time berdasarkan posisi drag, zoom, dan aspect ratio
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageObj) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Hitung dimensi crop box berdasarkan prop aspectRatio
    let cropWidth, cropHeight;
    const padding = 20;
    const maxAvailableWidth = width - padding * 2;
    const maxAvailableHeight = height - padding * 2;

    if (aspectRatio) {
      if (maxAvailableWidth / maxAvailableHeight > aspectRatio) {
        cropHeight = maxAvailableHeight;
        cropWidth = cropHeight * aspectRatio;
      } else {
        cropWidth = maxAvailableWidth;
        cropHeight = cropWidth / aspectRatio;
      }
    } else {
      // Mengikuti rasio asli gambar
      const imgRatio = (imageObj.naturalWidth || 1) / (imageObj.naturalHeight || 1);
      if (maxAvailableWidth / maxAvailableHeight > imgRatio) {
        cropHeight = maxAvailableHeight;
        cropWidth = cropHeight * imgRatio;
      } else {
        cropWidth = maxAvailableWidth;
        cropHeight = cropWidth / imgRatio;
      }
    }

    const cropX = (width - cropWidth) / 2;
    const cropY = (height - cropHeight) / 2;

    ctx.save();

    // Latar belakang pola transparan (checkerboard halus)
    const gridSize = 16;
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        ctx.fillStyle = (Math.floor(x / gridSize) + Math.floor(y / gridSize)) % 2 === 0 ? '#f0eee6' : '#ffffff';
        ctx.fillRect(x, y, gridSize, gridSize);
      }
    }

    // Transformasi gambar (geser & zoom)
    ctx.save();
    ctx.translate(width / 2 + offset.x, height / 2 + offset.y);
    ctx.rotate((rotation * Math.PI) / 180);

    const baseScale = Math.max(cropWidth / (imageObj.naturalWidth || 1), cropHeight / (imageObj.naturalHeight || 1));
    const scale = baseScale * zoom;

    const drawW = imageObj.naturalWidth * scale;
    const drawH = imageObj.naturalHeight * scale;

    ctx.drawImage(imageObj, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();

    // Overlay semi-transparan di luar area crop box (masking halus)
    ctx.fillStyle = 'rgba(28, 27, 23, 0.45)';
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.rect(cropX + cropWidth, cropY, -cropWidth, cropHeight);
    ctx.fill();

    // Garis batas crop box
    ctx.strokeStyle = '#123a24'; // Hijau Brand Madrasah
    ctx.lineWidth = 2;
    ctx.strokeRect(cropX, cropY, cropWidth, cropHeight);

    // Garis grid rule of thirds halus di dalam crop box
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cropX + cropWidth / 3, cropY);
    ctx.lineTo(cropX + cropWidth / 3, cropY + cropHeight);
    ctx.moveTo(cropX + (cropWidth * 2) / 3, cropY);
    ctx.lineTo(cropX + (cropWidth * 2) / 3, cropY + cropHeight);
    ctx.moveTo(cropX, cropY + cropHeight / 3);
    ctx.lineTo(cropX + cropWidth, cropY + cropHeight / 3);
    ctx.moveTo(cropX, cropY + (cropHeight * 2) / 3);
    ctx.lineTo(cropX + cropWidth, cropY + (cropHeight * 2) / 3);
    ctx.stroke();

    ctx.restore();
  }, [imageObj, zoom, offset, aspectRatio]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  // Drag mouse untuk menggeser gambar
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch support untuk layar sentuh ponsel & tablet
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setOffset({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    });
  };

  const handleReset = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  // Konversi fallback jika toBlob browser mengembalikan null
  const fallbackDataUrl = (canvas, mimeType = 'image/png', callback) => {
    try {
      const dataUrl = canvas.toDataURL(mimeType, 0.92);
      const arr = dataUrl.split(',');
      const mime = arr[0].match(/:(.*?);/)?.[1] || mimeType;
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      const blob = new Blob([u8arr], { type: mime });
      callback(blob);
    } catch (err) {
      console.error('Fallback DataURL gagal:', err);
      setProcessing(false);
    }
  };

  // Menghasilkan file gambar hasil crop beresolusi tinggi tanpa background hitam
  const handleApplyCrop = () => {
    if (!imageObj) return;
    setProcessing(true);
    const startTime = Date.now();

    try {
      const canvas = canvasRef.current;
      if (!canvas) {
        setProcessing(false);
        return;
      }

      const width = canvas.width;
      const height = canvas.height;

      const padding = 20;
      const maxAvailableWidth = width - padding * 2;
      const maxAvailableHeight = height - padding * 2;

      let cropWidth, cropHeight;
      if (aspectRatio) {
        if (maxAvailableWidth / maxAvailableHeight > aspectRatio) {
          cropHeight = maxAvailableHeight;
          cropWidth = cropHeight * aspectRatio;
        } else {
          cropWidth = maxAvailableWidth;
          cropHeight = cropWidth / aspectRatio;
        }
      } else {
        const imgRatio = (imageObj.naturalWidth || 1) / (imageObj.naturalHeight || 1);
        if (maxAvailableWidth / maxAvailableHeight > imgRatio) {
          cropHeight = maxAvailableHeight;
          cropWidth = cropHeight * imgRatio;
        } else {
          cropWidth = maxAvailableWidth;
          cropHeight = cropWidth / imgRatio;
        }
      }

      const validCropWidth = Math.max(10, Math.round(cropWidth));
      const validCropHeight = Math.max(10, Math.round(cropHeight));

      // Buat canvas keluaran resolusi tinggi (skala hingga 1920px untuk kualitas jernih)
      const outputCanvas = document.createElement('canvas');
      const targetWidth = Math.min(1920, Math.max(300, Math.round(validCropWidth * 2.5)));
      const targetHeight = Math.max(150, Math.round(targetWidth * (validCropHeight / validCropWidth)));

      outputCanvas.width = targetWidth;
      outputCanvas.height = targetHeight;

      const outCtx = outputCanvas.getContext('2d');
      outCtx.imageSmoothingEnabled = true;
      outCtx.imageSmoothingQuality = 'high';

      // Cek apakah berkas aslinya berpotensi transparan (PNG, WebP, SVG, GIF)
      const isTransparentFormat =
        Boolean(fileName && /\.(png|webp|svg|gif)$/i.test(fileName)) ||
        Boolean(imageSrc && (imageSrc.includes('image/png') || imageSrc.includes('image/webp')));

      if (!isTransparentFormat) {
        outCtx.fillStyle = '#ffffff';
        outCtx.fillRect(0, 0, targetWidth, targetHeight);
      } else {
        outCtx.clearRect(0, 0, targetWidth, targetHeight);
      }

      const factor = targetWidth / cropWidth;

      outCtx.save();
      outCtx.translate(targetWidth / 2, targetHeight / 2);
      outCtx.translate(offset.x * factor, offset.y * factor);
      outCtx.rotate((rotation * Math.PI) / 180);

      const baseScale = Math.max(cropWidth / (imageObj.naturalWidth || 1), cropHeight / (imageObj.naturalHeight || 1));
      const scale = baseScale * zoom * factor;

      const drawW = imageObj.naturalWidth * scale;
      const drawH = imageObj.naturalHeight * scale;

      outCtx.drawImage(imageObj, -drawW / 2, -drawH / 2, drawW, drawH);
      outCtx.restore();

      const outputMime = isTransparentFormat ? 'image/png' : 'image/jpeg';
      const outputExt = isTransparentFormat ? 'png' : 'jpg';

      const finishWithBlob = (blob) => {
        if (!blob) {
          setProcessing(false);
          return;
        }
        const cleanName = fileName ? fileName.replace(/\.[^/.]+$/, '') : 'gambar';
        const croppedFile = new File([blob], `${cleanName}_cropped.${outputExt}`, {
          type: outputMime,
          lastModified: Date.now()
        });
        const previewUrl = URL.createObjectURL(blob);

        croppedFile.file = croppedFile;
        croppedFile.previewUrl = previewUrl;

        const payload = {
          file: croppedFile,
          previewUrl,
          blob
        };

        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 1000 - elapsed);

        setTimeout(() => {
          if (typeof onCrop === 'function') {
            onCrop(payload, previewUrl);
          }

          setProcessing(false);
          onClose?.();
        }, remaining);
      };

      if (outputCanvas.toBlob) {
        outputCanvas.toBlob(
          (blob) => {
            if (blob) {
              finishWithBlob(blob);
            } else {
              fallbackDataUrl(outputCanvas, outputMime, finishWithBlob);
            }
          },
          outputMime,
          outputMime === 'image/jpeg' ? 0.92 : undefined
        );
      } else {
        fallbackDataUrl(outputCanvas, outputMime, finishWithBlob);
      }
    } catch (err) {
      console.error('Gagal memotong gambar:', err);
      setProcessing(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs animate-in fade-in-0 duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget && !processing) onClose?.();
      }}
    >
      {/* Area Interaktif Canvas (Foto) - Tanpa Bingkai Card */}
      <div className="relative flex items-center justify-center bg-[#1c1b17] overflow-hidden rounded-2xl shadow-2xl select-none touch-none w-full max-w-lg h-[320px] sm:h-[380px]">
        <canvas
          ref={canvasRef}
          width={500}
          height={380}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          className={cx(
            'max-w-full max-h-full cursor-grab transition-transform duration-75',
            isDragging && 'cursor-grabbing'
          )}
        />

        {/* Tombol Tutup (X) di dalam foto (pojok kanan atas) */}
        <button
          type="button"
          onClick={onClose}
          disabled={processing}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white/90 hover:bg-black/80 hover:text-white backdrop-blur-xs transition-colors cursor-pointer disabled:opacity-50 shadow-md border border-white/10"
          title="Tutup"
        >
          <X size={16} />
        </button>

        {/* Indikator Loading sederhana: icon berputar di tengah saat simpan/potong gambar */}
        {processing && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/55 backdrop-blur-[2px]">
            <Loader2 className="w-10 h-10 text-white animate-spin" />
          </div>
        )}

        {/* Bar Bawah di Dalam Foto: Zoom di Kiri, Tombol Potong di Kanan */}
        <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
          {/* Kontrol Zoom (di dalam foto) */}
          <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-black/65 text-white backdrop-blur-xs shadow-md border border-white/10">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.6, parseFloat((z - 0.1).toFixed(2))))}
              disabled={processing}
              title="Perkecil zoom"
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer disabled:opacity-40"
            >
              <ZoomOut size={14} />
            </button>

            <input
              type="range"
              min="0.6"
              max="3"
              step="0.05"
              value={zoom}
              disabled={processing}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-16 sm:w-24 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
            />

            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(3, parseFloat((z + 0.1).toFixed(2))))}
              disabled={processing}
              title="Perbesar zoom"
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer disabled:opacity-40"
            >
              <ZoomIn size={14} />
            </button>

            <button
              type="button"
              onClick={handleReset}
              disabled={processing}
              title="Reset zoom & posisi"
              className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors cursor-pointer disabled:opacity-40 ml-0.5"
            >
              <RefreshCw size={12} />
            </button>
          </div>

          {/* Tombol Potong (di dalam foto) */}
          <button
            type="button"
            onClick={handleApplyCrop}
            disabled={processing || !imageObj}
            className="pointer-events-auto px-4 sm:px-5 py-2 text-[12.5px] font-bold rounded-full bg-brand text-white hover:bg-[#0f3f23] transition-colors cursor-pointer disabled:opacity-50 shadow-lg border border-white/15 flex items-center gap-1.5"
          >
            Potong
          </button>
        </div>
      </div>
    </div>
  );
}
