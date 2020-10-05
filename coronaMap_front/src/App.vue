<template>
  <div id="app">
    <header>
  <nav>
    <img src="./assets/logo_b.png" alt="CornoamapTitle" style="width:135px;height:60px;">
    <router-link class="menu-item" to="/">Inicio</router-link>
    <router-link class="menu-item" to="/mapa">Mapa De Infectados</router-link>
    <router-link class="menu-item" to="/comportamiento">Comportamiento COVID-19</router-link>
    <router-link class="menu-item" to="/enlaces">Enlaces</router-link>
  </nav>  
</header>
    <router-view></router-view>
  <footer>
    <div class="informacion">
    <p>Ingenieria de Software 2 - Universidad Nacional</p>
  </div>
  <div class="social">
    <a href="#" class="soporte">Contact Us</a>
    <a href="#" class="github">Github</a>
  </div>
  </footer>
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
  /*background-image:url('./assets/BG.jpg');
  background-position:inherit*/
  background-color: #0d7377;
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
  /*color: #eeeeee;*/
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
  background-color: #a6a6a4;
  border-bottom-color:#32e0c4;
}
nav .menu-item a{
  color: inherit;
  text-decoration: none;
}
footer{
 position:fixed;
 bottom:0;
 width: 100%;
 background-color: #212121;
 padding: 15px;
}
footer .informacion{
  width: 50%;
  float: left;
  color: #eeeeee;
}
footer .social{
  width: 50%;
  float: right;
}
.soporte{
  text-align: center;
  color: #eeeeee;
  
}
.github{
  text-align: center;
  color: #eeeeee;
}


</style>
