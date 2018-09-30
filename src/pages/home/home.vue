<template>
    <div class="container">
        <div @click="toaster()">toaster</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        toaster() {
            this.$toaster.show('好好好哈哈');
            this.$loading.start();
            this.$alert.show('好好活动沙发斯蒂芬大是大非', 'sdfdsfdsfd', () => {
                this.$loading.end();
            });
        }
    }
};
</script>

<style scoped>
.container {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
</style>
