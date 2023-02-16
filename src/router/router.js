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
            path: '/Products/AIMarketplace',
            name: 'AI Marketplace',
            component: () => import('../components/Products/AIMarketplace.vue'),
        },
        {
            path: '/CreatorIDE',
            name: 'Creator IDE',
            component: () => import('../components/CreatorIDE.vue'),
        },
        {
            path: '/SpiChat',
            name: 'Spi Chat',
            component: () => import('../components/SpiChat.vue'),
        },
    ]
});

export default router;