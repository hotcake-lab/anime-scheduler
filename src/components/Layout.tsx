import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <BottomNavigation />
    </>
  );
}

export default Layout;