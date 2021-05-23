import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async allRestaurants() {
    const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // static async upcomingMovies() {
  //   const response = await fetch(API_ENDPOINT.UPCOMING);
  //   const responseJson = await response.json();
  //   return responseJson.results;
  // }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantDbSource;
