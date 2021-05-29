import CONFIG from '../../globals/config';

const createLoadingAnimation = () => {
  const loadingHTML = `<div class="sk-folding-cube">
 <div class="sk-cube1 sk-cube"></div>
 <div class="sk-cube2 sk-cube"></div>
 <div class="sk-cube4 sk-cube"></div>
 <div class="sk-cube3 sk-cube"></div>
</div>`;
  return loadingHTML;
};

const createCustomerReviewForm = () => {
  const reviewForm = `<div tabindex="0" class="review-form">
  <h3><i class="fa fa-comment-o"></i>  Berikan Komentar</h3>
  <form id="reviewForm">
  <label for="name">Nama :</label><br>
  <input type="text" id="name" name="name" placeholder="Nama Anda" required><br>
  <label for="review">Review :</label><br>
  <textarea id="review" name="review" placeholder="Review Anda" required></textarea>
  <input type="button" id="comment" name="comment" value="Comment">
  </form>
  </div>`;
  return reviewForm;
};

const createListsTemplate = (restaurant, type) => {
  const { foods, drinks } = restaurant.menus;
  const { categories } = restaurant;
  let menuInnerHTML = '';
  if (type === 'category') {
    categories.forEach((category) => {
      menuInnerHTML += `<li>${category.name}</li>`;
    });
  } else if (type === 'food') {
    foods.forEach((food) => {
      menuInnerHTML += `<li>${food.name}</li>`;
    });
  } else if (type === 'drink') {
    drinks.forEach((drink) => {
      menuInnerHTML += `<li>${drink.name}</li>`;
    });
  }
  return menuInnerHTML;
};

const createReviewTemplate = (restaurant) => {
  let reviewInnerHTML = '';
  restaurant.customerReviews.forEach((review) => {
    reviewInnerHTML += `<div class="customer-review__wrapper">
    <h4>${review.name}</h4>
    <small style="color: #aaaaaa">${review.date}</small>
    <h5>${review.review}</h5>
    </div>
    `;
  });
  return reviewInnerHTML;
};

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="0" class="restaurant__title">${restaurant.name}</h2>
  <img tabindex="0" class="restaurant__poster" src="${`${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}`}" alt="${restaurant.name}" />
  <div tabindex="0" class="restaurant__info">
  <h3><i class="fa fa-info-circle"></i>  Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori</h4>${createListsTemplate(restaurant, 'category')
}<h4>Foods</h4>${createListsTemplate(restaurant, 'food')
}<h4>Drinks</h4>${createListsTemplate(restaurant, 'drink')
}<h4>Rating</h4>
    <p>⭐️ ${restaurant.rating}</p>
  </div>
  <div tabindex="0" class="restaurant__overview">
    <h3><i class="fa fa-comment"></i>  Customer Reviews</h3>${createReviewTemplate(restaurant)
}</div>${createCustomerReviewForm()}
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img tabindex="0" class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <h4>${restaurant.city}</h4>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="sukai restoran ini" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="tidak sukai restoran ini" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoadingAnimation,
};
