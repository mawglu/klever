import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMask from 'v-mask'
import Vuelidate from 'vuelidate'
import {BModal, BootstrapVue,} from 'bootstrap-vue'
import VueSocialSharing from 'vue-social-sharing'
import VueScrollmagic from 'vue-scrollmagic'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMask);
Vue.use(Vuelidate);
Vue.use(BootstrapVue, BModal);
Vue.use(VueScrollmagic);

Vue.use(VueSocialSharing, {
    networks: {
        instagram: 'https://www.instagram.com/',
    }
});


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
            component: () => import('./components/seasonSlider'),
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
            path: '/advertising-constructions',
            name: 'advertising-constructions',
            component: () => import('./components/advertisingConstructionsPage')
        },
        {
            path: '/about',
            name: 'main-about',
            component: () => import('./components/mainPages'),
        },
        {
            path: '/about/details',
            name: 'about-details',
            component: () => import('./components/aboutPage')
        },
        {
            path: '/portfolio',
            name: 'main-portfolio',
            component: () => import('./components/mainPages')
        },
        {
            path: '/portfolio/for-clients',
            name: 'for-clients',
            component: () => import('./components/portfolioPage')
        },
        {
            path: '/contacts',
            name: 'main-contacts',
            component: () => import('./components/mainPages')
        },
        {
            path: '/blog',
            name: 'main-blog',
            component: () => import('./components/blogPage')
        }
    ]
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
