import * as customFunctions from './modules/functions.js'

customFunctions.handleBurger()
customFunctions.handleModal()
customFunctions.handleAccordion()
customFunctions.handleTabs()

// vendors
const swiperProjects = new Swiper('.swiper--projects', {
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

    navigation: {
        nextEl: '.swiper-button-next--projects',
        prevEl: '.swiper-button-prev--projects',
    },
})
const swiperPartnersBuild = new Swiper('.swiper--partners-build', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--partners-build',
        prevEl: '.swiper-button-prev--partners-build',
    },
})
const swiperPartnersBank = new Swiper('.swiper--partners-bank', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--partners-bank',
        prevEl: '.swiper-button-prev--partners-bank',
    },
})
const swiperCert = new Swiper('.swiper--cert', {
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
        992: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--cert',
        prevEl: '.swiper-button-prev--cert',
    },
})
const swipertestimonials = new Swiper('.swiper--testimonials', {
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
        992: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--testimonials',
        prevEl: '.swiper-button-prev--testimonials',
    },
})
const swiperProject = new Swiper('.swiper--project', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
const swiperProjectBorder = new Swiper('.swiper--project-border', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

const swiperProjectVideo = new Swiper('.swiper--project-video', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,

    navigation: {
        nextEl: '.swiper-button-next--project-video',
        prevEl: '.swiper-button-prev--project-video',
    },
})
