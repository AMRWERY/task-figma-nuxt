<template>
    <!-- first-container -->
    <div class="hidden md:flex lg:flex xl:flex h-14 shrink-0 bg-gray-50 first-container">
        <div class="flex space-x-4 my-3 frames">
            <img src="/svg/navbar-frame-1.svg" class="flex h-8 items-center gap-2 frame-1">
            <img src="/svg/navbar-frame-2.svg" class="h-8 items-center gap-2 inline-flex frame-2">
            <img src="/svg/navbar-frame-3.svg" class="h-8 items-center gap-2 inline-flex  frame-3">
        </div>
        <div class="my-3.5 flex">
            <div class="flex">
                <p class="text-sm not-italic font-semibold leading-normal mt-1">AR</p>
                <span class="mx-2 w-px h-4 rounded-lg mb-2">|</span>
                <p class="text-sm not-italic font-semibold leading-normal mt-1">EN</p>
            </div>
            <div class="flex ml-8 mt-1">
                <img src="/svg/_WhatsApp.svg" class="mr-2">
                <p class="text-nowrap text-base font-semibold not-italic leading-5">+966 55 80 2 88 55</p>
            </div>
        </div>
    </div>

    <!-- second-container -->
    <nav class="w-100 px-8 md:px-auto nav">
        <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-4">
                <img src="/svg/dukan-logo.svg" class="">
                <div class="relative shrink-0">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MdiIcon icon="mdiMagnify" class="w-5 h-5 text-gray-500" />
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 pl-10 shrink-0 h-11 search-bar"
                        placeholder="Search Products" required>
                    <img src="/svg/barcode_scanner.svg" class="absolute right-2.5 bottom-2 px-2 mt-3 hidden md:block">
                </div>
            </div>

            <div class="hidden md:flex items-center space-x-2">
                <img src="/svg/location-02.svg" class="mr-2">
                <div>
                    <p>Delivery to: <br>
                        <span>Sulaimaniyah Dist, 455 Riyad Saud... <br>(30-45 mins)
                        </span>
                    </p>
                </div>
                <p class="underline text-orange-600 text-right text-base not-italic font-semibold leading-5">Change</p>
            </div>
            <img src="/svg/cashback-toolbar.svg" class="hidden md:block">
            <div class="flex items-center space-x-6">
                <button type="button" class="rounded-full">
                    <MdiIcon icon="mdiBellOutline" class="h-7 w-7" />
                </button>
                <button type="button" class="rounded-full">
                    <MdiIcon icon="mdiAccountOutline" class="h-7 w-7" />
                </button>
                <button type="button" class="rounded-full">
                    <MdiIcon icon="mdiHeartOutline" class="h-7 w-7" />
                </button>
                <button type="button" class="rounded-full">
                    <MdiIcon icon="mdiCartOutline" class="h-7 w-7" />
                </button>
            </div>
        </div>
    </nav>

    <!-- third-container -->
    <div class="hidden md:flex lg:flex xl:flex flex items-end gap-4 shrink-0 bg-white third-container">
        <div class="flex space-x-6 hidden xs:hidden sm:hidden md:hidden lg:flex xl:flex">
            <div class="flex">
                <span class="text-sm font-semibold">All categories</span>
                <MdiIcon icon="mdiChevronDown" class="h-6 w-6" />
            </div>
            <div class="space-x-6 flex">
                <div class="flex">
                    <img src="/svg/account_balance_wallet.svg" class="h-4 w-4 mr-1 mt-1">
                    <span class="text-sm font-semibold">Highest cashaback</span>
                </div>
                <span class="text-sm font-semibold">Top Deals</span>
                <span class="text-sm font-semibold">Fruits & Vegetables</span>
                <span class="text-sm font-semibold">Diary & Eggs</span>
                <span class="text-sm font-semibold">Beverages & Drinks</span>
                <span class="text-sm font-semibold">Fresh Bakery</span>
                <span class="text-sm font-semibold">Baby Products</span>
                <span class="text-sm font-semibold">Household</span>
            </div>
        </div>
    </div>

    <hr>

    <main>
        <div class="mx-auto min-h-screen max-w-full lg:mx-24 py-6">
            <slot />
        </div>
        <Footer />
    </main>
</template>
  
<script setup>

</script>

<style scoped>
.first-container {
    padding: 0 104px;
}

.frames {
    margin-right: 407px;
}

.frame-1 {
    display: flex;
    width: 152px;
}

.frame-2,
.frame-3 {
    width: 187px;
}

.nav {
    padding: 0 104px;
    height: 72px;
}

.search-bar {
    width: 340px;
    border-radius: 8px 20px 20px 8px;
    border: 0.5px solid var(--Disabled-text-Botton, #B0B0B0);
}

.third-container {
    height: 52px;
    padding: 14px 216px 18px 104px;
    border-bottom: 0.5px solid var(--Disabled-text-Botton, #B0B0B0);
}

@media (max-width: 767px) {
    .first-container {
        padding: 0 16px;
    }

    .frames {
        margin-right: 16px;
    }

    .frame-1 {
        width: 100px;
    }

    .frame-2,
    .frame-3 {
        width: 120px;
    }

    .nav {
        padding: 16px;
        height: 72px;
    }

    .search-bar {
        width: 100%;
    }

    .third-container {
        padding: 8px 16px;
    }

    .nav .rounded-full:nth-child(1),
    .nav .rounded-full:nth-child(2) {
        display: none;
    }

    .flex.items-center.space-x-4 img {
        max-width: 80px;
    }
}
</style>