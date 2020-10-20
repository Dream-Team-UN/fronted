<template>
    <div id="body">
        <h1>Mapa</h1>
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
            </table>-->
      
            <div class="contenedor_izq">
                <h1 id="filtrosTitulo">Filtros</h1>
                <div class="sqrDepartamento">
                    <h3>Filtrar por Departamento:</h3>
                    <select class="listaDep">
                        <option>Selecciona un Departamento</option>
                        <option>AMAZONAS</option>
                        <option>ANTIOQUIA</option>
                        <option>ARAUCA</option>
                        <option>ATLÁNTICO</option>
                        <option>BOLÍVAR</option>
                        <option>BOYACÁ</option>
                        <option>CALDAS</option>
                        <option>CAQUETÁ</option>
                        <option>CASANARE</option>
                        <option>CAUCA</option>
                        <option>CESAR</option>
                        <option>CHOCÓ</option>
                        <option>CÓRDOBA</option>
                        <option>CUNDINAMARCA</option>
                        <option>DISTRITO CAPITAL</option>
                        <option>GUAINÍA</option>
                        <option>GUAVIARE</option>
                        <option>HUILA</option>
                        <option>LA GUAJIRA</option>
                        <option>MAGDALENA</option>
                        <option>META</option>
                        <option>NARIÑO</option>
                        <option>NORTE DE SANTANDER</option>
                        <option>PUTUMAYO</option>
                        <option>QUINDÍO</option>
                        <option>RISARALDA</option>
                        <option>SAN ANDRÉS Y PROVIDENCIA</option>
                        <option>SANTANDER</option>
                        <option>SUCRE</option>
                        <option>TOLIMA</option>
                        <option>VALLE</option>
                        <option>VAUPÉS</option>
                        <option>VICHADA</option>
                </select>
                </div>
                <div class="sqrMunicipio">
                    <h3>Filtrar por Municipio:</h3>
                    <select class="listaDep">
                        <option>Selecciona un Municipio</option>
                        <!--<option>Lunes</option>
                        <option>Martes</option>
                        <option>Miércoles</option>
                        <option>Jueves</option>
                        <option>Viernes</option>-->
                    </select>
                </div>
                <button class="BotonFiltrar" v-on:click="enviarDept()">Filtrar</button>
                
            </div>           
        <div class="contenedor_centro">
            <!--<h1>Mapa</h1>-->
            <div id="map"><google-map/></div>
        </div>
        <div class="contenedor_derecha" v-for="caso in casos" v-bind:key="caso.id">
            <!--<h1>Casos</h1>-->
            <div class="sqrConfirmados">
                <h1 class="dataTitulo">Casos Confirmados</h1>
                <div class="dataContent">{{caso.casosTol}}</div>
                <!--<div class="dataContent">1111</div>-->
            </div>
            <div class="sqrActivos">
                <h1 class="dataTitulo">Casos Activos</h1>
                <div class="dataContent">{{caso.casosAct}}</div>
                <!--<div class="dataContent">2222</div>-->
            </div>
            <div class="sqrRecuperados">
                <h1 class="dataTitulo">Recuperados</h1>
                <div class="dataContent">{{caso.casosRec}}</div>
                <!--<div class="dataContent">3333</div>-->
            </div>
            <div class="sqrFallecidos">
                <h1 class="dataTitulo">Fallecidos</h1>
                <div class="dataContent">{{caso.casosFal}}</div>
                <!--<div class="dataContent">4444</div>-->
            </div>
            <div class="sqrAsintomaticos">
                <h1 class="dataTitulo">Asintomaticos</h1>
                <div class="dataContent">{{caso.casosAsin}}</div>
                <!--<div class="dataContent">4444</div>-->
            </div>
        </div>
     
    </div>
   
</template>

<script>
import CasosService from './services/CasosService';
import GoogleMap from "./GoogleMap";
export default {
    name:"Casos",
    components: {
    GoogleMap
  },
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
.contenedor_izq{
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
            height: 100px;
            width: 200px;
            position: fixed;
            top: 400px;
            left: 315px;
            
        }
.sqrMunicipio {
            height: 100px;
            width: 200px;
            position: fixed;
            top: 500px;
            left: 315px;
        }

.BotonFiltrar {
            height: 30px;
            width: 200px;
            position: fixed;
            top: 650px;
            left: 315px;
            background-color: #84a9ac;
            box-sizing: border-box;
            margin: 10px auto;
            border-radius: .3em;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            border: 2px solid #0a0a0a;
        }
    
  .BotonFiltrar:hover{
    color: #1883ba;
    background-color: #ffffff;
    cursor:pointer;
  }

    .listaDep{
            display: block;
            height: 30px;
            width: 200px;
            top: 500px;
            left: 315px;
            box-sizing: border-box;
            margin: 10px auto;
            border: 1px solid #aaa;
            box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
            border-radius: .3em;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background-color: #fff;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
            linear-gradient(to bottom, #ffffff 0%,#f7f7f7 100%);
            background-repeat: no-repeat, repeat;
            background-position: right .7em top 50%, 0 0;
            background-size: .65em auto, 100%;
        }

        .listaDep::-ms-expand {
            display: none;
        }
        .listaDep:hover {
            border-color: #888;
        }
        .listaDep:focus {
            border-color: #aaa;
            box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
            box-shadow: 0 0 0 3px -moz-mac-focusring;
            color: #222; 
            outline: none;
        }
        .listaDep option {
            font-weight:normal;
        }
.contenedor_centro{

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
.contenedor_derecha{
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
            height: 120px;
            width: 254px;
            position: fixed;
            top: 197px;
            left: 1382px;
            background-color: #f2f2f2;
        }
        .sqrActivos {
            height: 120px;
            width: 254px;
            position: fixed;
            top: 328px;
            left: 1382px;
            background-color: #f2f2f2;
        }
        .sqrRecuperados {
            height: 120px;
            width: 254px;
            position: fixed;
            top: 459px;
            left: 1382px;
            background-color: #f2f2f2;
        }
        .sqrFallecidos {
            height: 120px;
            width: 254px;
            position: fixed;
            top: 590px;
            left: 1382px;
            background-color: #f2f2f2;
        }
        .sqrAsintomaticos {
            height: 120px;
            width: 254px;
            position: fixed;
            top: 721px;
            left: 1382px;
            background-color: #f2f2f2;
        }


</style>