import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => {
    return {
      categories: [],
    };
  },

  actions: {
    async fetchCategories() {
      const categories = await $fetch(
        "https://phpv8.aait-d.com/dukanv2/public/api/website/categories"
      );
      this.categories = categories?.data.map((cat) => {
        return {
          image: "/img/categories.jpg",
          name: cat.name,
        };
      });
      console.log(categories?.data);
    },
  },
});
