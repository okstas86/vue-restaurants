<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">{{ partner.name }}</h2>
          <div class="card-info">
            <div class="rating">{{ partner.stars }}</div>
            <div class="price">От {{ partner.price }} ₽</div>
            <div class="category">{{ partner.kitchen }}</div>
          </div>
          <!-- /.card-info -->
        </div>
        <div class="sort-options">
          <label for="sort-select">Сортировка: </label>
          <select id="sort-select" v-model="sortBy">
            <option value="asc">Сначала дешевые</option>
            <option value="desc">Сначала дорогие</option>
          </select>
        </div>
        <div class="cards cards-menu">
          <div v-for="item in sortedMenuItems" :key="item.id" class="card">
            <img :src="item.image" :alt="item.name" class="card-image" />
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ item.name }}</h3>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="ingredients">{{ item.description }}</div>
              </div>
              <!-- /.card-info -->
              <div class="card-buttons">
                <button
                  class="button button-primary button-add-cart"
                  @click="addToCart(item)"
                >
                  <span class="button-card-text">В корзину</span>
                  <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{ item.price }} ₽</strong>
              </div>
            </div>
            <!-- /.card-text -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.cards -->
      </section>
    </div>
    <!-- /.container -->
  </main>
  <product-item
    :isModalOpen="isModalOpen"
    :cart="cart"
    @close="closeModal"
    @clear-cart="clearCart"
  />
</template>

<script>
import restaurantData from "../db/db.json";
import CartMixin from "../mixins/CartMixin.js";

export default {
  mixins: [CartMixin],
  data() {
    return {
      partner: restaurantData.db.partners[1],
      menuItems: restaurantData.db.tanuki,
    };
  },
};
</script>

<style scoped></style>
