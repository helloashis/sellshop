
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




//Vue.component('main-component', require('./components/public/Main').default);

Vue.component('header-component', require('./components/public/Header').default);
Vue.component('slider-component', require('./components/public/Slider').default);
Vue.component('collection-component', require('./components/public/Collection').default);
Vue.component('featerproduct-component', require('./components/public/FeatureProduct').default);
Vue.component('comingproduct-component', require('./components/public/ComingProduct').default);
Vue.component('product-component', require('./components/public/Product').default);
Vue.component('blog-component', require('./components/public/Blog').default);
Vue.component('footer-component', require('./components/public/Footer').default);

const app = new Vue({
    el: '#content',
    router,
    store
});
