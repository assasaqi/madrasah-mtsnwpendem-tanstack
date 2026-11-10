import { Outlet } from '@tanstack/react-router';
import GlobalSavingOverlay from './GlobalSavingOverlay';

export default function RootComponent() {
  return (
    <>
      <Outlet />
      <GlobalSavingOverlay />
    </>
  );
}
