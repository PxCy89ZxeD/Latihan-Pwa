import NowPlaying from '../views/now-playing';
import Upcoming from '../views/upcoming';
import Detail from '../views/detail';
import Like from '../views/pages/like';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
