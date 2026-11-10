// Menyusun daftar pengurus menjadi kelompok slot bagan struktur organisasi
function isiSlotBerdasarkanPola(items, definisiSlot, labelEkstra) {
  const kandidat = definisiSlot.map(({ role, pola }) => ({
    role,
    match: items.find((item) => pola.test(item.jabatan || '')) || null
  }));

  const matchedIds = new Set(kandidat.map((entry) => entry.match?.id).filter(Boolean));
  const sisa = items.filter((item) => !matchedIds.has(item.id));

  const slots = kandidat.map(({ role, match }) => ({
    role,
    item: match || sisa.shift() || null
  }));

  sisa.forEach((item, idx) => {
    slots.push({
      role: item.jabatan || `${labelEkstra} ${slots.length + idx + 1}`,
      item
    });
  });

  return slots;
}

export function susunBaganStruktur(items = []) {
  const daftar = Array.isArray(items) ? items : [];

  const kamadItem = daftar.find(
    (i) =>
      /kepala\s*madrasah|kamad/i.test(i.jabatan || '') ||
      /^kepala$/i.test((i.jabatan || '').trim()) ||
      /kepala\s*sekolah/i.test(i.jabatan || '') ||
      (/kepala/i.test(i.jabatan || '') &&
        !/tata\s*usaha|tu|perpus|perpustakaan|lab|leb|komputer|ipa/i.test(i.jabatan || ''))
  );
  const komiteItem = daftar.find((i) => /komite/i.test(i.jabatan || ''));

  const assignedIds = new Set([kamadItem?.id, komiteItem?.id].filter(Boolean));

  const ambilKelompok = (pola) => {
    const hasil = daftar.filter((i) => !assignedIds.has(i.id) && pola.test(i.jabatan || ''));
    hasil.forEach((i) => assignedIds.add(i.id));
    return hasil;
  };

  const wakaSlots = isiSlotBerdasarkanPola(
    ambilKelompok(/waka|wakil/i),
    [
      { role: 'WAKA KURIKULUM', pola: /kurikulum|kumer|akademik/i },
      { role: 'WAKA KESISWAAN', pola: /kesiswaan/i },
      { role: 'WAKA SARPRAS', pola: /sarpras|sarana/i },
      { role: 'WAKA HUMAS', pola: /humas/i }
    ],
    'WAKA'
  );

  const tendikSlots = isiSlotBerdasarkanPola(
    ambilKelompok(/tata\s*usaha|tu|operator|ops|bendahara|tenaga\s*kependidikan|tendik|staf|staff|administrasi|admin/i),
    [
      { role: 'KEPALA TATA USAHA', pola: /kepala\s*tata\s*usaha|ka\.?\s*tu|kepala\s*tu|ktu/i },
      { role: 'BENDAHARA', pola: /bendahara/i },
      { role: 'OPERATOR', pola: /operator|ops/i },
      { role: 'STAF TATA USAHA', pola: /staf|staff|administrasi|admin|tata\s*usaha|tu|tenaga\s*kependidikan/i }
    ],
    'STAF'
  );

  const kepalaUnitSlots = isiSlotBerdasarkanPola(
    ambilKelompok(/perpus|perpustakaan|lab|leb/i),
    [
      { role: 'KEPALA PERPUSTAKAAN', pola: /perpus|perpustakaan/i },
      { role: 'KEPALA LAB IPA', pola: /ipa|biologi|fisika|kimia|sains/i },
      { role: 'KEPALA LAB KOMPUTER', pola: /komputer|komp|tik|multimedia|it/i }
    ],
    'KEPALA UNIT'
  );

  const waliSlots = isiSlotBerdasarkanPola(
    ambilKelompok(/wali/i),
    [
      { role: 'WALI KELAS 7A', pola: /7\s*[-._]?\s*a|vii\s*[-._]?\s*a/i },
      { role: 'WALI KELAS 7B', pola: /7\s*[-._]?\s*b|vii\s*[-._]?\s*b/i },
      { role: 'WALI KELAS 8A', pola: /8\s*[-._]?\s*a|viii\s*[-._]?\s*a/i },
      { role: 'WALI KELAS 8B', pola: /8\s*[-._]?\s*b|viii\s*[-._]?\s*b/i },
      { role: 'WALI KELAS 9A', pola: /9\s*[-._]?\s*a|ix\s*[-._]?\s*a/i },
      { role: 'WALI KELAS 9B', pola: /9\s*[-._]?\s*b|ix\s*[-._]?\s*b/i }
    ],
    'WALI KELAS'
  );

  const guruItems = daftar.filter((i) => !assignedIds.has(i.id));
  const guruSlots = Array.from({ length: Math.max(15, guruItems.length) }).map((_, idx) => ({
    role: 'GURU',
    title: `Guru ${idx + 1}`,
    item: guruItems[idx] || null
  }));

  return {
    kamadItem,
    komiteItem,
    wakaSlots,
    tendikSlots,
    kepalaUnitSlots,
    waliSlots,
    guruSlots
  };
}
