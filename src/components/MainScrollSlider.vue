<template>
    <swiper class="page bg-green"
            ref="mySwiper"
            :options="swiperOptions"
            @slideChange="sliderClicked"
    >
        <swiper-slide class="page-item">
            <h1>Slide 1</h1>
        </swiper-slide>
        <swiper-slide class="page-item">
            <h1>Slide 2</h1>
        </swiper-slide>
        <swiper-slide class="page-item">
            <h1>Slide 3</h1>
        </swiper-slide>
        <swiper-slide class="page-item">
            <h1>Slide 4</h1>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!--    <div class="slider-wrap bg-green" ref="sliderWrap">-->
    <!--        <div class="slider-slide" ref="sliderSlide" v-for="i in 4" :key="i">-->
    <!--            <h1>Слайд {{i}}</h1>-->
    <!--        </div>-->
    <!--    </div>-->
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
                hPath: [
                    {path: '/'},
                    {path: '/about'},
                    {path: '/portfolio'},
                    {path: '/contacts'}
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
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper; // инициализируем слайдер
            }
        },
        mounted() {
            this.needForChangeRoute = false;
            for (let i = 0; i < this.hPath.length; i++) {
                if (this.hPath[i].path === this.$route.path) {
                    this.swiper.slideTo(i, 0, false);
                }
            }
            this.needForChangeRoute = true;
        },
        methods: {
            sliderClicked() {
                if (this.needForChangeRoute) {
                    const pageNum = this.swiper.realIndex; // получаем активный слайд
                    this.$router.push(this.hPath[pageNum].path);
                }
            },
            // handleScroll: function (e) {
            //     e.preventDefault();
            //     e.stopPropagation();
            //
            //     console.log(e);
            //     if (e.deltaX >= 1 && this.numOfActiveSlide < 4) {
            //         console.log('x scroll right');
            //         this.numOfActiveSlide++;
            //         let deltaWidth = this.$refs.slider.clientWidth * this.numOfActiveSlide;
            //         console.log(deltaWidth);
            //         this.$refs.slider.scrollTo(deltaWidth, 0);
            //     } else if (e.deltaX <= -1 && this.numOfActiveSlide > 0) {
            //         console.log('x scroll left');
            //         this.numOfActiveSlide--;
            //         let deltaWidth = this.$refs.slider.clientWidth * this.numOfActiveSlide;
            //         console.log(deltaWidth);
            //         this.$refs.slider.scrollTo(deltaWidth, 0);
            //     } else if (e.deltaY > 1) {
            //         console.log('y scroll');
            //         // this.$refs.slider.scrollTo(0, 10)
            //     }
            // }
        }
    }

</script>

<style scoped lang="scss">

    .page {
        &-item {
            display: flex;
            width: 100vw;
            height: 100vh;
        }
    }
</style>