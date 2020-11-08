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
                    <select class="listaDep" v-on:change="refreshDataDptos($event)">
                        <option value="0">Seleccione un Departamento</option>
                        <option value="91">AMAZONAS</option>
                        <option value="5">ANTIOQUIA</option>
                        <option value="81">ARAUCA</option>
                        <option value="8">ATLANTICO</option>
                        <option value="13">BOLIVAR</option>
                        <option value="15">BOYACA</option>
                        <option value="17">CALDAS</option>
                        <option value="18">CAQUETA</option>
                        <option value="85">CASANARE</option>
                        <option value="19">CAUCA</option>
                        <option value="20">CESAR</option>
                        <option value="27">CHOCO</option>
                        <option value="23">CORDOBA</option>
                        <option value="25">CUNDINAMARCA</option>
                        <option value="11">BOGOTA</option>
                        <option value="94">GUAINIA</option>
                        <option value="95">GUAVIARE</option>
                        <option value="41">HUILA</option>
                        <option value="44">GUAJIRA</option>
                        <option value="47">MAGDALENA</option>
                        <option value="50">META</option>
                        <option value="52">NARIÑO</option>
                        <option value="54">NorteDeSantander(not_implemented)</option>
                        <option value="86">PUTUMAYO</option>
                        <option value="63">QUINDIO</option>
                        <option value="66">RISARALDA</option>
                        <option value="88">SanAndrésyProvidencia(not_implemented)</option>
                        <option value="68">SANTANDER</option>
                        <option value="70">SUCRE</option>
                        <option value="73">TOLIMA</option>
                        <option value="76">VALLE</option>
                        <option value="97">VAUPES</option>
                        <option value="99">VICHADA</option>
                </select>
                </div>
                <div class="sqrMunicipio">
                    <h3>Filtrar por Municipio:</h3>
                    
                    <select class="listaDep" id="selectMun" v-on:change="refreshDataMun($event)">
                        <option value="0">Selecciona un Municipio</option>
                        <!--<option>Lunes</option>
                        <option>Martes</option>
                        <option>Miércoles</option>
                        <option>Jueves</option>
                        <option>Viernes</option>-->
                    </select>
                </div>
                <button class="BotonFiltrar" @click="mostrarCasosDptoMun">Filtrar</button>
                <div class="loadingAnim" v-if="loading">
                    <fingerprint-spinner
                        :animation-duration="1100"
                        :size="64"
                        color="#0e918c"
