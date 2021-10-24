/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import index from './index';
import vuetify from './vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPen, faTrash, faCamera)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

require('./bootstrap');

window.Vue = require('vue');


const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        index
    },
    vuetify
});
