// Menghitung skor kekuatan kata sandi (0 - 4)
const getPasswordScore = (password) => {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 6) score += 1;
  if (password.length >= 8) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password) || /[^a-zA-Z0-9]/.test(password)) score += 1;
  return score;
};

const LEVELS = [
  { label: 'Terlalu pendek', text: 'text-red-700', bar: 'bg-red-500' },
  { label: 'Lemah', text: 'text-red-700', bar: 'bg-red-500' },
  { label: 'Cukup', text: 'text-amber-700', bar: 'bg-amber-500' },
  { label: 'Kuat', text: 'text-emerald-700', bar: 'bg-emerald-500' },
  { label: 'Sangat kuat', text: 'text-emerald-800', bar: 'bg-emerald-600' }
];

// Menampilkan indikator kekuatan kata sandi di bawah input password
export default function PasswordStrength({ password = '' }) {
  if (!password) return null;

  const score = password.length < 6 ? 0 : Math.max(1, getPasswordScore(password));
  const level = LEVELS[score];

  return (
    <div className="mt-1.5 space-y-1">
      <div className="grid grid-cols-4 gap-1" aria-hidden="true">
        {[1, 2, 3, 4].map((step) => (
          <span
            key={step}
            className={[
              'h-1 rounded-full transition-colors',
              score >= step ? level.bar : 'bg-line'
            ].join(' ')}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[10.5px]">
        <span className={`font-semibold ${level.text}`}>Kekuatan: {level.label}</span>
        <span className="text-muted">Gunakan huruf &amp; angka</span>
      </div>
    </div>
  );
}
