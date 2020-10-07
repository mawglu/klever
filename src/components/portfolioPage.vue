<template>
    <div class="bg-black h-vh-100 w-vw-100">
        <div class="page-content flipper-container-fluid">
            <div class="right-menu">
                <div class="sharing">
                    <a href="#">
                        <div class="circle circle-60 circle-white-br">
                            <svg width="20" height="26" viewBox="0 0 20 26" fill="none" class="m-auto"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15.8791" cy="12.9839" r="3.12131" stroke="white" stroke-width="2"/>
                                <circle cx="4.52366" cy="21.4529" r="3.12131" stroke="white" stroke-width="2"/>
                                <circle cx="4.52512" cy="4.51487" r="3.12131" stroke="white" stroke-width="2"/>
                                <path d="M7.2085 6.41211L13.3483 10.8619" stroke="white" stroke-width="2"/>
                                <path d="M7.2085 19.5557L13.3483 15.1059" stroke="white" stroke-width="2"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <b-row>
                <b-col cols="12">
                    <b-navbar variant="faded" toggleable="lg" type="white">
                        <b-navbar-brand href="/">
                            <img src="/img/icon/icon-logo-opacity.svg" alt="Klever studio">
                            <img src="/img/icon/icon-studio-w.svg" alt="Klever studio">
                        </b-navbar-brand>

                        <b-navbar-toggle target="nav-collapse"/>

                        <b-collapse id="nav-collapse" is-nav>
                             <b-navbar-nav class="ml-auto">
                                        <b-nav-item-dropdown text="Услуги">
                                            <b-dropdown-item href="/services-polygraphy">Производство полиграфии
                                            </b-dropdown-item>
                                            <b-dropdown-item href="/services-souvenirs">Сувенирная продукция
                                            </b-dropdown-item>
                                            <b-dropdown-item href="/">Рекламные конструкции</b-dropdown-item>
                                        </b-nav-item-dropdown>
                                        <b-nav-item href="/about">Агентство</b-nav-item>
                                        <b-nav-item href="/contacts">Контакты</b-nav-item>
                                        <b-nav-item href="/blog">Блог</b-nav-item>
                                    </b-navbar-nav>
                           <b-navbar-nav>
                                        <b-nav-item v-b-modal.feedback>Обратная связь</b-nav-item>
                                    </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </b-col>
                <b-col cols="11">
                    <h1 class="text-white">
                        Мы рады работать с нашими клиентами и партнерами
                    </h1>
                </b-col>
                <b-col cols="12">
                    <div class="portfolio-slider">
                        <div class="slide">
                            <div class="front">
                                <img src="/img/service-slide-1.png">
                            </div>
                            <div class="back">
                                <div class="mt-auto">
                                    <h3>
                                        Klever-store.ru
                                    </h3>
                                    <div class="text text-black text-lg-18 font-w-600">
                                        Разработка высоконагруженного<br>портала для klever-studio.ru
                                    </div>
                                </div>
                                <div class="mt-auto mb-5 ml-auto">
                                    <b-button v-b-modal.portfolio-1 variant="my">
                                        <div class="circle circle-80 circle-transparent circle-gray-br">
                                            <svg width="21" height="16" class="m-auto" viewBox="0 0 21 16"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.4039 8.8741C20.7944 8.48357 20.7944 7.85041 20.4039 7.45989L14.0399 1.09592C13.6494 0.7054 13.0162 0.7054 12.6257 1.09592C12.2352 1.48645 12.2352 2.11961 12.6257 2.51014L18.2826 8.16699L12.6257 13.8238C12.2352 14.2144 12.2352 14.8475 12.6257 15.2381C13.0162 15.6286 13.6494 15.6286 14.0399 15.2381L20.4039 8.8741ZM0.302734 9.16699H19.6968V7.16699H0.302734V9.16699Z"
                                                      fill="#161A25"/>
                                            </svg>
                                        </div>
                                    </b-button>
                                    <b-modal id="portfolio-1" size="xl" hide-header hide-footer hide-backdrop
                                             modal-class="portfolio-modal"
                                    >
                                        <b-button @click="$bvModal.hide('portfolio-1')" variant="modal">
                                            <div class="circle circle-80 circle-transparent circle-white-br d-flex">
                                                <svg class="m-auto" width="17" height="16" viewBox="0 0 17 16"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.60547 15.0713L15.7476 0.929154" stroke="white"
                                                          stroke-width="2"/>
                                                    <path d="M1.60547 0.928711L15.7476 15.0708" stroke="white"
                                                          stroke-width="2"/>
                                                </svg>
                                            </div>
                                        </b-button>
                                        <swiper ref="serviceSwiper"
                                                :options="swiperOptions"
                                        >
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-1.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-2.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-3.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <div class="swiper-pagination" slot="pagination"></div>
                                            <div class="swiper-button-prev" slot="button-prev"></div>
                                            <div class="swiper-button-next" slot="button-next"></div>
                                        </swiper>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="front">
                                <img src="/img/service-slide-2.png">
                            </div>
                            <div class="back">
                                <div class="mt-auto">
                                    <h3>
                                        Klever-store.ru
                                    </h3>
                                    <div class="text text-black text-lg-18 font-w-600">
                                        Разработка высоконагруженного<br>портала для klever-studio.ru
                                    </div>
                                </div>
                                <div class="mt-auto mb-5 ml-auto">
                                    <b-button v-b-modal.portfolio-2 variant="my">
                                        <div class="circle circle-80 circle-transparent circle-gray-br">
                                            <svg width="21" height="16" class="m-auto" viewBox="0 0 21 16"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.4039 8.8741C20.7944 8.48357 20.7944 7.85041 20.4039 7.45989L14.0399 1.09592C13.6494 0.7054 13.0162 0.7054 12.6257 1.09592C12.2352 1.48645 12.2352 2.11961 12.6257 2.51014L18.2826 8.16699L12.6257 13.8238C12.2352 14.2144 12.2352 14.8475 12.6257 15.2381C13.0162 15.6286 13.6494 15.6286 14.0399 15.2381L20.4039 8.8741ZM0.302734 9.16699H19.6968V7.16699H0.302734V9.16699Z"
                                                      fill="#161A25"/>
                                            </svg>
                                        </div>
                                    </b-button>
                                    <b-modal id="portfolio-2" size="xl" hide-header hide-footer hide-backdrop
                                             modal-class="portfolio-modal"
                                    >
                                        <b-button @click="$bvModal.hide('portfolio-2')" variant="modal">
                                            <div class="circle circle-80 circle-transparent circle-white-br d-flex">
                                                <svg class="m-auto" width="17" height="16" viewBox="0 0 17 16"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.60547 15.0713L15.7476 0.929154" stroke="white"
                                                          stroke-width="2"/>
                                                    <path d="M1.60547 0.928711L15.7476 15.0708" stroke="white"
                                                          stroke-width="2"/>
                                                </svg>
                                            </div>
                                        </b-button>
                                        <swiper ref="serviceSwiper"
                                                :options="swiperOptions"
                                        >
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-1.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-2.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-3.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <div class="swiper-pagination" slot="pagination"></div>
                                            <div class="swiper-button-prev" slot="button-prev"></div>
                                            <div class="swiper-button-next" slot="button-next"></div>
                                        </swiper>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="front">
                                <img src="/img/service-slide-3.png">
                            </div>
                            <div class="back">
                                <div class="mt-auto">
                                    <h3>
                                        Klever-store.ru
                                    </h3>
                                    <div class="text text-black text-lg-18 font-w-600">
                                        Разработка высоконагруженного<br>портала для klever-studio.ru
                                    </div>
                                </div>
                                <div class="mt-auto mb-5 ml-auto">
                                    <b-button v-b-modal.portfolio-3 variant="my">
                                        <div class="circle circle-80 circle-transparent circle-gray-br">
                                            <svg width="21" height="16" class="m-auto" viewBox="0 0 21 16"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.4039 8.8741C20.7944 8.48357 20.7944 7.85041 20.4039 7.45989L14.0399 1.09592C13.6494 0.7054 13.0162 0.7054 12.6257 1.09592C12.2352 1.48645 12.2352 2.11961 12.6257 2.51014L18.2826 8.16699L12.6257 13.8238C12.2352 14.2144 12.2352 14.8475 12.6257 15.2381C13.0162 15.6286 13.6494 15.6286 14.0399 15.2381L20.4039 8.8741ZM0.302734 9.16699H19.6968V7.16699H0.302734V9.16699Z"
                                                      fill="#161A25"/>
                                            </svg>
                                        </div>
                                    </b-button>
                                    <b-modal id="portfolio-3" size="xl" hide-header hide-footer hide-backdrop
                                             modal-class="portfolio-modal"
                                    >
                                        <b-button @click="$bvModal.hide('portfolio-3')" variant="modal">
                                            <div class="circle circle-80 circle-transparent circle-white-br d-flex">
                                                <svg class="m-auto" width="17" height="16" viewBox="0 0 17 16"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.60547 15.0713L15.7476 0.929154" stroke="white"
                                                          stroke-width="2"/>
                                                    <path d="M1.60547 0.928711L15.7476 15.0708" stroke="white"
                                                          stroke-width="2"/>
                                                </svg>
                                            </div>
                                        </b-button>
                                        <swiper ref="serviceSwiper"
                                                :options="swiperOptions"
                                        >
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-1.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-2.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-3.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <div class="swiper-pagination" slot="pagination"></div>
                                            <div class="swiper-button-prev" slot="button-prev"></div>
                                            <div class="swiper-button-next" slot="button-next"></div>
                                        </swiper>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="front">
                                <img src="/img/service-slide-1.png">
                            </div>
                            <div class="back">
                                <div class="mt-auto">
                                    <h3>
                                        Klever-store.ru
                                    </h3>
                                    <div class="text text-black text-lg-18 font-w-600">
                                        Разработка высоконагруженного<br>портала для klever-studio.ru
                                    </div>
                                </div>
                                <div class="mt-auto mb-5 ml-auto">
                                    <b-button v-b-modal.portfolio-4 variant="my">
                                        <div class="circle circle-80 circle-transparent circle-gray-br">
                                            <svg width="21" height="16" class="m-auto" viewBox="0 0 21 16"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.4039 8.8741C20.7944 8.48357 20.7944 7.85041 20.4039 7.45989L14.0399 1.09592C13.6494 0.7054 13.0162 0.7054 12.6257 1.09592C12.2352 1.48645 12.2352 2.11961 12.6257 2.51014L18.2826 8.16699L12.6257 13.8238C12.2352 14.2144 12.2352 14.8475 12.6257 15.2381C13.0162 15.6286 13.6494 15.6286 14.0399 15.2381L20.4039 8.8741ZM0.302734 9.16699H19.6968V7.16699H0.302734V9.16699Z"
                                                      fill="#161A25"/>
                                            </svg>
                                        </div>
                                    </b-button>
                                    <b-modal id="portfolio-4" size="xl" hide-header hide-footer hide-backdrop
                                             modal-class="portfolio-modal"
                                    >
                                        <b-button @click="$bvModal.hide('portfolio-4')" variant="modal">
                                            <div class="circle circle-80 circle-transparent circle-white-br d-flex">
                                                <svg class="m-auto" width="17" height="16" viewBox="0 0 17 16"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.60547 15.0713L15.7476 0.929154" stroke="white"
                                                          stroke-width="2"/>
                                                    <path d="M1.60547 0.928711L15.7476 15.0708" stroke="white"
                                                          stroke-width="2"/>
                                                </svg>
                                            </div>
                                        </b-button>
                                        <swiper ref="serviceSwiper"
                                                :options="swiperOptions"
                                        >
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-1.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-2.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="column">
                                                    <img src="/img/service-slide-3.png">
                                                </div>
                                                <div class="column">
                                                    <div class="title text text-lg-20 text-white font-w-800">
                                                        Современные технологии
                                                    </div>
                                                    <div class="subtitle text text-lg-18 text-white font-w-500 text-gilroy">
                                                        Достигли такого уровня,
                                                        что дальнейшее развитие различных форм деятельности влечет
                                                        за собой процесс внедрения и модернизации распределения
                                                        внутренних резервов и ресурсов. Повседневная практика
                                                        показывает, что граница обучения кадров выявляет срочную
                                                        потребность системы обучения кадров, соответствующей
                                                        насущным потребностям.
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <div class="swiper-pagination" slot="pagination"></div>
                                            <div class="swiper-button-prev" slot="button-prev"></div>
                                            <div class="swiper-button-next" slot="button-next"></div>
                                        </swiper>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <main-footer/>
    </div>
