import { useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import SPMBSidebar from '../components/spmb/SPMBSidebar';
import SPMBTopbar from '../components/spmb/SPMBTopbar';

// Membungkus seluruh halaman portal SPMB dengan sidebar dan bilah atas bergaya panel admin
export default function SPMBLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-canvas font-sans text-ink">
      <SPMBSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <SPMBTopbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8 print:p-0">
          <div className="mx-auto w-full max-w-[1180px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
