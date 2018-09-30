import Loading from './loading.vue';

export default (Vue) => {
    const LoadingController = Vue.extend(Loading);
    let instance = new LoadingController().$mount();

    Vue.prototype.$loading = () => {};

    Vue.prototype.$loading.start = () => {
        instance.width = 0;
        document.body.appendChild(instance.$el);
        instance.loadingTimer && clearInterval(instance.loadingTimer);
        instance.loadingTimer = setInterval(() => {
            if (instance.width < 95) {
                instance.width = instance.width + Math.floor(Math.random() * 3 + 1);
            } else {
                clearInterval(instance.loadingTimer);
            }
        }, 100);
    };

    Vue.prototype.$loading.end = () => {
        instance.loadingTimer && clearInterval(instance.loadingTimer);
        instance.width = 100;
        setTimeout(() => {
            instance.$el && instance.$el.remove();
        }, 500);
    };
};
