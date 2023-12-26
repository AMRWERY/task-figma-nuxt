<template>
    <section class="relative px-auto shrink-0 rounded-lg hero-banner">
        <img src="https://justfields.com/storage/projects/7M5rV059/Hero banners.png">
    </section>

    <div class="my-4">
        <img src="/svg/Group 18.svg" class="mx-auto">
    </div>

    <div class="w-full flex flex-col gap-4 md:flex-row md:gap-4">
        <img src="https://justfields.com/storage/projects/7M5rV059/banner 1.png" class="img">
        <img src="https://justfields.com/storage/projects/7M5rV059/banner 2.png" class="img">
    </div>
</template>

<style scoped>
.hero-banner {
    width: 100%;
    max-width: 1232px;
    height: auto;
}

.img {
    width: 100%;
    max-width: 608px;
    height: auto;
}

@media (max-width: 767px) {
    .hero-banner {
        max-width: 100%;
    }

    .img {
        max-width: 100%;
    }
}
</style>