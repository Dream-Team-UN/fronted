<template>
    <div>
        
        <carousel-3d :width="550" :height="450">
            <slide :index="0">
            Slide 1 Content
            </slide>
            <slide :index="1">
            Slide 2 Content
            </slide>
            <slide :index="2">
            Slide 3 Content
            </slide>
            <slide :index="3">
            Slide 4 Content
            </slide>
            <slide :index="4">
            Slide 5 Content
            </slide>
            </carousel-3d>

            <div class="info_especial">
            <twitter class="izq">
                <a class="twitter-timeline" margin-left="200px" data-lang="es" data-width="400" data-height="300" data-theme="dark" href="https://twitter.com/MinSaludCol?ref_src=twsrc%5Etfw">Tweets by MinSaludCol</a>
            </twitter>


            <iframe class="center" width="450" height="300" src="https://www.youtube.com/embed/kuntYu48pkw" frameborder="0"
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

.logo{
    position: relative;
    top: -150px; /* ajustar los valores para mover la imagen */
    left: 565px;

}

.carousel-3d-container{
top: 0px;

}

.carousel-3d-slide {
    color: black;
    background-color: white;
    
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