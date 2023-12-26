<template>
    <div class="bg-white">
        <h1 class="mb-6 mt-9 text-black text-xl font-bold leading-normal">{{ pageTitle }}</h1>
        <div class="mx-auto max-w-full px-4 sm:px-6 lg:max-w-full lg:px-8">
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="product in store.products" :key="product">
                    <div class="carousel__item">
                        <div class="flex">
                            <span class="inline-flex flex-col justify-center top-0 left-0 items-start gap-2 px-2 py-1 deal">
                                <div class="flex">
                                    <img src="/svg/fire-fill 2.svg">
                                    <p class="text-white text-center text-base not-italic font-semibold capitalize">{{
                                        product.type_trans }}</p>
                                </div>
                            </span>
                            <img src="/svg/favourite.svg" class="flex justify-center items-center shrink-0 w-8 h-8 ml-auto">
                        </div>
                        <img :src="product.image" class="shrink-0 mx-auto mt-3.5 rounded img" />
                        <div class="mt-3 flex w-10 h-10 p-2 justify-center items-center shrink-0 mb-2.5 plus-icon">
                            <img src="/svg/plus-icon.svg">
                        </div>
                        <div class="mt-2.5 mb-3 flex">
                            <img src="/svg/star.svg">
                            <img src="/svg/star.svg">
                            <img src="/svg/star.svg">
                            <img src="/svg/star (1).svg">
                            <img src="/svg/star (2).svg">
                            <div class="ml-2 flex inline-flex h-7 py-1 px-2 items-center gap-1 shrink-0 account">
                                <img src="/svg/account_balance_wallet.svg">
                                <p class="text-base font-semibold leading-5">+5.99 <span class="text-xs">SAR</span></p>
                            </div>
                            <img src="/svg/list_add_check.svg" class="ml-1">
                        </div>

                        <div class="mt-3">
                            <p class="text-xl font-bold leading-5 text-left">{{ product.price }} <span class="text-sm">{{
                                product.currency }}</span></p>
                        </div>
                        <div class="mt-1">
                            <p class="font-normal text-base leading-5 text-left">Pasta Reggia — Penne ziti, 500g <br>
                                More information</p>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                </template>
            </Carousel>
        </div>
    </div>
</template>
  
<script setup>
import { useProductsStore } from '@/stores/productsStore'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useProductsStore()

const props = defineProps(['type'])

onMounted(() => {
    store.fetchProducts(props.type)
})

const pageTitle = computed(() => {
    if (props.type === 'top_deal_products') {
        return 'Highest Cashback'
    } else if (props.type === 'most_popular_products') {
        return 'Most Popular Products'
    } else if (props.type === 'news_products') {
        return 'Top Deals'
    } else if (props.type === 'related_products') {
        return 'Personal Care'
    } else if (props.type === 'product_you_may_like') {
        return 'Products You May Like'
    } else {
        return 'Default Title'
    }
})

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
        itemsToShow: 4,
        snapAlign: 'start',
    },
});
</script>

<style scoped>
.deal {
    border-radius: 0px 0px 6px 0px;
    background: #FF8540;
}

.img {
    width: 220px;
    height: 220px;
}

.card {
    width: 295px;
    height: 452px;
}

.plus-icon {
    border-radius: 4px 8px 8px 4px;
    background: var(--Rich-Ground-Green, #007460);
}

.account {
    border-radius: 0px 0px 6px 0px;
    background: var(--Bright-Orange, #F7DE6F);
}
</style>