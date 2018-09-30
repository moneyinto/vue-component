<template>
    <div class="toaster-box">
        <div class="toaster-content">
            <div class="toaster-text">
                {{content}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Toaster',
        data() {
            return {
                content: ''
            };
        }
    };
</script>

<style scoped>
    .toaster-box {
        padding: 8px;
        text-align: center;
        font-size: 14px;
        position: fixed;
        z-index: 1000;
        width: 100%;
        left: 0;
        pointer-events: none;
        animation-name: slideInDown;
        animation-duration: .3s;
        animation-fill-mode: both;
    }

    .toaster-content {
        display: inline-block;
        pointer-events: all;
        padding: 8px 16px;
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
        background: #fff;
        position: relative;
    }

    @keyframes slideInDown {
        0% {
            top: -60px;
        }

        to {
            top: 16px;
        }
    }
</style>
