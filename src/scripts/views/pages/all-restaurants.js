import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const AllRestaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restoran</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.allRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default AllRestaurants;
