<template>
  <transition name="cart">
    <div class="modal modal-cart" v-if="isModalOpen">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">Корзина</h3>
          <button class="close" @click="closeModal">&times;</button>
        </div>
        <!-- /.modal-header -->
        <div class="modal-body">
          <div v-for="item in cart" :key="item.id" class="food-row">
            <span class="food-name">{{ item.name }}</span>
            <strong class="food-price">{{ item.price }} ₽</strong>
            <div class="food-counter">
              <button class="counter-button" @click="decreaseQuantity(item)">
                -
              </button>
              <span class="counter">{{ item.quantity }}</span>
              <button class="counter-button" @click="increaseQuantity(item)">
                +
              </button>
            </div>
          </div>
          <!-- /.foods-row -->
        </div>
        <!-- /.modal-body -->
        <div class="modal-footer">
          <span class="modal-pricetag">{{ totalPrice }} ₽</span>
          <div class="footer-buttons">
            <button class="button button-primary" @click="checkout">
              Оформить заказ
            </button>
            <button class="button clear-cart" @click="clearCart">Отмена</button>
          </div>
        </div>
        <!-- /.modal-footer -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isModalOpen: Boolean,
    cart: Array,
  },
  computed: {
    totalPrice() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    clearCart() {
      this.$emit("clear-cart");
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}
.modal-auth {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  z-index: 999;
}

.is-open {
  display: flex;
}

.modal-dialog {
  max-width: 780px;
  width: 95%;
  background: #ffffff;
  border-radius: 5px;
  margin: auto;
  padding: 40px 45px;
}

.modal-dialog-auth {
  width: auto;
  position: relative;
}

.label-auth {
  display: block;
  margin: 30px;
}

.label-auth span {
  width: 80px;
  display: inline-block;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
}

.modal-title {
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
}

.close {
  font-size: 36px;
  border: none;
  background-color: transparent;
}

.close-auth {
  font-size: 36px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 20px;
}

.modal-body {
  margin-bottom: 22px;
}

.food-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 15px;
}

.food-name {
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
}

.food-price {
  margin-left: auto;
  margin-right: 47px;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
}

.food-counter {
  display: flex;
  align-items: center;
}

.counter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #40a9ff;
  box-sizing: border-box;
  border-radius: 2px;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #40a9ff;
}

.counter-button:hover {
  background: #40a9ff;
  border: 1px solid #ffffff;
  color: #ffffff;
}

.counter {
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  margin-right: 10px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-auth .modal-footer {
  justify-content: flex-end;
}

.footer-buttons {
  display: flex;
  align-items: center;
}

.modal-pricetag {
  background: #262626;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px 20px;
  font-size: 20px;
  line-height: 23px;
}
.cart-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.cart-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.cart-enter-active {
  transition: all 0.5s ease-out;
}
.search-leave-active {
  transition: all 0.5s ease-in;
}

.cart-enter-to,
.cart-leave-from {
  opacity: 1;
  transform: translateY(0);
}
@media (max-width: 768px) {
  .modal-dialog {
    max-width: 100%;
    padding: 10px;
  }

  .modal-title {
    font-size: 20px;
  }

  .modal-body {
    margin-bottom: 20px;
  }

  .modal-footer .button {
    font-size: 14px;
    padding: 5px 10px;
  }

  .modal-pricetag {
    font-size: 14px;
    padding: 5px 10px;
  }
}
</style>
