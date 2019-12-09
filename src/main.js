import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/'
import store from './store/'
import 'amfe-flexible'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    loading: require('./common/image/default.png')
})

Vue.config.productionTip = false

import "common/stylus/index.styl"
import "common/js/resetFont.js"

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')