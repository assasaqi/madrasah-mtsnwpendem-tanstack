import { Building2, Monitor, Library, Compass, Sparkles, Award } from 'lucide-react';

export const FASILITAS_IKON = [
  { value: 'building', label: 'Gedung / Ruang Kelas', icon: Building2 },
  { value: 'monitor', label: 'Laboratorium Komputer', icon: Monitor },
  { value: 'library', label: 'Perpustakaan', icon: Library },
  { value: 'compass', label: 'Laboratorium Sains', icon: Compass },
  { value: 'sparkles', label: 'Masjid / Tahfidz', icon: Sparkles },
  { value: 'award', label: 'Olahraga / Prestasi', icon: Award }
];

// Mengambil komponen ikon fasilitas berdasarkan kunci penyimpanan
export const getFasilitasIcon = (value) =>
  FASILITAS_IKON.find((item) => item.value === value)?.icon || Building2;
