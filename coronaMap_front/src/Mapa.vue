<template>
    <div>
        <h3>Informacion de backend</h3>
        <div class="container"  v-for="caso in casos" v-bind:key="caso.id">
            <!--<table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Casos Fallecidos</th>
                        <th>Casos Recuperados</th>
                        <th>Casos Totales</th>
                        <th>casos Actuales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="caso in casos" v-bind:key="caso.id">
                        <td>{{caso.id}}</td>
                        <td>{{caso.casosFal}}</td>
                        <td>{{caso.casosRec}}</td>
                        <td>{{caso.casosTol}}</td>
                        <td>{{caso.casosAct}}</td>
                    </tr>
                </tbody>
            </table>
        </div>-->
        <div class="sqrFiltros">
            <h1 id="filtrosTitulo">Filtros</h1>
            <div class="sqrDepartamento"></div>
            <div class="sqrMunicipio"></div>
            <div class="sqrFiltrosReset"></div>
        </div>
        <div class="sqrMapa">
            <div class="mapaTemporal"></div>
        </div>
        <div class="sqrDatos">
            <div class="sqrConfirmados">
                <h1 class="dataTitulo">Casos Confirmados</h1>
                <div class="dataContent">{{caso.casosTol}}</div>
            </div>
            <div class="sqrActivos">
                <h1 class="dataTitulo">Casos Activos</h1>
                <div class="dataContent">{{caso.casosAct}}</div>
            </div>
            <div class="sqrRecuperados">
                <h1 class="dataTitulo">Recuperados</h1>
                <div class="dataContent">{{caso.casosRec}}</div>
            </div>
            <div class="sqrFallecidos">
                <h1 class="dataTitulo">Fallecidos</h1>
                <div class="dataContent">{{caso.casosFal}}</div>
            </div>
        </div>
        <div class="sqrBigBorder"></div>
    </div>
    </div>
</template>

<script>
import CasosService from './services/CasosService';
export default {
    name:"Casos",
    data(){
        return{
            casos:[],
            DATA: "data1"
        };
    },
    methods:{
        refreshData(){
            CasosService.devolverCasos(this.DATA).then(response=>{
                console.log(response.data);
                this.casos = response.data;
                //console.log("algo");
            });
        }
    },
    created(){
        this.refreshData();
    }    
};
</script>

<style>
    table {
        width: 80%;
    }
    th, td {
        width: 25%;
        text-align: left;
        vertical-align: top;
    }
    .sqrFiltros {
        height: 680px;
        width: 300px;
        position: absolute;
        top: 175px;
        left: 260px;
        background-color: #e4e3e3;
        border-style: solid;
        border-width: 2px;
        border-color: #212121;
    }
        #filtrosTitulo {
            font-size: 60px;
            text-align: center;
            position: relative;
            top: 100px;
            color: #204051;
        }
        .sqrDepartamento {
            height: 30px;
            width: 190px;
            position: fixed;
            top: 450px;
            left: 315px;
            background-color: #204051;
        }
        .sqrMunicipio {
            height: 30px;
            width: 190px;
            position: fixed;
            top: 500px;
            left: 315px;
            background-color: #204051;
        }
        .sqrFiltrosReset {
            height: 50px;
            width: 150px;
            position: fixed;
            top: 580px;
            left: 335px;
            background-color: #84a9ac;
        }
    .sqrMapa {
        height: 680px;
        width: 800px;
        position: absolute;
        top: 175px;
        left: 560px;
        background-color: #e4e3e3;
        border-style: solid;
        border-width: 2px;
        border-color: #212121;
    }
        .mapaTemporal {
            height: 660px;
            width: 780px;
            position: relative;
            top: 10px;
            left: 10px;
            background-image: url('./assets/Colombia.png');
        }
    .sqrDatos {
        height: 680px;
        width: 300px;
        position: absolute;
        top: 175px;
        left: 1360px;
        background-color: #e4e3e3;
        border-style: solid;
        border-width: 2px;
        border-color: #212121;
    }
        .dataTitulo {
        
            font-size: 20px;
            text-align: center;
            position: relative;
            top: 10px;
            color: #204051;
        }
        .dataContent {
        
            font-size: 50px;
            text-align: center;
            position: relative;
            top: 25px;
            color: #204051;
        }
        .sqrConfirmados {
            height: 150px;
            width: 254px;
            position: fixed;
            top: 197px;
            left: 1382px;
            background-color: #f2f2f2;
        }
        .sqrActivos {
            height: 150px;
            width: 254px;
            position: fixed;
            top: 358px;
            left: 1382px;
            background-color: #f2f2f2;
        }
        .sqrRecuperados {
            height: 150px;
            width: 254px;
            position: fixed;
            top: 521px;
            left: 1382px;
            background-color: #f2f2f2;
        }
        .sqrFallecidos {
            height: 150px;
            width: 254px;
            position: fixed;
            top: 683px;
            left: 1382px;
            background-color: #f2f2f2;
        }
    .sqrBigBorder {
        height: 680px;
        width: 1400px;
        position: absolute;
        top: 175px;
        left: 260px;
        border-style: solid;
        border-width: 4px;
        border-color: #212121;
    }
</style>