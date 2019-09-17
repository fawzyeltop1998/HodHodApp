import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;



import VueTelInput from 'vue-tel-input';

Vue.use(VueTelInput);





Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')