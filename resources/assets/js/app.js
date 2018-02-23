
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { routes } from './routes';

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes    
});

window.axios.defaults.headers.common = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};


const app = new Vue({
    el: '#app',
    router
});
