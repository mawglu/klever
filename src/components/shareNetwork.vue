<template>
    <div class="social-wrap">
        <transition name="backInUp">
            <div class="social" v-if="show">
                <template>
                    <ShareNetwork
                            v-for="network in networks"
                            :network="network.network"
                            :key="network.network"
                            :style="{backgroundColor: network.color}"
                            :url="sharing.url"
                    >
                        <div class="social-item social-item-white">
                            <i v-bind:class="network.icon"></i>
                        </div>
                    </ShareNetwork>
                </template>
            </div>
        </transition>
        <div :class="[{'active': show},'sharing']" @click="show = !show">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "shareNetwork",
        data: () => {
            return {
                show: false,
                sharing: {
                    url: 'https://klever-print.ru/',
                },
                networks: [
                    {network: 'instagram', name: 'Instagram', icon: 'icon inst'},
                    {network: 'vk', name: 'Vk', icon: 'icon vk'},
                    {network: 'facebook', name: 'Facebook', icon: 'icon fb'},
                ]
            }
        },
    }
</script>


<style scoped lang="scss">
    @import "/src/scss/style.scss";

    .backInUp {
        animation: backInUp 1.5s;
        animation-timing-function: ease-out;
    }

    .backInUp-enter-active {
        animation: backInUp-in .5s;
    }

    .backInUp-leave-active {
        animation: backInUp-in .5s reverse;
    }


    @-webkit-keyframes backInUp-in {
        0% {
            transform: translateY(1200px) scale(.7);
            opacity: .7;
        }

        80% {
            transform: translateY(0px) scale(.7);
            opacity: .7;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes backInUp-in {
        0% {
            transform: translateY(1200px) scale(.7);
            opacity: .7;
        }

        80% {
            transform: translateY(0px) scale(.7);
            opacity: .7;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .social-wrap {
        .circle {
            &-white-br {
                border: 1px solid rgba(255, 255, 255, 0.2);

                &:hover,
                &:focus {
                    background: $color-white;

                    svg {
                        filter: invert(100%);
                    }
                }
            }

        }
    }

</style>