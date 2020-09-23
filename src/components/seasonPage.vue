<template>
    <div class="bg-black h-vh-100 w-vw-100" @wheel="onwheel">
        <h2>
            <router-link to="/">^</router-link>
        </h2>
        <h1 class="text-white">
            Интенсивным развитием, трудно недооценить
        </h1>
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

                    if (this.$route.name !== 'services') {
                        this.$router.push('services');
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

<style scoped>

</style>