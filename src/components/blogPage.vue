<template>
    <div>
        <div class="bg-white">
            <main-feedback/>
            <div class="page container-fluid">
                <div class="page-main" ref="headerSlider">
                    <b-row>
                        <b-col cols="12">
                            <b-navbar variant="faded" toggleable="lg" type="light">
                                <b-navbar-brand href="/">
                                    <img src="/img/icon/icon-logo.svg" alt="Klever studio">
                                    <img src="/img/icon/icon-studio.svg" alt="Klever studio">
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
                            <div class="blog">
                                <h1>
                                    Блог Klever
                                </h1>
                                <div class="blog-wrapper">
                                    <a class="blog-item">
                                        <img src="/img/3.jpg">
                                        <div class="title">
                                            Про сайты
                                        </div>
                                        <div class="subtitle">
                                            Разработка высоконагруженного портала для klever-studio.ru
                                        </div>
                                    </a>
                                    <a class="blog-item">
                                        <img src="/img/1.jpg">
                                        <div class="title">
                                            Про сайты
                                        </div>
                                        <div class="subtitle">
                                            Разработка высоконагруженного портала для klever-studio.ru

                                        </div>
                                    </a>
                                    <a class="blog-item">
                                        <img src="/img/2.jpg">
                                        <div class="title">
                                            Про сайты
                                        </div>
                                        <div class="subtitle">
                                            Разработка высоконагруженного портала для klever-studio.ru

                                        </div>
                                    </a>
                                    <a class="blog-item">
                                        <img src="/img/3.jpg">
                                        <div class="title">
                                            Про сайты
                                        </div>
                                        <div class="subtitle">
                                            Разработка высоконагруженного портала для klever-studio.ru
                                        </div>
                                    </a>
                                    <a class="blog-item">
                                        <img src="/img/3.jpg">
                                        <div class="title">
                                            Про сайты
                                        </div>
                                        <div class="subtitle">
                                            Разработка высоконагруженного портала для klever-studio.ru
                                        </div>
                                    </a>
                                    <a class="blog-item">
                                        <img src="/img/1.jpg">
                                        <div class="title">
                                            Про сайты
                                        </div>
                                        <div class="subtitle">
                                            Разработка высоконагруженного портала для klever-studio.ru

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <main-footer/>
        </div>
    </div>
</template>

<script>

    export default {
        name: "blogPage",
        components: {
            mainFooter: () => import(/* webpackChunkName: "main-footer" */'./mainFooter'),
        },
    }
</script>

<style lang="scss">
    @import "./src/scss/style";

    .bg-white {
        .footer {
            border-top: 1px solid rgba(22, 26, 37, 0.2);

            &-column {
                .text-white,
                .link-w {
                    color: $color-black !important;

                    i {
                        filter: none;
                        opacity: 1;
                    }
                }

                svg {
                    path {
                        fill: $color-black !important;
                    }
                }
            }
        }

        .blog {
            overflow: hidden;
            margin: 0 118px 0 210px;

            h1 {
                margin: 0 0 42px 0;
            }

            .blog-wrapper {
                columns: 3;
                column-gap: 40px;
                width: 100%;

                .blog-item {
                    width: calc(100% / 3);

                    img {
                        max-width: 100%;
                        height: auto;
                    }

                    .title {
                        font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 24px;
                        color: $color-black;
                        margin: 30px 0 17px 0;
                    }

                    .subtitle {
                        font-family: Gilroy, sans-serif;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 150%;

                        color: $color-black;
                        margin: 0 0 60px 0;
                    }
                }
            }
        }
    }

</style>