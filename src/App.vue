<template>
    <div id="app">
        <main-feedback/>
        <transition v-bind="transitionProps" class="animate__animated">
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
                console.log(arg);
                if (typeof arg.direction !== "undefined") {
                    switch (arg.direction) {
                        case 'top':
                            this.transitionProps = {
                                name: 'anti-fade',
                                mode: 'out-in',
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

    .fade-enter-active,
    .fade-leave-active {
        transition: margin-top .5s;
    }

    .fade-leave-to {
        margin-top: -100vh;
    }

    .anti-fade-enter {
        margin-top: -100vh;
    }

    .anti-fade-enter-active,
    .anti-fade-leave-active {
        transition: margin-top .3s ease-in-out;
    }

    .anti-fade-leave-to {
        margin-top: 100vh;
    }

</style>
