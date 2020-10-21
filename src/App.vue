<template>
    <div id="app" class="position-relative">
        <main-feedback/>
        <transition v-bind="transitionProps">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'App',
        data() {
            return {
                transitionProps: {
                    name: 'fade',
                    mode: 'in-out',
                }
            }
        },
        components: {
            mainFeedback: () => import(/* webpackChunkName: "main-feedback" */'./components/mainFeedback'),
        },
        mounted() {
            this.$root.$on('change-animation-direction', this.changeTransitionProps);
        },
        methods: {
            changeTransitionProps(arg = {}) {
                if (typeof arg.direction !== "undefined") {
                    switch (arg.direction) {
                        case 'top':
                            this.transitionProps = {
                                name: 'anti-fade',
                                mode: 'in-out',
                            };
                            break;
                        case 'bottom':
                            this.transitionProps = {
                                name: 'fade',
                                mode: 'in-out',
                            };
                            break;
                        default:
                            break;
                    }
                }
            },
        }
    }
</script>

<style lang="scss">
    @import "./src/scss/style";

    $animation-time: .5s;

    .fade-enter-to {
        margin-top: -100vh;
        z-index: 100;
    }

    .fade-enter-active,
    .fade-leave-active {
        position: absolute;
        transition: margin-top $animation-time;
    }

    .fade-leave,
    .fade-leave-to {
        opacity: 0;
        z-index: 1;
    }


    .anti-fade-enter {
        margin-top: -200vh;
    }

    .anti-fade-enter-to {
        margin-top: -100vh;
        z-index: 100;
    }

    .anti-fade-enter-active {
        position: absolute;
        transition: margin-top $animation-time;
    }

    .anti-fade-leave-active {
        opacity: 0;
        position: absolute;
        transition: margin-top $animation-time;
    }

    .anti-fade-leave,
    .anti-fade-leave-to {
        opacity: 0;
        z-index: 1;
    }


</style>
