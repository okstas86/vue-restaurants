<template>
  <section class="container">
    <div class="container-promo">
      <section
        class="promo"
        v-for="(promo, index) in promos"
        :key="index"
        :class="{ active: currentIndex === index, [promo.className]: true }"
      >
        <div class="container-title">
          <h1 class="promo-title">{{ promo.title }}</h1>
        </div>
        <div class="container-text">
          <p class="promo-text">{{ promo.text }}</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      promos: [
        {
          title: "Онлайн-сервис  доставки еды на дом",
          text: "Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком",
          className: "pizza",
        },
        {
          title: "Шашлыки на майские со скидкой 35%",
          text: "Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD",
          className: "kebab",
        },
        {
          title: "Скидка 20% на всю еду по промокоду LOVE.JS",
          text: "Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду",
          className: "vegetables",
        },
        {
          title: "Сеты со скидкой до 30% в ресторанах",
          text: "Скидки на сеты до 30 мая по промокоду DADADA",
          className: "sushi",
        },
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.promos.length;
    },
  },
};
</script>

<style>
.container-title {
  width: 480px;
}
.container-text {
  width: 600px;
}
.promo {
  flex: 0 0 100%;
  display: none;
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
  padding: 68px 70px;
  margin-bottom: 56px;
}

.promo.active {
  display: block;
}

.pizza {
  background: #fff1b8 url(../assets/img/promo/pizza.png) no-repeat top -100px right -250px /
    830px;
}

.kebab {
  background: #d6e4ff url(../assets/img/promo/kebab.png) no-repeat top 45px
    right 40px / 450px;
}

.vegetables {
  background: #fff566 url(../assets/img/promo/vegetables.png) no-repeat top 0
    right 0 / 825px;
}

.sushi {
  background: #fff1f0 url(../assets/img/promo/sushi.png) no-repeat top 10px
    right 15px / 500px;
}

.promo-title {
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  color: #302c34;
}

.promo-text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #302c34;
  max-width: 538px;
}

@media screen and (max-width: 768px) {
  .container-title {
    width: auto; 
    max-width: 100%; 
  }

  .container-text {
    width: auto; 
    max-width: 100%;
  }

  .promo {
    padding: 30px; 
    margin-bottom: 30px; 
  }

  .promo-title {
    font-size: 28px; 
    line-height: 32px; 
  }

  .promo-text {
    font-size: 18px;
    line-height: 24px; 
    max-width: 100%; 
  }
  .pizza {
    background: #fff1b8 url(../assets/img/promo/pizza.png) no-repeat top -100px right -250px;
    background-size: cover;
  }

  .kebab {
    background: #d6e4ff url(../assets/img/promo/kebab.png) no-repeat top 45px
      left 220px;
    background-size: cover;
  }

  .vegetables {
    background: #fff566 url(../assets/img/promo/vegetables.png) no-repeat top 0
      left 20px;
    background-size: cover;
  }

  .sushi {
    background: #fff1f0 url(../assets/img/promo/sushi.png) no-repeat top 10px
      left 150px;
    background-size: cover;
  }
}
</style>
