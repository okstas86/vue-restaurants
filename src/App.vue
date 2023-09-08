<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="easy-out">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  padding-top: 44px;
}

a,
button {
  cursor: pointer;
  color: inherit;
}

.hide {
  display: none;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.buttons {
  display: flex;
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;
}

.button:hover {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
}

.button-primary {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
  margin-right: 10px;
}

.button-primary:hover {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  color: #595959;
}

.button-icon {
  margin-right: 6px;
}

.button-card-text {
  margin-right: 10px;
}

.button-auth {
  background-position: 20px 13px;
}

.button-primary .button-auth-svg {
  width: 24px;
  height: 24px;
  background-color: #fff;
  -webkit-mask: url("./assets/img/icon/user.svg") no-repeat 50% 50%;
  mask: url("./assets/img/icon/user.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary:hover .button-auth-svg {
  background-color: #595959;
}

.button .button-cart-svg {
  width: 24px;
  height: 24px;
  background-color: #595959;
  -webkit-mask: url("./assets/img/icon/shopping-cart.svg") no-repeat 50% 50%;
  mask: url("./assets/img/icon/shopping-cart.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary .button-cart-svg {
  background-color: #fff;
}

.button:hover .button-cart-svg {
  background-color: #fff;
}

.button-primary:hover .button-cart-svg {
  background-color: #595959;
}

.button-cart {
  display: none;
  margin: 0 5px;
}

.button-out {
  display: none;
  margin: 0 5px;
}

.user-name {
  display: none;
  margin-right: 20px;
  font-weight: bold;
  font-size: 18px;
}

.main {
  background: linear-gradient(
    180deg,
    rgba(245, 245, 245, 0) 1.04%,
    #f5f5f5 100%
  );
}

.section-heading {
  display: flex;
  align-items: center;
  margin-bottom: 44px;
}

.section-title {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin: 0 30px 0 0;
  color: #000000;
}

.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 30px;
  flex-basis: 31%;
  text-decoration: none;
}

.card-restaurant {
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-text {
  padding: 20px 23px 35px;
  min-height: 275px;
  display: flex;
  flex-direction: column;
}

.restaurants .card-text {
  min-height: auto;
}

.card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-title {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
}

.card-title-reg {
  font-weight: 400;
}

.card-tag {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  background: #262626;
  border-radius: 2px;
  padding: 1px 8px;
}

.card-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.card-buttons {
  display: flex;
  margin-top: 24px;
  flex-grow: 1;
  align-items: flex-end;
}

.card-price-bold {
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  margin-left: 30px;
}

.rating {
  background-image: url("./assets/img/icon/rating.svg");
  background-repeat: no-repeat;
  background-position: 0 7px;
  padding-left: 20px;
  margin-right: 26px;
  color: #ffc107;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
}

.price,
.category {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 32px;
}

.price {
  margin-right: 10px;
}

.ingredients {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 21px;
}

.category {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;
}

.price:after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #8c8c8c;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  margin-left: 10px;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1366px) {
  .container {
    max-width: 960px;
  }

  .pizza {
    background-position: center right -300px;
    background-size: 750px;
  }

  .kebab {
    background-position: top -5px right -93px;
    background-size: 530px;
  }

  .vegetables {
    background-position: top 0 right -93px;
    background-size: 820px;
  }

  .sushi {
    background-position: center right -90px;
  }

  .rating {
    margin-right: 15px;
  }

  .category,
  .price {
    font-size: 14px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 750px;
  }

  .pizza {
    padding: 50px;
    background-size: 500px;
    background-position: center right -200px;
  }

  .kebab {
    background-position: top 55px right -100px;
    background-size: 385px;
  }

  .vegetables {
    background-position: top 0 right -280px;
    background-size: 810px;
  }

  .sushi {
    background-position: top 30px right -175px;
  }

  .promo-text {
    font-size: 18px;
    max-width: 400px;
  }

  .card {
    flex-basis: 49%;
  }

  .footer-link {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 560px;
  }

  .card-info {
    flex-wrap: wrap;
  }

  .card .rating {
    flex-basis: 100%;
  }

  .card-title {
    font-size: 18px;
  }

  .card-text {
    min-height: 290px;
  }

  .card-price-bold {
    margin-left: 20px;
  }

  .pizza {
    background-size: 400px;
    background-position: bottom 50px right -200px;
  }

  .kebab {
    background-position: top -5px right -74px;
    background-size: 300px;
  }

  .vegetables {
    background-position: top 0 right -240px;
    background-size: 702px;
  }

  .sushi {
    background-position: top -24px right -75px;
    background-size: 302px;
  }

  .promo-title {
    font-size: 24px;
    line-height: 1.4;
  }

  .promo-text {
    margin-top: 0;
  }
}

@media (max-width: 578px) {
  .container {
    width: 90%;
  }

  .address {
    min-width: 100%;
    order: 1;
  }

  .header {
    flex-wrap: wrap;
  }

  .input-address {
    margin-top: 15px;
    order: 5;
    flex: 1;
  }

  .promo {
    background-image: none;
  }

  .promo-title {
    margin-bottom: 10px;
  }

  .section-title {
    font-size: 20px;
  }

  .card {
    flex-basis: 100%;
  }

  .card-text {
    min-height: auto;
  }

  .card-image {
    width: 100%;
  }

  .footer {
    padding: 30px 0;
  }

  .footer-block {
    align-items: flex-start;
  }

  .footer-nav {
    margin-left: 0;
    margin-right: 0;
    order: 0;
    display: flex;
    flex-direction: column;
  }

  .footer-logo {
    margin-right: 15px;
    order: 1;
  }

  .social-links {
    order: 2;
  }
}

@media (max-width: 480px) {
  .button-text {
    display: none;
  }

  .button-icon {
    margin: 0;
  }

  .user-name {
    margin: 10px;
  }

  .buttons {
    flex-wrap: wrap;
    margin-left: auto;
  }

  .button {
    min-height: 40px;
    padding: 5px 12px;
  }

  .button-out-svg {
    width: 24px;
    height: 24px;
    background-color: #fff;
    -webkit-mask: url(./assets/img/icon/logout.svg) no-repeat 50% 50%;
    mask: url(./assets/img/icon/logout.svg) no-repeat 50% 50%;
    background-repeat: no-repeat;
    -webkit-mask-size: 20px;
    mask-size: 20px;
  }

  .promo {
    padding: 20px;
  }

  .section-heading {
    flex-wrap: wrap;
  }

  .footer-block {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  .footer-logo {
    order: 0;
    margin-bottom: 20px;
  }

  .footer-nav {
    margin-bottom: 20px;
    text-align: center;
  }

  .footer-link:not(:last-child) {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    .container-title {
      width: auto;
    }

    .container-text {
      width: auto;
    }

    .promo {
      padding: 20px;
      margin-bottom: 20px;
    }

    .card {
      flex-basis: 100%;
    }

    .card-title {
      font-size: 18px;
      line-height: 26px;
    }

    .card-text {
      padding: 10px 15px 20px;
    }

    .card-price-bold {
      font-size: 16px;
      line-height: 24px;
      margin-left: 10px;
    }

    .rating {
      margin-right: 10px;
      font-size: 16px;
      line-height: 24px;
    }

    .price,
    .category {
      font-size: 16px;
      line-height: 24px;
    }

    .ingredients {
      font-size: 16px;
      line-height: 18px;
    }

    .route-enter-from,
    .route-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }

    .route-leave-active,
    .route-enter-active {
      transition: all 0.3s ease;
    }

    .route-enter-to,
    .route-leave-from {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
