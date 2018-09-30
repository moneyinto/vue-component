<template>
    <div class="loading-bar">
        <div class="loading-bar-inner" :style="{width: width + '%'}"></div>
    </div>
</template>

<script>
export default {
    name: 'loadingBar',
    data() {
        return {
            width: 0
        };
    }
};
</script>

<style scoped>
.loading-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    height: 2px;
}

.loading-bar-inner {
    height: 2px;
    background-color: #2d8cf0;
    transition: width .2s linear;
}
</style>