</template>


<script>
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
        name: "portfolioPage",
        props: {
            starterSlide: {
                type: Number,
                default: 0,
            },
        },
        data: () => {
            return {
                swiperOptions: {
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
            }
        },
        components: {
            Swiper,
            SwiperSlide,
            mainFooter: () => import(/* webpackChunkName: "main-footer" */'./mainFooter'),
        },
        swiper() {
            return this.$refs.serviceSwiper.$swiper; // инициализируем слайдер
        },
    }
</script>

<style lang="scss">
    @import "/src/scss/style.scss";

    h1 {
        max-width: 840px;
        margin: 50px 0 80px 210px;
        position: relative;
        z-index: 1;

        &:before {
            content: '';
            width: 197px;
            height: 197px;
            background: url("/img/season-h-bg.png") no-repeat center;
            background-size: contain;
            position: absolute;
            left: -10%;
            top: -20%;
            z-index: 0;
        }
    }

    .portfolio-slider {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin: 0 0 0 210px;


        .slide {
            width: 49%;
            display: flex;
            flex-direction: column;
            position: relative;
            cursor: pointer;
            margin: 1px;


            .front {
                width: 100%;
                height: 100%;
                padding: 0;

                img {
                    width: 100%;
                    height: 100%;
                    max-width: 614px;
                    max-height: 384px;

                }
            }

            .back {
                opacity: 0;
                padding: 48px 48px 43px 48px;
                display: flex;
                flex-direction: row;
                width: 106%;
                height: 110%;
                background: rgba(210, 255, 87, 0.9);
                border: 20px solid $color-green;

                position: absolute;
                top: -20px;
                left: -20px;
                z-index: 10;
                transition: all .3s ease-in-out;

                h3 {
                    font-family: Druk Wide Cy, sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 36px;

                    color: $color-black;
                    margin: 0 0 15px 0;
                }
            }

            &:hover {
                .back {
                    opacity: 1;

                }
            }
        }
    }

</style>