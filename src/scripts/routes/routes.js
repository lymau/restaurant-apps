import AllRestaurants from '../views/pages/all-restaurants';
import Detail from "../views/pages/detail";

const routes = {
  '/': AllRestaurants, // default page
  '/all-restaurants': AllRestaurants,
  // '/upcoming': Upcoming,
  '/detail/:id': Detail,
  // '/like': Like,
};

export default routes;
