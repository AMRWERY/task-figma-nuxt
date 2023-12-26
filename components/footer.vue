<template>
    <footer class="footer">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="lg:flex lg:items-start lg:gap-8">
                <div class="footer-container">
                    <img src="/svg/dukan-footer.svg" class="mr-auto footer-img">

                    <div class="follow-section">
                        <p class="mt-7 text-sm not-italic font-bold leading-4 follow">
                            Follow us
                        </p>
                        <div class="flex items-center gap-x-4 mt-2">
                            <img src="/svg/Facebook.svg">
                            <img src="/svg/_Instagram.svg">
                            <img src="/svg/_Twitter.svg">
                            <img src="/svg/_Snapchat.svg">
                            <img src="/svg/_YouTube.svg">
                            <img src="/svg/_TikTok.svg">
                        </div>
                    </div>
                    <div class="flex mt-8 mr-auto">
                        <img src="/svg/wtsap.svg" class="mr-2">
                        <p class="text-nowrap text-base font-semibold not-italic leading-5 mt-1 text-white">+966 55 80 2 88
                            55</p>
                    </div>
                </div>

                <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                    <div class="col-span-2 sm:col-span-1">
                        <h2 class="text-sm not-italic font-bold leading-4 follow">
                            About Company
                        </h2>
                        <p class="font-medium text-base leading-4 my-3 text-white">About Us</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">News</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Store locations</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Careers</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Sell with us</p>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                        <h2 class="text-sm not-italic font-bold leading-4 follow">
                            Customer support
                        </h2>
                        <p class="font-medium text-base leading-4 my-3 text-white">Contact Us</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Returns & Exchanges</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Privacy Policy</p>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                        <h2 class="text-sm not-italic font-bold leading-4 follow">
                            Services
                        </h2>
                        <p class="font-medium text-base leading-4 my-3 text-white">Services & Warranty</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Terms & Conditions</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Shipping & Delivery </p>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                        <h2 class="text-sm not-italic font-bold leading-4 follow">
                            Our programs
                        </h2>
                        <p class="font-medium text-base leading-4 my-3 text-white">Cashback programs</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Gift Cards</p>
                        <p class="font-medium text-base leading-4 my-3 text-white">Weekly Offers</p>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-end mr-3">
                            <p class="text-sm not-italic font-semibold leading-normal mt-1 follow">AR</p>
                            <span class="mx-2 w-px h-4 rounded-lg text-white">|</span>
                            <p class="text-sm not-italic font-semibold leading-normal mt-1 text-white">EN</p>
                        </div>

                        <div class="mt-6 mb-3">
                            <p class="text-white text-xs font-medium leading-4 not-italic whitespace-nowrap">Available
                                payment methods</p>
                        </div>
                        <div class="mb-3">
                            <img src="/svg/Group-footer.svg">
                        </div>
                        <div class="flex space-x-3 ml-16">
                            <img src="/svg/Group-footer-2.svg">
                            <img src="/svg/Group-footer-3.svg">
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-3 border-t border-gray-700 pt-8">
                <div class="sm:flex sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        support@dukan.me
                    </span>

                    <ul class="flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                        <img src="/svg/Google Play_bagde.svg">

                        <img src="/svg/app-store.svg">

                        <img src="/svg/Google Play_bagde.svg">
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
    padding: 22px 104px;
    background: var(--Dark-Grey, #272727);
}

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.follow-section {
    margin-top: 16px;
}

.follow {
    color: rgba(255, 255, 255, 0.50);
}
</style>