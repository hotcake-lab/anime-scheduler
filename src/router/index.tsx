import Layout from '../components/Layout';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import Library from '../pages/Library';
import MyAnime from '../pages/MyAnime';
import Settings from '../pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'library',
        element: <Library />,
      },
      {
        path: 'myanime',
        element: <MyAnime />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default router;