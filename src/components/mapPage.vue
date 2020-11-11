<template>
    <div @wheel="onwheel" class="page-content">
        <iframe src="https://www.google.com/maps/d/embed?mid=1lIJaYLf3myoMBkbgt0i58B2J8U22QxsM" width="640"
                height="480">

        </iframe>
    </div>
</template>

<script>

    export default {
        name: "mapPage",
        methods: {
            onwheel(ev) {
                const deltaY = ev.deltaY;
                if (this.windowWidth <= this.mobileSizeBreakpoint) {
                    return;
                } else {
                    if (deltaY < 0) {
                        this.$root.$emit('change-animation-direction', {
                            direction: 'top',
                        });

                        if (this.$route.name !== 'main-contacts') {
                            this.$router.push('/contacts');
                        }
                    }
                }

            }
        },
    }
</script>

<style scoped lang="scss">
    .page-content {
        iframe {
            width: 100vw;
            height: 100vh;
        }
    }

</style>