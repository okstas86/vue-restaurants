<template>
  <div class="container">
    <header class="header">
      <router-link to="/" class="logo">
        <img src="img/icon/logo.svg" alt="Logo" />
      </router-link>
      <label class="address">
        <input
          type="text"
          class="input input-address"
          placeholder="Адрес доставки"
        />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button class="button button-primary button-auth">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button class="button button-cart" id="cart-button">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.input {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 8px 8px 35px;
  background-repeat: no-repeat;
  background-position: left 11px center;
}

.address {
  flex: 0.8;
}

.input-address {
  width: 100%;
  background-image: url(../assets/img/icon/home.svg);
}

.search {
  margin-left: auto;
}

.input-search {
  width: 300px;
  background-image: url(../assets/img/icon/search.svg);
}
</style>
