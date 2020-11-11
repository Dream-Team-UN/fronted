<template>
    <div>
        <div>
            <h3 id="filtroComparacion">Seleccione el tipo de comparación</h3>
            <button class="BotonFiltrarComp" @click="opcionComparacionD">Departamentos</button>
            <button class="BotonFiltrarComp" @click="opcionComparacionM">Municipios</button>
            <button class="BotonDownload" >Descargar Información</button>
        </div>
        <img src="./assets/da.png" class="logoComp" v-if="opcion==0"/>
        <div class="comparacionContainer" v-if="opcion==-1"><ComparacionDptos></ComparacionDptos></div>
        <div class="comparacionContainer" v-if="opcion==1"><ComparacionMun></ComparacionMun></div>
    </div>
</template>

<script>
import Chart from 'primevue/chart';
import ComparacionMun from './ComparacionMun';
import ComparacionDptos from './ComparacionDptos';
export default {
    components:{
        ComparacionMun,
        ComparacionDptos
    },  

data(){
    return{
        opcion:0
    };
},
methods:{
    opcionComparacionM(){
        this.opcion=1
        console.log(this.opcion);
    },
    opcionComparacionD(){
        this.opcion=-1
        console.log(this.opcion);
    },
},
created(){
    //console.log(this.opcion)
}
}

</script>

<style>
.logoComp{
   margin-left: 330px;
    margin-top: 140px; 
}

.comparacionContainer{
    height:680px;
    width: 1800px;
    background-color: #e4e3e3;
    margin-left: 40px;
    margin-top: 15px;
    border-style: solid;
    border-width: 0px;
    border-color: #e4e3e3;
}
#filtroComparacion{
    font-size: 18px;
    text-align: left;
    margin-left: 40px;
    margin-top: 15px;
}

.BotonFiltrarComp{
    height: 30px;
    width: 320px;
    background-color:#7579e7;
    box-sizing: border-box;
    margin: 10px auto;
    margin-left: 40px;
    border-radius: .3em;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    border: 1px solid #0a0a0a;
    color: #eeeeee;
}
 .BotonFiltrarComp:hover{
    color: #1883ba;
    background-color: #ffffff;
    cursor:pointer;
  }

  .BotonDownload{
    height: 30px;
    width: 320px;
    background-color:#7579e7;
    box-sizing: border-box;
    margin: 10px auto;
    margin-left: 790px;
    border-radius: .3em;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    border: 1px solid #0a0a0a;
    color: #eeeeee;
}
 .BotonDownload:hover{
    color: #1883ba;
    background-color: #ffffff;
    cursor:pointer;
  }


.torta{
    height: 1000px;
    width: 1000px;
}
</style>