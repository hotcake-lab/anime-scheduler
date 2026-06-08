import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

function Layout() {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}

export default Layout;