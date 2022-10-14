import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../components/HomePage.vue'),
        },
        {
            path: '/AIMarketplace',
            name: 'AI Marketplace',
            component: () => import('../components/AIMarketplace.vue'),
        }
    ]
});

export default router;