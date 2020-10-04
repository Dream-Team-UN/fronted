<template>
  <div id="app">
    <header>
  <nav>
    <a class="brand">CORONAMAP</a>
    <router-link class="menu-item" to="/">Inicio</router-link>
    <router-link class="menu-item" to="/mapa">Mapa De Infectados</router-link>
    <router-link class="menu-item" to="/comportamiento">Comportamiento COVID-19</router-link>
    <router-link class="menu-item" to="/enlaces">Enlaces</router-link>
  </nav>  
</header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-image:url('./assets/bg4.jpg');
  background-position:inherit
  /*background-size:center;
  background-color: #89beb3;*/
}

header{
  width: 100vw;
  background-color: #212121;
  padding: 15px;
}

nav{
  display:flex;
  align-items:center;
  justify-content:flex-start;
}
.brand{
  color: #eeeeee;
  position: relative;
  border-bottom: 3px solid transparent;
  text-align:center;
  padding: 10px 20px;
  font-weight: bold;
  font-size: larger;
}

nav .menu-item{
  color: #eeeeee;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  text-decoration:none;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.3s;
}

nav .menu-item.active,
nav .menu-item:hover{
  background-color: #0d7377;
  border-bottom-color:#32e0c4;
}
nav .menu-item a{
  color: inherit;
  text-decoration: none;
}
</style>
