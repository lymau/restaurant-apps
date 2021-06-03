import About from '../views/pages/about';
import AllRestaurants from '../views/pages/all-restaurants';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': AllRestaurants, // default page
  '/all-restaurants': AllRestaurants,
  '/about': About,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
