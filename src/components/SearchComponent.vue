<template>
  <div class="container">
    <section class="menu">
      <div class="section-heading">
        <h2 class="section-title">Блюда</h2>
      </div>

      <div class="cards cards-menu">
        <div
          v-for="menuItem in filteredMenuItems"
          :key="menuItem.id"
          class="card"
        >
          <img :src="menuItem.image" :alt="menuItem.name" class="card-image" />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title card-title-reg">{{ menuItem.name }}</h3>
            </div>
            <div class="card-info">
              <div class="ingredients">{{ menuItem.description }}</div>
            </div>
            <div class="card-buttons">
              <button
                class="button button-primary button-add-cart"
                @click="addToCart(menuItem)"
              >
                <span class="button-card-text">В корзину</span>
                <span class="button-cart-svg"></span>
              </button>
              <strong class="card-price-bold">{{ menuItem.price }} ₽</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="restaurants">
      <div class="section-heading">
        <h2 class="section-title">Рестораны</h2>
      </div>
      <div class="cards cards-restaurants">
        <router-link
          v-for="partner in filteredRestaurants"
          :key="partner.name"
          :to="'/' + partner.products.replace('.json', '')"
          class="card card-restaurant"
        >
          <img :src="partner.image" :alt="partner.name" class="card-image" />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title">{{ partner.name }}</h3>
              <span class="card-tag tag"
                >{{ partner.time_of_delivery }} мин</span
              >
            </div>
            <div class="card-info">
              <div class="rating">{{ partner.stars }}</div>
              <div class="price">От {{ partner.price }} ₽</div>
              <div class="category">{{ partner.kitchen }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>

  <product-item
    :isModalOpen="isModalOpen"
    :cart="cart"
    @close="closeModal"
    @clear-cart="clearCart"
  />
</template>

<script>
import restaurantData from "../db/db.json";
import CartMixin from "@/mixins/CartMixin";

export default {
  mixins: [CartMixin],
  props: {
    searchQuery: String,
  },
  data() {
    return {
      menuItems: [],

      restaurants: [],
    };
  },
  computed: {
    filteredMenuItems() {
      const menuQuery = this.searchQuery.toLowerCase();
      return this.menuItems.filter((menuItem) => {
        if (menuItem.name && menuItem.description) {
          return (
            menuItem.name.toLowerCase().includes(menuQuery) ||
            menuItem.description.toLowerCase().includes(menuQuery)
          );
        }
        return false;
      });
    },
    filteredRestaurants() {
      const restaurantQuery = this.searchQuery.toLowerCase();
      return this.restaurants.filter((partner) => {
        return (
          partner.name && partner.name.toLowerCase().includes(restaurantQuery)
        );
      });
    },
  },
  created() {
    this.menuItems = [
      ...restaurantData.db["partners"],
      ...restaurantData.db["food-band"],
      ...restaurantData.db["gusi-lebedi"],
      ...restaurantData.db["pizza-plus"],
      ...restaurantData.db["pizza-burger"],
      ...restaurantData.db["tanuki"],
      ...restaurantData.db["palki-skalki"],
    ];
    this.restaurants = restaurantData.db.partners;
  },
};
</script>

<style></style>
