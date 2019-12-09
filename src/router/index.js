import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: "active",
    routes: [{
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: () =>
                import ( /* webpackChunkName: "recommend" */ 'views/recommend/recommend')
        },
        {
            path: '/singer',
            name: 'singer',
            component: () =>
                import ( /* webpackChunkName: "singer" */ 'views/singer/singer')
        },
        {
            path: '/rank',
            name: 'rank',
            component: () =>
                import ( /* webpackChunkName: "rank" */ 'views/rank/rank')
        },
        {
            path: '/search',
            name: 'search',
            component: () =>
                import ( /* webpackChunkName: "search" */ 'views/search/search')
        }
    ]
})