<template>
    <div id="app">
        <MainScrollSlider/>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
            MainScrollSlider: () => import(/* webpackChunkName: "main-scroll-slider" */'./components/MainScrollSlider'),
        }
    }
</script>

<style lang="scss">

    $color-green: #D2FF57;
    $color-pink: #F000FE;
    $color-white: #FFFFFF;
    $color-black: #161A25;
    html,
    body {
        margin: 0;
    }

    h1 {
        font-size: 80px;
        line-height: 110%;
        margin: 0;
    }

    h2 {
        font-size: 60px;
        line-height: 130%;
        margin: 0;
    }

    .bg {
        &-green {
            background: $color-green;
        }

        &-black {
            background: $color-black;
        }
    }
</style>
