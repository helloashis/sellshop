
import deshboard from '../components/admin/Deshboard.vue';
import category from '../components/admin/category/Category.vue';
import addcategory from '../components/admin/category/AddCategory.vue';
import brand from '../components/admin/brand/Brand.vue';
import addbrand from '../components/admin/brand/AddBrand.vue';
import product from '../components/ExampleComponent.vue';



// Public component

import Index from '../components/public/Index';
import userlogin from '../components/public/auth/UserLogin.vue';
import userregistar from '../components/public/auth/UserRegistar.vue';
import userdashboard from '../components/public/user/UserDashboard.vue';



export const routes = [

    { path: '/home', component: deshboard },
    { path: '/category', component: category },
    { path: '/addcategory', component: addcategory },
    { path: '/brand', component: brand },
    { path: '/addbrand', component: addbrand },
    { path: '/product', component: product },



    //Public Route
    
    { path: '/', component: Index },
    { path: '/user-login', component: userlogin },
    { path: '/user-registar', component: userregistar },
    { path: '/users/user-dashboard', component: userdashboard, name:'userdashboard' },



]
