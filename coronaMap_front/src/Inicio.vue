<template>
    <div>
        <h1>Inicio</h1>
        <carousel-3d :width="600" :height="500">
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
top: 50px;

}

.carousel-3d-slide {
    color: black;
    background-color: white;
    
}

</style>