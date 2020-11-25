<template>
    <div>
        <br><br>
        <h1 class="titulo">Enlaces Externos</h1>
        <br><br><br><br>
        <div class="container">
            <div class="card">
                <img src="./assets/enlace1.jpg">
                <h4>Línea de Atención</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                     vel, excepturi unde</p>
                     <a href="#">Leer mas</a>
            </div>
            <div class="card2">
                <img src="./assets/enlace2.jpg">
                <h4>Protocolos de Bioseguridad</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                     vel, excepturi unde</p>
                     <a href="#">Leer mas</a>
            </div>
            <div class="card3">
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
    font-size: 70px;
    color: #212121;
    margin-top: 30px;
}

.container{
    width: 100%;
    height: 430px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
}

.container .card{
    width: 330px;
    height: 480px;
    border-radius:20px;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    /*margin: 50px;*/
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
    transition: all 0.25s;
    /*background-color: #7579e7;*/
    background-image:linear-gradient(to bottom right,#262626,#000000);
}
.container .card2{
    width: 330px;
    height: 480px;
    border-radius:20px;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    /*margin: 50px;*/
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
    transition: all 0.25s;
    /*background-color: #7579e7;*/
    background-image:linear-gradient(to bottom right,#008C3C,#00722E);
}
.container .card3{
    width: 330px;
    height: 480px;
    border-radius:20px;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    /*margin: 50px;*/
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
    transition: all 0.25s;
    /*background-color: #7579e7;*/
    background-image:linear-gradient(to bottom right,#D80F40,#990B2D);
}

.container .card:hover{
    transform: translateY(-15px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.container .card2:hover{
    transform: translateY(-15px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.container .card3:hover{
    transform: translateY(-15px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.container .card img{
    width: 330px;
    height: 330px;
}
.container .card2 img{
    width: 330px;
    height: 330px;
}
.container .card3 img{
    width: 330px;
    height: 330px;
}

/* Títulos de las Tarjetas*/
.container .card h4{
    font-size: 25px;
    font-weight: 600;
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 15px;
}
.container .card2 h4{
    font-size: 25px;
    font-weight: 600;
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 15px;
}
.container .card3 h4{
    font-size: 25px;
    font-weight: 600;
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 15px;
}

/* Cuerpo de las Tarjetas */
.container .card p{
    padding: 0 1rem;
    font-size: 16px;
    font-style: italic;
    color: #CCCCCC;
}
.container .card2 p{
    padding: 0 1rem;
    font-size: 16px;
    font-style: italic;
    color: #D8EFE2;
}
.container .card3 p{
    padding: 0 1rem;
    font-size: 16px;
    font-style: italic;
    color: #EAD3DD;
}

.container .card a{
    line-height: 47px;
    font-weight: 500;
    text-decoration: none;
    color: #ffffff;
}
.container .card2 a{
    line-height: 47px;
    font-weight: 500;
    text-decoration: none;
    color: #ffffff;
}
.container .card3 a{
    line-height: 47px;
    font-weight: 500;
    text-decoration: none;
    color: #ffffff;
}
</style>