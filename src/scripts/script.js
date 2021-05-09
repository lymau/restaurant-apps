const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");
const data = require('../DATA.json');
const restaurants = JSON.parse(JSON.stringify(data));

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});


mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
})

// Fungsi untuk mengambil data dari DATA.json
function getAllRestaurants() {
    const postsElement = document.getElementById("posts");
    var postHTML = "";
    Array.from(restaurants.restaurants).forEach(restaurant => {
        postHTML += `<article class="post-item">
        <img
          class="post-item__thumbnail"
          src="${restaurant.pictureId}"
          alt="Gambar + ${restaurant.name}"
        />
        <div class="post-item__content">
          <p class="post-item__date">
            Rating
            <span class="post-item__date__author">${restaurant.rating}</span>
          </p>
          <h1 class="post-item__title">
            <a href="#">${restaurant.name}</a>
          </h1>
          <p class="post-item__description">
            ${text_truncate(restaurant.description)}
          </p>
        </div>
      </article>`;
    });
    postsElement.innerHTML += postHTML;
    console.log(restaurants)
}

// Fungsi untuk memotong teks
text_truncate = function (str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    getAllRestaurants();
});