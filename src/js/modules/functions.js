export const handleBurger = () => {
    const headerInner = document.querySelector('.header__inner')
    const burger = document.querySelector('.burger')

    if (burger && headerInner) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active')
            headerInner.classList.toggle('active')
        })

        window.addEventListener('resize', (e) => {
            // while resize if width more than md css var
            if (e.target.outerWidth > 768) {
                burger.classList.remove('active')
                headerInner.classList.remove('active')
            }
        })
    }
}

export const handleModal = () => {
    const modals = document.querySelectorAll('.modal')
    const modalOpenBtns = document.querySelectorAll('.modal-open-btn')

    if (modalOpenBtns.length) {
        modalOpenBtns.forEach((btn) =>
            btn.addEventListener('click', () => {
                const modal = document.querySelector(
                    `.${btn.getAttribute('data-target')}`,
                )

                console.log(modal)

                if (modal) {
                    modal.classList.add('active')
                    // document.body.classList.add('fixed')

                    const scrollY =
                        document.documentElement.style.getPropertyValue(
                            '--scroll-y',
                        )
                    modal.style.top = `${scrollY}`
                    const body = document.body
                    body.style.position = 'fixed'
                    body.style.top = `-${scrollY}`

                    const modalCloseBtn =
                        modal.querySelector('.modal__btn-close')

                    if (modalCloseBtn) {
                        modalCloseBtn.addEventListener('click', () => {
                            modal.classList.remove('active')
                            // document.body.classList.remove('fixed')

                            const body = document.body
                            const scrollY = body.style.top
                            body.style.position = ''
                            window.scrollTo(0, parseInt(scrollY || '0') * -1)
                        })
                    }
                    window.addEventListener('click', (e) => {
                        if (e.target === modal) {
                            modal.classList.remove('active')
                            // document.body.classList.remove('fixed')

                            const body = document.body
                            const scrollY = body.style.top
                            body.style.position = ''
                            window.scrollTo(0, parseInt(scrollY || '0') * -1)
                        }
                    })
                }
            }),
        )

        window.addEventListener('scroll', () => {
            document.documentElement.style.setProperty(
                '--scroll-y',
                `${window.scrollY}px`,
            )
        })
    }
}

export const handleAccordion = () => {
    const accordion = document.querySelector('.accordion')

    if (accordion) {
        const accordionBtns = accordion.querySelectorAll('.accordion__item-btn')

        accordionBtns.forEach((btn) =>
            btn.addEventListener('click', () => {
                const accordionItem = btn.closest('.accordion__item')
                const accordionCollapse = accordionItem.querySelector(
                    '.accordion__item-collapse',
                )

                accordionCollapse.classList.toggle('active')
                btn.classList.toggle('active')
            }),
        )
    }
}

export const handleTabs = () => {
    const tabs = document.querySelector('.tabs')
    const tabsContent = document.querySelector('.tabs__content')
    if (tabs && tabsContent) {
        const tabsBtns = tabs.querySelectorAll('.tabs__nav-btn')

        const tabsPanes = tabsContent.querySelectorAll('.tabs__pane')

        tabsBtns.forEach((btn) =>
            btn.addEventListener('click', () => {
                tabsPanes.forEach((pane) => pane.classList.remove('active'))
                tabsBtns.forEach((btn) => btn.classList.remove('active'))

                const targetId = btn.getAttribute('data-target')

                btn.classList.toggle('active')
                tabsContent
                    .querySelector(`${targetId}`)
                    .classList.toggle('active')
            }),
        )
    }
}
