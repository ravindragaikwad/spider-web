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

        // {
        //     path: '/SpiderWebProducts',
        //     name: 'Products',
        //     component: () => import('../components/SpiderWebProducts.vue'),
        //     children : [
        //         {
        //             path: '/Products/AIMarketplace',
        //     name: 'AI Marketplace',
        //     component: () => import('../components/Products/AIMarketplace.vue'),
        //         },
        //     ]
        // }
    ]
});

export default router;