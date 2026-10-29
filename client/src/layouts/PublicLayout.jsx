import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/public/Navbar';
import Footer from '../components/public/Footer';

// Membungkus seluruh halaman publik dengan navigasi dan footer resmi madrasah
export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas font-sans text-ink">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
