import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async allRestaurants() {
    const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.ADDREVIEW, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(review),
    });
    return response;
  }
}

export default RestaurantDbSource;
