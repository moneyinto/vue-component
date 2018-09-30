import Toaster from './toaster.vue';

export default (Vue) => {
    const ToasterController = Vue.extend(Toaster);
    let instance = new ToasterController().$mount();

    Vue.prototype.$toaster = () => {};

    Vue.prototype.$toaster.show = (content, time) => {
        instance.content = content;
        document.body.appendChild(instance.$el);
        instance.toasterTimer && clearTimeout(instance.toasterTimer);
        instance.toasterTimer = setTimeout(() => {
            instance.$el && instance.$el.remove();
        }, time || 2000);
    };
};
