import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('./components/mainPages'),
        },
        {
            path: '/season',
            name: 'season',
            component: () => import('./components/seasonPage'),
        },
        {
            path: '/services-polygraphy',
            name: 'services-polygraphy',
            component: () => import('./components/servicesPolygraphyPage')
        },
        {
            path: '/services-souvenirs',
            name: 'services-souvenirs',
            component: () => import('./components/servicesSouvenirsPage')
        },
        {
            path: '/about',
            name: 'main-about',
            component: () => import('./components/mainPages'),
        },
        {
            path: '/about/details',
            name: 'about-details',
            component: () => import('./components/aboutPages')
        },
        {
            path: '/portfolio',
            name: 'main-portfolio',
            component: () => import('./components/mainPages')
        },
        {
            path: '/contacts',
            name: 'main-contacts',
            component: () => import('./components/mainPages')
        }
    ]
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
