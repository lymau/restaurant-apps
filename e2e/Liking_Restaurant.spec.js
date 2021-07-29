const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', (I) => {
    I.seeElement('#restaurants');
    I.see('Tidak ada restoran favorit untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant and unliking one restaurant', async (I) => {
    I.see('Tidak ada restoran favorit untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');

    I.seeElement('.restaurant__name a');

    const firstRestaurant = locate('.restaurant__name a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');
    const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

    assert.strictEqual(firstRestaurantName, likedRestaurantName);

    I.amOnPage('/#/like')
    I.seeElement('.restaurant__name a');

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');

    I.seeElement('#restaurants');
    I.see('Tidak ada restoran favorit untuk ditampilkan', '.restaurant-item__not__found');
});
