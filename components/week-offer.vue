<template>
    <section class="mt-6">
        <div>
            <h1 class="text-black text-center font-bold text-2xl title">This week offers</h1>
        </div>

        <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500">
            <Slide v-for="card in cards" :key="card">
                <div class="carousel__item">
                    <div class="flex">
                        <div class=" m-4">
                            <img class="w-full shrink-0 rounded-lg img" :src="card.img">
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>

            </template>
        </Carousel>
        <div class="flex items-center justify-center space-x-2 mt-5">
            <div class="arrow-left items-center justify-center">
                <mdiIcon icon="mdiChevronLeft" class="text-gray-400 w-8 h-8" />
            </div>
            <div class="arrow-right items-center justify-center">
                <mdiIcon icon="mdiChevronRight" class="text-teal-400 w-8 h-8" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const cards = reactive([
    { img: 'https://justfields.com/storage/projects/7M5rV059/add.jpg' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/add (1).jpg' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/add (2).jpg' },
])


const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
});

const breakpoints = ref({
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 2.5,
        snapAlign: 'start',
    },
});
</script>

<style scoped>
.title {
    line-height: 130%;
}

.img {
    width: 504px;
    height: 232px;
}
</style>