<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>

<style>
    html {
        user-select: none;
    }

    body {
        margin: 0;
        min-width: 1080px;
        overflow: hidden;
    }

    #app {
        font-family: "微软雅黑";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    img {
        max-width: 100%;
    }

    /* ===[ Copyright 2013 Google Inc. All Rights Reserved. ]=== */
    ::-webkit-scrollbar {
        height: 0;
        width: 0;
    }

    ::-webkit-scrollbar-button {
        height: 0;
        width: 0;
    }

    .btn:active {
        opacity: 0.6;
    }

    .bscroll-vertical-scrollbar {
        width: 0 !important;
    }
</style>