/>
                </div>                             
            </div>           
        <div class="contenedor_centro">
            <!--<h1>Mapa</h1>-->
            <!--<div id="map"><google-map :lati="LAT" :longi="LONG" /></div>-->
            <div id="map"><google-map :lati="LAT" :longi="LONG" :zoomi="ZOOM"/></div>
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
        <!-- en caso de que se agreguen filtros-->
        <div class="contenedor_derecha" v-if="casosDpto.length !=0 && NUM_MUN==0">
            <!--<h1>Casos</h1>-->
            <div class="sqrConfirmados">
                <h1 class="dataTitulo">Casos Confirmados</h1>
                <div class="dataContent">{{casosDpto.casosTol}}</div>
                <!--<div class="dataContent">1111</div>-->
            </div>
            <div class="sqrActivos">
                <h1 class="dataTitulo">Casos Activos</h1>
                <div class="dataContent">{{casosDpto.casosAct}}</div>
                <!--<div class="dataContent">2222</div>-->
            </div>
            <div class="sqrRecuperados">
                <h1 class="dataTitulo">Recuperados</h1>
                <div class="dataContent">{{casosDpto.casosRec}}</div>
                <!--<div class="dataContent">3333</div>-->
            </div>
            <div class="sqrFallecidos">
                <h1 class="dataTitulo">Fallecidos</h1>
                <div class="dataContent">{{casosDpto.casosFal}}</div>
                <!--<div class="dataContent">4444</div>-->
            </div>
            <div class="sqrAsintomaticos">
                <h1 class="dataTitulo">Asintomaticos</h1>
                <div class="dataContent">{{casosDpto.casosAsin}}</div>
                <!--<div class="dataContent">4444</div>-->
            </div>
        </div>
        <div class="contenedor_derecha" v-if="casosDpto.length !=0 && NUM_MUN!=0 && casosMun.length!=0">
            <!--<h1>Casos</h1>-->
            <div class="sqrConfirmados">
                <h1 class="dataTitulo">Casos Confirmados</h1>
                <div class="dataContent">{{casosMun.casosTol}}</div>
                <!--<div class="dataContent">1111</div>-->
            </div>
            <div class="sqrActivos">
                <h1 class="dataTitulo">Casos Activos</h1>
                <div class="dataContent">{{casosMun.casosAct}}</div>
                <!--<div class="dataContent">2222</div>-->
            </div>
            <div class="sqrRecuperados">
                <h1 class="dataTitulo">Recuperados</h1>
                <div class="dataContent">{{casosMun.casosRec}}</div>
                <!--<div class="dataContent">3333</div>-->
            </div>
            <div class="sqrFallecidos">
                <h1 class="dataTitulo">Fallecidos</h1>
                <div class="dataContent">{{casosMun.casosFal}}</div>
                <!--<div class="dataContent">4444</div>-->
            </div>
            <div class="sqrAsintomaticos">
                <h1 class="dataTitulo">Asintomaticos</h1>
                <div class="dataContent">{{casosMun.casosAsin}}</div>
                <!--<div class="dataContent">4444</div>-->
            </div>
        </div>
        
    
        <div v-if="casosDpto.length !=0">casos Departamento {{casosDpto}}</div>
        <div v-if="casosDpto.length !=0">latitud:{{LAT}}</div>
        <div v-if="casosDpto.length !=0">longitud:{{LONG}}</div>
        <div v-if="casosDpto.length !=0">zoom:{{ZOOM}}</div>
        <!--<div>{{coorDptos}}</div>-->
         
        <!--<table class="table" v-if="casosDpto.length !=0">
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
                    <tr>
                        <td>{{casosDpto.id}}</td>
                        <td>{{casosDpto.casosFal}}</td>
                        <td>{{casosDpto.casosRec}}</td>
                        <td>{{casosDpto.casosTol}}</td>
                        <td>{{casosDpto.casosAct}}</td>
                    </tr>
                </tbody>
            </table>-->
    </div>
   
</template>

