import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
