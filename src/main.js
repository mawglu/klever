import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import MainScrollSlider from './components/MainScrollSlider'

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        };
        window.addEventListener('scroll', f)
    }
});
Vue.directive('wheel', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('wheel', f)
            }
        };
        window.addEventListener('wheel', f)
    }
});


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainScrollSlider',
            components: {default: MainScrollSlider},
            props: {default: true}
        },
        {
            path: '/about',
            name: 'MainScrollSlider',
            components: {default: MainScrollSlider},
            props: {default: true}
        },
        {
            path: '/portfolio',
            name: 'MainScrollSlider',
            components: {default: MainScrollSlider},
            props: {default: true}
        },
        {
            path: '/contacts',
            name: 'MainScrollSlider',
            components: {default: MainScrollSlider},
            props: {default: true}
        }
    ]
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
