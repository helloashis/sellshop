
require('./bootstrap');


window.Vue = require('vue');



import VueRouter from 'vue-router';
Vue.use(VueRouter)


import {routes} from './routes/route';

const router = new VueRouter({
    routes,
    mode:'history',
})

// VueX
import Vuex from 'vuex'

Vue.use(Vuex)
import storeData from "./store/store";

const store = new Vuex.Store(
    storeData
);


import { Form, HasError, AlertError } from 'vform';

window.Form = Form;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);


//Vue.component('header-component', require('./components/public/Header').default);

const app = new Vue({
    el: '#app',
    router
});
