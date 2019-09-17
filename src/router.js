import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import freeTrial from './views/freeTrial.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/trial',
            name: 'trial',
            component: freeTrial
        }
    ]
})