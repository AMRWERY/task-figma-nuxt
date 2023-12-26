<template>
    <div class="mx-auto max-w-full sm:px-6 lg:px-8">
        <section class="container my-9 mx-auto max-w-screen-xl sm:px-6 lg:px-8 grid gap-x-10">
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="category in store.categories" :key="category">
                    <div class="carousel__item">
                        <div
                            class="relative flex-shrink-0 flex overflow-hidden rounded-full border border-white mx-2 flex justify-center items-center card">
                            <div class="relative overflow-hidden bg-cover bg-no-repeat">
                                <img class="rounded-full w-full" :src="category?.image" />
                            </div>
                        </div>
                        <p class="text-black text-center text-sm not-italic font-semibold">Fruits & vegetables</p>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </section>
    </div>

    <div class="mb-9">
        <img src="https://justfields.com/storage/projects/7M5rV059/banner - chashback ad.jpg" class="w-full shrink-0 img" />
    </div>
</template>
  
<script setup>
import { useCategoriesStore } from '@/stores/categoriesStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useCategoriesStore()

onMounted(() => {
    store.fetchCategories()
})

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
})

const breakpoints = ref({
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 6,
        snapAlign: 'start',
    },
})
</script>
  
<style scoped>
.card {
    width: 88px;
    height: 88px;
    padding: 11px;
}

.img {
    width: 1232px;
    height: 200px;
}
</style>