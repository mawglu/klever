<template>
    <div class="bg-black h-vh-100 w-vw-100" @wheel="onwheel">
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
                            <img src="img/icon/klever-logo-opacity.svg" alt="Klever studio">
                            <img src="img/icon/klever-studio-w.svg" alt="Klever studio">
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
                <b-col cols="11">
                    <h1 class="text-white">
                        Интенсивным развитием, трудно недооценить
                    </h1>
                    <div class="btn-group">
                        <a href="#" class="d-flex">
                            <div class="circle circle-80 circle-green">
                                <svg width="21" height="16" class="m-auto" viewBox="0 0 21 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4039 8.8741C20.7944 8.48357 20.7944 7.85041 20.4039 7.45989L14.0399 1.09592C13.6494 0.7054 13.0162 0.7054 12.6257 1.09592C12.2352 1.48645 12.2352 2.11961 12.6257 2.51014L18.2826 8.16699L12.6257 13.8238C12.2352 14.2144 12.2352 14.8475 12.6257 15.2381C13.0162 15.6286 13.6494 15.6286 14.0399 15.2381L20.4039 8.8741ZM0.302734 9.16699H19.6968V7.16699H0.302734V9.16699Z"
                                          fill="#161A25"/>
                                </svg>
                            </div>
                            <div class="text my-auto">
                                подробно
                            </div>
                        </a>
                        <a href="#" class="d-flex">
                            <div class="circle circle-80 circle-green">
                                <svg width="21" height="16" class="m-auto" viewBox="0 0 21 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4039 8.8741C20.7944 8.48357 20.7944 7.85041 20.4039 7.45989L14.0399 1.09592C13.6494 0.7054 13.0162 0.7054 12.6257 1.09592C12.2352 1.48645 12.2352 2.11961 12.6257 2.51014L18.2826 8.16699L12.6257 13.8238C12.2352 14.2144 12.2352 14.8475 12.6257 15.2381C13.0162 15.6286 13.6494 15.6286 14.0399 15.2381L20.4039 8.8741ZM0.302734 9.16699H19.6968V7.16699H0.302734V9.16699Z"
                                          fill="#161A25"/>
                                </svg>
                            </div>
                            <div class="text my-auto">
                                подробно
                            </div>
                        </a>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "seasonPage",
        methods: {
            onwheel(ev) {
                const deltaY = ev.deltaY;

                if (deltaY > 0) {
                    this.$root.$emit('change-animation-direction', {
                        direction: 'bottom',
                    });

                    if (this.$route.name !== 'services-polygraphy') {
                        this.$router.push('services-polygraphy');
                    }
                } else if (deltaY < 0) {
                    this.$root.$emit('change-animation-direction', {
                        direction: 'top',
                    });

                    if (this.$route.name !== 'main') {
                        this.$router.push('/');
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "/src/scss/style.scss";

    .page-content {
        height: 100%;
        width: 100%;
        background: url("/img/season-bg.png") no-repeat right;
        background-size: 50%;
        overflow: hidden;
    }


    h1 {
        max-width: 840px;
        margin: 50px 0 35px 210px;
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

    .btn-group {
        margin: 0 0 85px 210px;
        display: flex;

        a {
            margin: auto 50px auto 0;

            & > * {
                transition: all .3s ease-in-out;
            }

            .text {
                color: $color-white;
                font-weight: 900;
                font-size: 10px;
                line-height: 180%;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                margin: auto 0 auto 20px;
            }

            &:hover {
                .circle-green {
                    background: transparent;
                    border: 1px solid $color-green;

                    svg {
                        path {
                            fill: $color-green;
                        }
                    }
                }

                .text {
                    color: $color-green;
                }
            }
        }
    }
</style>