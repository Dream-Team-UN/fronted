import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d';
import VueRouter from 'vue-router'
import App from './App.vue'
import Inicio from './Inicio.vue'
import Mapa from './Mapa.vue'
import Comportamiento from './Comportamiento.vue'
import ComparacionDptos from './ComparacionDptos'
import ComparacionMun from './ComparacionMun'
import Enlaces from './Enlaces.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import Chart from 'primevue/chart';
import twitter from 'vue-twitter'

Vue.use(VueRouter);
Vue.use(Carousel3d);
Vue.use(Chart);
Vue.use(twitter)

const routes=[
  {path:'/', component: Inicio},
  {path:'/mapa', component: Mapa},
  {path:'/comportamiento', component: Comportamiento},
  {path:'/enlaces', component: Enlaces},
  {path:'/comportamiento/Dptos', component: ComparacionDptos},
  {path:'/comportamiento/Municipios', component: ComparacionMun}
];

const router=new VueRouter({
  routes
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCUKpHZmqH_-Qob7h_ZlzJJmgYxqudTs-M",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})