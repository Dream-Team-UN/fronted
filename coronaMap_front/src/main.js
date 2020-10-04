import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Inicio from './Inicio.vue'
import Mapa from './Mapa.vue'
import Comportamiento from './Comportamiento.vue'
import Enlaces from './Enlaces.vue'

Vue.use(VueRouter);

const routes=[
  {path:'/', component: Inicio},
  {path:'/mapa', component: Mapa},
  {path:'/comportamiento', component: Comportamiento},
  {path:'/enlaces', component: Enlaces}
];

const router=new VueRouter({
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
