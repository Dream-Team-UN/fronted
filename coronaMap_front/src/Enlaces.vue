<template>
    <div>
        <h1 class="titulo">Enlaces externos</h1>
        <br><br><br><br>
        <div class="container">
            <div class="card">
                <img src="./assets/enlace1.jpg">
                <h4>línea de Atención</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                     vel, excepturi unde</p>
                     <a href="#">Leer mas</a>
            </div>
            <div class="card">
                <img src="./assets/enlace2.jpg">
                <h4>Protocolos de Bioseguridad</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                     vel, excepturi unde</p>
                     <a href="#">Leer mas</a>
            </div>
            <div class="card">
                <img src="./assets/enlace3.jpg">
                <h4>Noticias Falsas</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                     vel, excepturi unde</p>
                     <a href="#">Leer mas</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
.titulo{
    text-align: center;
    font-size: 40px;
    color: black;
    margin-top: 100;
}

.container{
    width: 100%;
    max-width: 1200px;
    height: 430px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
}

.container .card{
    width: 330px;
    height: 430px;
    border-radius:8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;
    background-color: #212121;
    }

.container .card:hover{
    transform: translateY(-15px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.container .card img{
    width: 330px;
    height: 220px;
}
.container .card h4{
    font-weight: 600;
    color:#32e0c4;
}
.container .card p{
    padding: 0 1rem;
    font-size: 16px;
    font-weight: 300;
    color: #eeeeee;
}

.container .card a{
    font-weight: 500;
    text-decoration: none;
    color: #3498d3;
}   
</style>