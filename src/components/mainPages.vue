<template>
    <div @wheel="onwheel">
        <div class="bg-green">
            <div class="page">
                <div class="page-main" ref="headerSlider">
                    <b-row>
                        <b-col cols="12">
                            <b-navbar variant="faded" toggleable="lg" type="light">
                                <b-navbar-brand href="/">
                                    <img src="img/klever-logo.svg" alt="Klever studio">
                                    <img src="img/klever-studio.svg" alt="Klever studio">
                                </b-navbar-brand>

                                <b-navbar-toggle target="nav-collapse"/>

                                <b-collapse id="nav-collapse" is-nav>
                                    <b-navbar-nav class="ml-auto">
                                        <b-nav-item-dropdown text="Услуги">
                                            <b-dropdown-item href="#">Производство полиграфии</b-dropdown-item>
                                            <b-dropdown-item href="#">Рекламные конструкции</b-dropdown-item>
                                            <b-dropdown-item href="#">Сувенирная продукция</b-dropdown-item>
                                            <b-dropdown-item href="#">Сувенирная продукция</b-dropdown-item>
                                        </b-nav-item-dropdown>
                                        <b-nav-item href="#">Агентство</b-nav-item>
                                        <b-nav-item href="#">Контакты</b-nav-item>
                                        <b-nav-item href="#">Блог</b-nav-item>
                                    </b-navbar-nav>
                                    <b-navbar-nav>
                                        <b-nav-item href="#">Обратная связь</b-nav-item>
                                    </b-navbar-nav>
                                </b-collapse>
                            </b-navbar>
                        </b-col>
                        <b-col cols="12">
                            <div class="social">
                                <div class="social-item">
                                    <a href="#" target="_blank" referrerpolicy="no-referrer">
                                        <i class="icon inst"/>
                                    </a>
                                </div>
                                <div class="social-item">
                                    <a href="#" target="_blank" referrerpolicy="no-referrer">
                                        <i class="icon vk"/>
                                    </a>
                                </div>
                                <div class="social-item">
                                    <a href="#" target="_blank" referrerpolicy="no-referrer">
                                        <i class="icon fb"/>
                                    </a>
                                </div>
                            </div>
                            <swiper ref="mySwiper"
                                    :options="swiperOptions"
                                    @slideChange="sliderClicked"

                            >
                                <swiper-slide class="page-item item_1">
                                    <div class="slide-menu">
                                        <a href="#" class="slide-menu-item">
                                            <div class="image">
                                                <img src="/img/icon/klever-1.svg">
                                            </div>
                                            <div class="text">
                                                Производство<br> полиграфии
                                            </div>
                                        </a>
                                        <a href="#" class="slide-menu-item">
                                            <div class="image">
                                                <img src="/img/icon/klever-2.svg">
                                            </div>
                                            <div class="text">
                                                Рекламные<br> конструкции
                                            </div>
                                        </a>
                                        <a href="#" class="slide-menu-item">
                                            <div class="image">
                                                <img src="/img/icon/klever-3.svg">
                                            </div>
                                            <div class="text">
                                                Сувенирная<br> продукция
                                            </div>
                                        </a>
                                    </div>
                                    <h1 class="my-auto">Рекламное<br> агентство</h1>
                                    <div class="slide-contact">
                                        <a href="#" class="link link-page">
                                            <i class="pointer"/>
                                            Сезонные предложения
                                        </a>
                                        <a href="#" class="link link-mail">E: andrey@klever-studio.ru</a>
                                        <a href="#" class="link link-phone">
                                            <i class="wa"/>
                                            <i class="tg"/>
                                            T: +7 (926) 339 75 47
                                        </a>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="page-item item_2">
                                    <h1>Агентство</h1>
                                    <h4>
                                        Klever studio — агентство делающее качественную
                                        рекламную продукцию, основано в 2010 году
                                    </h4>
                                    <div class="slide-counter">
                                        <div class="slide-counter-item">
                                            <span class="nubmer">
                                                25
                                            </span><br>
                                            <span class="text">
                                                Направлений<br> деятельности
                                            </span>
                                        </div>
                                        <div class="slide-counter-item">
                                            <span class="nubmer">
                                               50
                                            </span><br>
                                            <span class="text">
                                               Партнеров<br> производств
                                            </span>
                                        </div>
                                        <div class="slide-counter-item">
                                            <span class="nubmer">
                                              35
                                            </span><br>
                                            <span class="text">
                                               Поставщиков<br> продукции
                                            </span>
                                        </div>
                                        <div class="slide-counter-item">
                                            <span class="nubmer">
                                               35 000+
                                            </span><br>
                                            <span class="text">
                                               Готовых<br> сувениров
                                            </span>
                                        </div>
                                    </div>
                                    <div class="slide-contact">
                                        <a href="#" class="link link-page">
                                            <i class="pointer"/>
                                            О работе с нами
                                        </a>
                                        <a href="#" class="link link-mail">E: andrey@klever-studio.ru</a>
                                        <a href="#" class="link link-phone">
                                            <i class="wa"/>
                                            <i class="tg"/>
                                            T: +7 (926) 339 75 47
                                        </a>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="page-item item_3">
                                    <h1>Клиенты</h1>
                                    <h4>
                                        Мы ценим наших клиентов и благодарны им за выбор работать с нами
                                    </h4>
                                    <div class="slide-client">
                                        <img class="img-fluid" src="/img/client-1.png">
                                    </div>
                                    <div class="slide-contact">
                                        <a href="#" class="link link-page">
                                            <i class="pointer"/>
                                            Портфолио
                                        </a>
                                        <a href="#" class="link link-mail">E: andrey@klever-studio.ru</a>
                                        <a href="#" class="link link-phone">
                                            <i class="wa"/>
                                            <i class="tg"/>
                                            T: +7 (926) 339 75 47
                                        </a>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="page-item item_4">
                                    <h1 class="text-black">
                                        Slide 4
                                    </h1>
                                </swiper-slide>

                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
        name: "MainScrollSlider",
        props: {
            starterSlide: {
                type: Number,
                default: 0,
            },
        },
        components: {
            Swiper,
            SwiperSlide
        },
        data: () => {
            return {
                needForChangeRoute: true,
                xPath: [ // ссылки по горизонтали
                    {path: '/'},
                    {path: '/about'},
                    {path: '/portfolio'},
                    {path: '/contacts'}
                ],
                yPath: [ // ссылки по вертикали
                    {path: 'season'},
                    {path: 'services'},
                ],
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                currentSlideNum: 0,
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper; // инициализируем слайдер
            }
        },
        mounted() {
            this.needForChangeRoute = false;
            for (let i = 0; i < this.xPath.length; i++) {
                if (this.xPath[i].path === this.$route.path) { // сравниваем элемент xPath и настоящий url
                    this.swiper.slideTo(i, 0, false); // вызываем элемент слайда
                    this.currentSlideNum = i;
                }
            }
            this.needForChangeRoute = true;
        },
        methods: {
            sliderClicked() {
                const pageNum = this.swiper.realIndex; // получаем активный слайд

                if (this.needForChangeRoute) {
                    this.$router.push(this.xPath[pageNum].path); // переходим к url с таким же номером массива как pageNum
                    this.currentSlideNum = pageNum;
                }
                if (pageNum == '0') {
                    this.$refs.headerSlider.className = '';
                    this.$refs.headerSlider.classList.add('page-main');
                } else if (pageNum == '1') {
                    this.$refs.headerSlider.className = '';
                    this.$refs.headerSlider.classList.add('page-about');
                } else if (pageNum == '2') {
                    this.$refs.headerSlider.className = '';
                    this.$refs.headerSlider.classList.add('page-portfolio');
                } else if (pageNum == '3') {
                    this.$refs.headerSlider.className = '';
                    this.$refs.headerSlider.classList.add('page-contacts');
                }
            },
            // onwheel(ev) {
            // console.log('mainPages onWheel is started');
            // const deltaY = ev.deltaY;

            // switch (this.currentSlideNum) {
            //     case 0:
            //         if (deltaY > 0) {
            //
            //             this.$root.$emit('change-animation-direction', {
            //                 direction: 'bottom',
            //             });
            //
            //             if (this.$route.name !== 'season') {
            //                 this.$router.push('season');
            //             }
            //         }
            //         break;
            //     case 1:
            //         if (deltaY > 0) {
            //             if (this.$route.path !== '/about/details') {
            //                 this.$router.push('/about/details');
            //             }
            //         }
            //         break;
            //     case 2:
            //         break;
            //     case 3:
            //         break;
            //     default:
            //         break;
            // }
            // console.log('mainPages onWheel is ended');
            // }
        }
    }

</script>

<style lang="scss">
    @import "./src/scss/style";

    .page {
        background: url("/img/blob.png") no-repeat right 0 bottom 0;
        height: 100vh;
        @include _768 {
            height: 100%;
        }

        &-item {
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100%;
            overflow-y: inherit;
            overflow-x: hidden;

            position: relative;

            & > * {
                position: relative;
                z-index: 5;
            }

        }

        &-main {
            height: 100%;
            background: url("/img/slide-1.png") no-repeat right 0 bottom 0;
        }

        &-about {
            height: 100%;
            background: url("/img/slide-2.png") no-repeat right 0 bottom 0;
        }

        &-portfolio {
            height: 100%;
            background: url("/img/slide-3.png") no-repeat right 0 bottom 0;
        }

        &-contacts {
            height: 100%;
            background: url("/img/slide-4.png") no-repeat right 0 bottom 0;
        }
    }
</style>