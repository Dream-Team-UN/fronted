<template>
    <div>
        
        <carousel-3d :width="550" :height="450">
            <slide :index="0">
            <div class="slide">
              <h1 class="titulo-slide">Bienvenido a CoronaMap</h1>
              <br>
              <p class="parrafo-slide">En este sitio web podrás encontrar información completa sobre el Coronavirus
                y su relación y comportamiento en el país. Este proyecto fue desarrollado para la asignatura de 
                Ingeniería de Software 2 correspendiente el periodo 2020-2.
              </p>
              <br>
              <br>
              <img src="./assets/saludo.png" style="width:200px;height:200px;float:right">
            </div>
            </slide>
            <slide :index="1">
            <div class="slide">
              <h1 class="titulo-slide">Accede a casos de COVID-19</h1>
              <br>
              <p class="parrafo-slide">Puedes seleccionar entre Departamentos y Municipios para conocer la cantidad de casos
                confirmados, activos, recuperados, fallecidos, asintomaticos en esa región.
              </p>
              <br>
              <br>
              <br><br>
              <br><br>
              <img src="./assets/casos.png" >
            </div>
            </slide>
            <slide :index="2">
            <div class="slide">
              <h1 class="titulo-slide">Mapa de infectados por regiones</h1>
              <br>
              <br>
              <div>
              <p class="parrafo-slide3">Accede al mapa de calor de todo Colombia para conocer la densidad territorial de casos de Coronavirus,
                además, enfoca el mapa en territorios mas pequeños como Departamentos y Municipios para obtener información mas especifica.
              </p>
              <img class="img3" src="./assets/mapaInicio.png" style="width:50%;height:50%;">
              </div>
            </div>
            </slide>
            <slide :index="3">
            <div class="slide">
              <h1 class="titulo-slide">Realiza Comparaciones</h1>
              <br>
              <p class="parrafo-slide">Realiza comparaciones de casos de Coronavirus entre Municipios o entre departamentos y contrasta la información
                para conocer que territorios se encuentran en mejor o peor estado.
              </p>
              <br>
              <br>
              <img src="./assets/torta.png" style="width:40%;height:40%;" class="img_torta">
            </div>
            </slide>
            <slide :index="4">
            <div class="slide">
              <h1 class="titulo-slide">Accede a enlaces de interés</h1>
              <br>
              <p class="parrafo-slide">Accede a distintos links de interés como líneas de atención, información sobre protocolos de bioseguridad
                y sobre noticias falsas.
              </p>
              <br>
              <br>
              <img src="./assets/links.png" style="width:40%;height:40%;" class="img_torta">
            </div>
            </slide>
            </carousel-3d>

            <div class="info_especial">
            <twitter class="izq">
                <a class="twitter-timeline" margin-left="200px" data-lang="es" data-width="400" data-height="300" data-theme="dark" href="https://twitter.com/MinSaludCol?ref_src=twsrc%5Etfw">Tweets by MinSaludCol</a>
            </twitter>


            <iframe class="center" width="450" height="300" src="https://www.youtube.com/embed/cQTbdOxfqow" frameborder="0"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <img class="der" src="./assets/c.jpg">
            </div>
            
            
            
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {

components: {
    Carousel3d,
    Slide
  }
    
}
</script>

<style>
.slide{
  margin: 20px;
}

.titulo-slide{
  font-weight:bold;
  font-style: oblique;
  font-size: 40px;
}

.parrafo-slide{
  font-size: 20px;
  text-align: justify;
  color: black;
}

.parrafo-slide3{
  font-size: 20px;
  text-align: justify;
  color: black;
}

div .parrafo-slide3{
  width: 50%;
  float: left;
}

div .img3{
  width: 50%;
  float: right;
}
 .img_torta{
  display:block;
  margin:auto;
 }
.logo{
    position: relative;
    top: -150px; /* ajustar los valores para mover la imagen */
    left: 565px;

}

.carousel-3d-container{
top: 0px;

}

.carousel-3d-slide {
    color: #132743;
    background-image: linear-gradient(to top right, #A9CCE3, #ffffff);
    border: 2px solid #0a0a0a;
    border-top-left-radius: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 30px;
}

.twitter-timeline{
    margin-left: 0px;
}
.info_especial{
    
    height: 300px;
    
    margin-left: 210px;
    margin-right: 210px;
}

div .izq{
  width: 33%;
  float: left;
}

div .center{
  width: 33%;
  
}
div .der{
  width: 25%;
  float: right;
  height: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #212121;
}



</style>