<script>
import { FingerprintSpinner } from 'epic-spinners'
import CasosService from './services/CasosService';
import CasosDepartamentoService from './services/CasosDepartamentoService';
import CasosMunicipioService from './services/CasosMunicipioService';
import CoorDptoService from './services/CoorDptoService';
import CoorMunicipioService from './services/CoorMunicipioService';
import GoogleMap from "./GoogleMap";
export default {
    name:"Casos",
    components: {
        FingerprintSpinner,
        GoogleMap
    },
    data(){
        
        return{
            coorDptos:[],//guarda las coordenadas de todos los dptos de Colombia
            casos:[], //casos de Covid en Colombia
            casosDpto:[],//casos de Covid en un Dpto especifico
            casosMun:[],//casos de Covid en un Municipio especifico
            nombreMunDpto:[],//guarda el nombre y el id de los municipios de un dpto especifico
            idMunDpto:[],
            coorMun:[],//guarda las coordenadas de todos los municipios de Colombia (onCreated)
            DATA: "data1",
            DATA1: "Departamento",
            DATA_DPTO:"algo",
            NUM_DPTO:0,
            DATA_MUN:"algo",
            NUM_MUN:0,
            loading: false,
            LAT:4.6420147,
            LONG:-78.8461639,
            ZOOM:5.5
           
        };
    },
    methods:{
        refreshData(){
            CasosService.devolverCasos(this.DATA).then(response=>{
                console.log(response.data);
                this.casos = response.data;
                //console.log("algo");
            });
        },
        cordenadasDptosData(){
            CoorDptoService.devolverCoorDptos(this.DATA1).then(response=>{
                console.log(response.data);
                this.coorDptos = response.data;
                //console.log("algo");
            });
        },
        cordenadasMunicipiosData(){
            CoorMunicipioService.devolverCoorMunicipios().then(response=>{
                console.log(response.data);
                this.coorMun = response.data;
                //console.log(this.coorMun);
            });
        },
    refreshDataDptos: function(event){
        var id = event.target.value;
        var value = event.target.options[event.target.options.selectedIndex].text;
        var select = document.getElementById("selectMun");
        var auxNomMun=[];
        var auxIdMun=[];

        console.log(id);
        console.log(value);
        this.DATA_DPTO=value;
        this.NUM_DPTO=id;
        
        for(var i=0; i<1065; i++){
                    if(this.coorMun[i].dpto.id==id){
                        auxNomMun.push(this.coorMun[i].name);
                        auxIdMun.push(this.coorMun[i].id);
                    }
                }
        this.nombreMunDpto=auxNomMun;
        this.idMunDpto=auxIdMun;
        auxNomMun=[];
        auxIdMun=[];
        console.log(this.nombreMunDpto.length);
        console.log(this.nombreMunDpto);
        console.log(this.idMunDpto);
            


        /*if(select.length > 1){
            for(var i=0;i< select.length;i++){
                select.remove(i);
            }
        
        }*/
        for (i = select.length - 1; i >= 1; i--) {
	        select.remove(i);
        }
        
        //select.length=0;
        for(var i = 0; i < this.nombreMunDpto.length; i++) {
            var nom_opt = this.nombreMunDpto[i];
            var id_opt = this.idMunDpto[i];
            var el = document.createElement("option");
            el.textContent = nom_opt;
            el.value = id_opt;
            select.appendChild(el);
            
        }
    },

    refreshDataMun: function(event){
        var id = event.target.value;
        
        var value = event.target.options[event.target.options.selectedIndex].text;
        console.log("id de select mun: "+id);
        console.log(value);
        
        //se añade exepcion para Capitales de ser necesario

        if(value=="Cartagena De Indias"){
            value="Cartagena";
        }
         if(value=="Bogotá D.C."){
            value="BOGOTA";
        }
        
        //tratamiento nombre Municipio
        //primero se quitar las tildes y dieresis
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','ü':'u'};
        var value_sinAcent= value.split('').map( letra => acentos[letra] || letra).join('').toString();
        console.log("palabra sin acentos: "+value_sinAcent);	
        //luego se quitan los espacios
        var value_sinEsp=value_sinAcent.replace(/ /g, "");
        console.log("palabra sin acentos y sin espacios: "+value_sinEsp);
        //se pone en mayuscula toda la palabra
        var valueModificado=value_sinEsp.toUpperCase();
        console.log("palabra sin acentos,sin espacios y en mayuscula: "+valueModificado); 
        
        this.DATA_MUN=valueModificado;
        this.NUM_MUN=id;
    },
    mostrarCasosDptoMun(){
        this.loading = true;
        CasosDepartamentoService.devolverCasosDpto(this.DATA_DPTO).then(response=>{
            this.casosDpto = response.data;   
            console.log(this.casosDpto);
            console.log("long casosDpto: "+this.casosDpto.length);      
        });
        CasosMunicipioService.devolverCasosMunicipio(this.DATA_MUN).then(response=>{
            this.casosMun = response.data;   
            console.log(this.casosMun);
            console.log("long casosMun: "+this.casosMun.length);      
        });
        /*CoorDptoService.devolverCoorDptos(this.DATA_DPTO).then(response=>{
            this.coorDpto = response.data;   
            console.log(this.coorDpto)      
        });*/
        var latitud;
        var longitud;
        var zoom;
    
        if(this.NUM_MUN==0){
                for(var i=0; i<36; i++){
                    if(this.coorDptos[i].id==this.NUM_DPTO){
                        latitud=this.coorDptos[i].latitud;
                        longitud=this.coorDptos[i].longitud;
                        zoom=this.coorDptos[i].zoom;
                        console.log(this.coorDptos[i]);
                    }
                }
                console.log(latitud);
                console.log(longitud);
                console.log(zoom); 
            
        }
        if(this.NUM_MUN!=0){
            for(var i=0; i<1065; i++){
                    if(this.coorMun[i].id==this.NUM_MUN){
                        latitud=this.coorMun[i].latitud;
                        longitud=this.coorMun[i].longitud;
                        zoom=this.coorMun[i].zoom;
                        console.log(this.coorMun[i]);
                    }
                }
                console.log(latitud);
                console.log(longitud);
                console.log(zoom);             
        }
        this.LAT=Number(latitud);
        this.LONG=Number(longitud);
        this.ZOOM=Number(zoom);
        setTimeout(() => {
           this.loading = false;
        }, 2000)
        


    }
    },
    created(){
        this.refreshData();
        this.cordenadasDptosData();
        this.cordenadasMunicipiosData();        
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


  .loadingAnim{
  position: fixed;
  top: 750px;
  left: 380px;
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