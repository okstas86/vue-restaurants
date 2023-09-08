<template>
  <section class="container">
    <transition name="slider">
      <the-slider></the-slider>
    </transition>
    <div class="section-heading">
      <div v-if="searchQuery === ''">
        <h2 class="section-title">Рестораны</h2>
      </div>
      <label class="search">
        <input
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
          v-model="searchQuery"
        />
      </label>
    </div>
    <search-component
      @search="handleSearch"
      v-if="showFullList"
      :searchQuery="searchQuery"
    ></search-component>
    <section class="restaurants" v-if="searchQuery === ''">
      <div class="cards cards-restaurants">
        <router-link
          v-for="partner in partners"
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
            <!-- /.card-heading -->
            <div class="card-info">
              <div class="rating">{{ partner.stars }}</div>
              <div class="price">От {{ partner.price }} ₽</div>
              <div class="category">{{ partner.kitchen }}</div>
            </div>
            <!-- /.card-info -->
          </div>
          <!-- /.card-text -->
        </router-link>
        <!-- /.card -->
      </div>
      <!-- /.cards -->
    </section>
  </section>
</template>

<script>
import TheSlider from "@/components/TheSlider.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import restaurantData from "../db/db.json";

export default {
  components: { TheSlider, SearchComponent },
  data() {
    return {
      partners: restaurantData.db.partners,
      searchQuery: "",
      showFullList: false,
    };
  },
  watch: {
    searchQuery(newQuery) {
      if (newQuery.trim() !== "") {
        this.showFullList = true;
      } else {
        this.showFullList = false;
      }
    },
  },
};
</script>

<style></style>
