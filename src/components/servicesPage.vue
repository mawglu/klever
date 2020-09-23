<template>
    <div class="bg-black h-vh-100 w-vw-100" @wheel="onwheel">
        <h2>
            <router-link to="/season">^</router-link>
        </h2>
        <h1 class="text-white">
            Сувенирная продукция живет сегодня здесь и сейчас
        </h1>
    </div>
</template>

<script>
    export default {
        name: "servicesPage",
        methods: {
            onwheel(ev) {
                const deltaY = ev.deltaY;
                if (deltaY < 0) {
                    this.$root.$emit('change-animation-direction', {
                        direction: 'top',
                    });

                    if (this.$route.name !== 'season') {
                        this.$router.push('season');
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>