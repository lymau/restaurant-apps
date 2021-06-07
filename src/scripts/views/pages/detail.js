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

    const btnComment = document.querySelector('#comment');
    const textName = document.querySelector('#name');
    const textReview = document.querySelector('#review');
    const idRestaurant = restaurant.restaurant.id;

    btnComment.addEventListener('click', async (event) => {
      event.preventDefault();
      const review = {
        id: idRestaurant,
        name: textName.value,
        review: textReview.value,
      };

      await RestaurantDbSource.postReview(review);

      return window.location.reload();
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        city: restaurant.restaurant.city,
        address: restaurant.restaurant.address,
        pictureId: restaurant.restaurant.pictureId,
        categories: restaurant.restaurant.categories,
        menus: restaurant.restaurant.menus,
        rating: restaurant.restaurant.rating,
        customerReviews: restaurant.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
