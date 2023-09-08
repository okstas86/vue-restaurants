export default {
  data() {
    return {
      cart: [],
      isModalOpen: false,
      sortBy: "asc",
    };
  },
  computed: {
    sortedMenuItems() {
      if (!this.menuItems) {
        return [];
      }
      const sortedItems = this.menuItems.slice().sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);

        if (this.sortBy === "asc") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });

      const sortedItemsWithImages = sortedItems.map((item) => {
        const image = this.menuItems.find(
          (menuItem) => menuItem.id === item.id
        ).image;
        return { ...item, image };
      });

      return sortedItemsWithImages;
    },
  },
  methods: {
    addToCart(item) {
      const existingItem = this.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
      this.isModalOpen = true;
    },
    openModal() {
      this.isModalOpen = true;
    },
    clearCart() {
      this.cart = [];
      this.isModalOpen = false;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
