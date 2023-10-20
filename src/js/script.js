import * as customFunctions from './modules/functions.js'

customFunctions.handleBurger()
customFunctions.handleModal()
customFunctions.handleAccordion()
customFunctions.handleTabs()

// vendors
const swiperProjects = new Swiper('.swiper--projects', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 90,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--projects',
        prevEl: '.swiper-button-prev--projects',
    },
})
