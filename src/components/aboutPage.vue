<template>
    <div class="bg-black h-vh-100 w-vw-100">
        <div class="page-content container-fluid">
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
                        Мы —
                    </h1>
                </b-col>
                <b-col cols="12">
                    <div class="floating">
                        <p>
                            выстраиаем отношения на позитивной участвуем в проектах, в которых всегда даем обратную
                            связь и поможем найти оптимальное решение  выстраиаем отношения на позитивной участвуем в проектах, в которых всегда даем обратную
                            связь и поможем найти оптимальное решение
                        </p>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "aboutPage",
    }
</script>
<style scoped lang="scss">
    @import "/src/scss/style.scss";

    .page-content {
        height: 100%;
        width: 100%;
        background: url("/img/about-bg.png") no-repeat center;
        background-size: cover;
        overflow: hidden;
    }

    h1 {
        margin: 50px 0 35px 210px;
        position: relative;
        z-index: 1;
    }

    .floating {
        p {
            font-weight: bold;
            font-size: 80px;
            line-height: 150%;

            letter-spacing: 0.1em;

            color: transparent;
            text-align: justify;
            -webkit-text-stroke: 1px $color-white;
        }
    }

</style>