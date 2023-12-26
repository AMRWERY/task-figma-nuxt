import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [],
    };
  },

  actions: {
    async fetchProducts(type) {
      const products = await $fetch(
        `https://phpv8.aait-d.com/dukanv2/public/api/website/products?type=${type}`
      );
      this.products = products?.data.map((prod) => {
        return {
          image: "/img/8105Yf-ay+L.jpg",
          price: prod.price,
          currency: prod.currency,
          type_trans: prod.type_trans,
        };
      });
      console.log(products?.data);
    },
  },
});
