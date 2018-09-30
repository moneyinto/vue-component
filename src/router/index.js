import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home/home';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '',
            redirect: '/home'
        },

        {
            path: '/home',
            component: Home,
            name: '首页'
        }
    ]
});

export default router;
