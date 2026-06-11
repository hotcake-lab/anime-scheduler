import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

function Layout() {
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    '/': 'ホーム',
    '/calendar': 'カレンダー',
    '/library': 'ライブラリ',
    '/myanime': 'マイアニメ',
    '/settings': '設定',
  };

  return (
    <>
      <Header title={pageTitles[location.pathname] ?? 'アニメ視聴'} />

      <main>
        <Outlet />
      </main>

      <BottomNavigation />
    </>
  );
}

export default Layout;