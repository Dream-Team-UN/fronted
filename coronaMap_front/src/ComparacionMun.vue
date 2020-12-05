<template>
    <div>
        <div class="filtroA">
            <h1 id="filtrosTituloC">Municipio 1</h1>
            <div class="sqrDepartamentoC">
                <h3>Departamento:</h3>
                <select class="listaDepC" v-on:change="refreshDataDptosC1($event)">
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
                    <option value="54">NORTE SANTANDER</option>
                    <option value="86">PUTUMAYO</option>
                    <option value="63">QUINDIO</option>
                    <option value="66">RISARALDA</option>
                    <option value="88">SAN ANDRES</option>
                    <option value="68">SANTANDER</option>
                    <option value="70">SUCRE</option>
                    <option value="73">TOLIMA</option>
                    <option value="76">VALLE</option>
                    <option value="97">VAUPES</option>
                    <option value="99">VICHADA</option>
                </select>
            </div>
            <div class="sqrMunicipioC">
                <h3>Municipio:</h3>
                <select class="listaDepC" id="selectMunC1" v-on:change="refreshDataMunC1($event)">
                    <option value="0">Selecciona un Municipio</option>
                </select>
            </div>
            <button class="BotonComparar" @click="traerCasosMun">Comparar</button>
            <div class="loadingAnimC" v-if="loading">
                <fingerprint-spinner
                    :animation-duration="1100"
                    :size="64"
                    color="#0e918c"
                />
            </div>
        </div>
        <!--<div class="estadisticasC" v-if="casosMun1.length ==0">-->
        <div class="estadisticasC">
            <div class="circular1">Diagrama Circular de Municipio 1</div>
            <div class="circular2">Diagrama Circular de Municipio 2</div>
            <div class="barras">Diagrama Comparativo de ambos Municipios</div>
        </div>
        <div class="estadisticasC" v-if="this.ready">
            <div class="circular1"><Chart type="pie" :data="chartData" /></div>
            <div class="circular2"><Chart type="pie" :data="chartData2" /></div>
            <div class="barras"><Chart type="bar" :data="basicData" style="width:55%;height:20%;margin-left:260px"/></div>
        </div>
        <!--<div class="estadisticasC" v-if="this.ready">
            <Chart type="pie" :data="chartData" />
        </div>-->
        <div class="filtroB">
            <h1 id="filtrosTituloC">Municipio 2</h1>
            <div class="sqrDepartamentoC">
                <h3>Departamento:</h3>
                <select class="listaDepC" v-on:change="refreshDataDptosC2($event)">
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
                    <option value="54">NORTE SANTANDER</option>
                    <option value="86">PUTUMAYO</option>
                    <option value="63">QUINDIO</option>
                    <option value="66">RISARALDA</option>
                    <option value="88">SAN ANDRES</option>
                    <option value="68">SANTANDER</option>
                    <option value="70">SUCRE</option>
                    <option value="73">TOLIMA</option>
                    <option value="76">VALLE</option>
                    <option value="97">VAUPES</option>
                    <option value="99">VICHADA</option>
                </select>
            </div>
            <div class="sqrMunicipioC">
                <h3>Municipio:</h3>
                <select class="listaDepC" id="selectMunC2" v-on:change="refreshDataMunC2($event)">
                    <option value="0">Selecciona un Municipio</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import { FingerprintSpinner } from 'epic-spinners';
import CasosDepartamentoService from './services/CasosDepartamentoService';
import CasosMunicipioService from './services/CasosMunicipioService';
import CoorMunicipioService from './services/CoorMunicipioService';
import Chart from 'primevue/chart';
export default {
    components:{
        FingerprintSpinner,
        Chart
        },
    data(){
        return{
            casosMun1:[],//trae los casos de covid en mun 1
            casosMun2:[],//trae los casos de covid en mun 2
            coorMunC:[],//trae los datos de los municipios
            nombreMunDpto1:[],//trae los nombres de todos los municipios de un Dpto especifico
            idMunDpto1:[],//trae el id de los municipios de un Dpto especifico
            nombreMunDpto2:[],//trae los nombres de todos los municipios de un Dpto especifico
            idMunDpto2:[],//trae el id de los municipios de un Dpto especifico
            DATA: "data1",
            DATA1: "Departamento",
            DATA_DPTO1:"algo",//Nombre Dpto 1
            NUM_DPTO1:0,//id Dpto 1
            DATA_DPTO2:"algo",//Nombre Dpto 1
            NUM_DPTO2:0,//id Dpto 2
            DATA_MUN1:"algo",//Nombre Mun 1
            NUM_MUN1:0,//id Mun 1
            DATA_MUN2:"algo",//Nombre Mun 1
            NUM_MUN2:0,//id Mun 1
            loading: false,//simbolo de carga
            ready:false,
            chartData: {
                labels: ['Casos Activos','Casos Fallecidos','Casos Asintomaticos','casosRecuperados'],
                //labels: ['Casos Activos','Casos Fallecidos','Casos Asintomaticos','casosRecuperados'],
				datasets: [
					{
						data: [100, 200, 300, 400],
						backgroundColor: [
                            "#FFA726",
                            "#A80028",
                            "#42A5F5",
                            "#66BB6A"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D",
                            "#CB9EEE"
                        ]
					}
				]
            },
            chartData2: {
                labels: ['Casos Activos','Casos Fallecidos','Casos Asintomaticos','casosRecuperados'],
                //labels: ['Casos Activos','Casos Fallecidos','Casos Asintomaticos','casosRecuperados'],
				datasets: [
					{
						data: [100, 200, 300, 400],
						backgroundColor: [
                            "#FFA726",
                            "#A80028",
                            "#42A5F5",
                            "#66BB6A"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D",
                            "#CB9EEE"
                        ]
					}
				]
            },
            basicData: {
				labels: ['Casos Activos','Casos Fallecidos','Casos Asintomaticos','casos Recuperados','casos Totales'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: '#42A5F5',
						data: [65, 59, 80, 81, 56]
					},
					{
						label: 'My Second dataset',
						backgroundColor: '#A533FF',
						data: [28, 48, 40, 19, 86]
					}
				]
			}
        }
    },
    methods:{
        coordenadasMunicipiosDataC(){
            CoorMunicipioService.devolverCoorMunicipios().then(response=>{
                console.log(response.data);
                this.coorMunC = response.data;
            });
        },
        refreshDataDptosC1:function(event){
            var id1 = event.target.value;
            var value1 = event.target.options[event.target.options.selectedIndex].text;
            var select1 = document.getElementById("selectMunC1");
            var auxNomMunC1=[];
            var auxIdMunC1=[];
            
            console.log(id1);
            console.log(value1);
            this.DATA_DPTO1=value1;
            this.NUM_DPTO1=id1;

            for(var i=0; i<1065; i++){
                    if(this.coorMunC[i].dpto.id==id1){
                        auxNomMunC1.push(this.coorMunC[i].name);
                        auxIdMunC1.push(this.coorMunC[i].id);
                    }
                }
                
            this.nombreMunDpto1=auxNomMunC1;
            this.idMunDpto1=auxIdMunC1;
            auxNomMunC1=[];
            auxIdMunC1=[];
            console.log(this.nombreMunDpto1);
            console.log(this.idMunDpto1);

            for (i = select1.length - 1; i >= 1; i--) {
	            select1.remove(i);
            }

            for(var i = 0; i < this.nombreMunDpto1.length; i++) {
                var nom_opt = this.nombreMunDpto1[i];
                var id_opt = this.idMunDpto1[i];
                var el = document.createElement("option");
                el.textContent = nom_opt;
                el.value = id_opt;
                select1.appendChild(el);
            } 

        },
        refreshDataDptosC2:function(event){
            var id2 = event.target.value;
            var value2 = event.target.options[event.target.options.selectedIndex].text;
            var select2 = document.getElementById("selectMunC2");
            var auxNomMunC2=[];
            var auxIdMunC2=[];
            
            console.log(id2);
            console.log(value2);
            this.DATA_DPTO2=value2;
            this.NUM_DPTO2=id2;

            for(var i=0; i<1065; i++){
                    if(this.coorMunC[i].dpto.id==id2){
                        auxNomMunC2.push(this.coorMunC[i].name);
                        auxIdMunC2.push(this.coorMunC[i].id);
                    }
                }
            
            this.nombreMunDpto2=auxNomMunC2;
            this.idMunDpto2=auxIdMunC2;
            auxNomMunC2=[];
            auxIdMunC2=[];
            console.log(this.nombreMunDpto2);
            console.log(this.idMunDpto2);

            for (i = select2.length - 1; i >= 1; i--) {
	            select2.remove(i);
            }

            for(var i = 0; i < this.nombreMunDpto2.length; i++) {
                var nom_opt = this.nombreMunDpto2[i];
                var id_opt = this.idMunDpto2[i];
                var el = document.createElement("option");
                el.textContent = nom_opt;
                el.value = id_opt;
                select2.appendChild(el);
            }             
        },
        refreshDataMunC1: function(event){
            var id = event.target.value;
            var value = event.target.options[event.target.options.selectedIndex].text;
            console.log("id de select mun: "+id);
            console.log(value);

            if(value=="Cartagena De Indias"){
                value="Cartagena";
            }
            if(value=="Bogotá D.C."){
                value="BOGOTA";
            }

            const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','ü':'u'};
            var value_sinAcent= value.split('').map( letra => acentos[letra] || letra).join('').toString();
            console.log("palabra sin acentos: "+value_sinAcent);	
            var valueModificado=value_sinAcent.toUpperCase();
            console.log("palabra sin acentos y en mayuscula: "+valueModificado); 
        
            this.DATA_MUN1=valueModificado;
            this.NUM_MUN1=id;
        },
        refreshDataMunC2: function(event){
            var id = event.target.value;
            var value = event.target.options[event.target.options.selectedIndex].text;
            console.log("id de select mun: "+id);
            console.log(value);

            if(value=="Cartagena De Indias"){
                value="Cartagena";
            }
            if(value=="Bogotá D.C."){
                value="BOGOTA";
            }
            const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','ü':'u'};
            var value_sinAcent= value.split('').map( letra => acentos[letra] || letra).join('').toString();
            console.log("palabra sin acentos: "+value_sinAcent);	
            var valueModificado=value_sinAcent.toUpperCase();
            console.log("palabra sin acentos y en mayuscula: "+valueModificado); 
        
            this.DATA_MUN2=valueModificado;
            this.NUM_MUN2=id;
        },
        enviarDatosChart(){
            this.chartData.datasets[0].data[0]=Number(this.casosMun1.casosAct);
            console.log(this.chartData.datasets[0].data[0]);
            this.chartData.datasets[0].data[1]=Number(this.casosMun1.casosFal);
            console.log(this.chartData.datasets[0].data[1]);
            this.chartData.datasets[0].data[2]=Number(this.casosMun1.casosAsin);
            console.log(this.chartData.datasets[0].data[2]);
            this.chartData.datasets[0].data[3]=Number(this.casosMun1.casosRec);
            console.log(this.chartData.datasets[0].data[3]);

            this.chartData2.datasets[0].data[0]=Number(this.casosMun2.casosAct);
            console.log(this.chartData2.datasets[0].data[0]);
            this.chartData2.datasets[0].data[1]=Number(this.casosMun2.casosFal);
            console.log(this.chartData2.datasets[0].data[1]);
            this.chartData2.datasets[0].data[2]=Number(this.casosMun2.casosAsin);
            console.log(this.chartData2.datasets[0].data[2]);
            this.chartData2.datasets[0].data[3]=Number(this.casosMun2.casosRec);
            console.log(this.chartData2.datasets[0].data[3]);

            this.basicData.datasets[0].data[0]=Number(this.casosMun1.casosAct);
            console.log(this.chartData.datasets[0].data[0]);
            this.basicData.datasets[0].data[1]=Number(this.casosMun1.casosFal);
            console.log(this.chartData.datasets[0].data[1]);
            this.basicData.datasets[0].data[2]=Number(this.casosMun1.casosAsin);
            console.log(this.chartData.datasets[0].data[2]);
            this.basicData.datasets[0].data[3]=Number(this.casosMun1.casosRec);
            console.log(this.chartData.datasets[0].data[3]);
            this.basicData.datasets[0].data[4]=Number(this.casosMun1.casosTol);
            console.log(this.chartData.datasets[0].data[4]);
            this.basicData.datasets[1].data[0]=Number(this.casosMun2.casosAct);
            console.log(this.chartData.datasets[0].data[0]);
            this.basicData.datasets[1].data[1]=Number(this.casosMun2.casosFal);
            console.log(this.chartData.datasets[0].data[1]);
            this.basicData.datasets[1].data[2]=Number(this.casosMun2.casosAsin);
            console.log(this.chartData.datasets[0].data[2]);
            this.basicData.datasets[1].data[3]=Number(this.casosMun2.casosRec);
            console.log(this.chartData.datasets[0].data[3]);
            this.basicData.datasets[1].data[4]=Number(this.casosMun2.casosTol);
            console.log(this.chartData.datasets[0].data[4]);
        },
        traerCasosMun(){
            this.ready=false;
            this.loading=true;
            CasosMunicipioService.devolverCasosMunicipio(this.DATA_MUN1).then(response=>{
                this.casosMun1 = response.data;   
                console.log(this.casosMun1);    
            });
             CasosMunicipioService.devolverCasosMunicipio(this.DATA_MUN2).then(response=>{
                this.casosMun2 = response.data;   
                console.log(this.casosMun2);    
            });

            //this.enviarDatosChart();
            
            setTimeout(()=>{
                this.enviarDatosChart();
            },4000);
            setTimeout(() => {
                this.loading = false;
            }, 4000)
            setTimeout(() => {
                this.ready = true;
            }, 4000)
        
        }
    },

    created(){
        this.coordenadasMunicipiosDataC();
    }
   
}
</script>

<style>

    .filtroA{
        height: 680px;
        width: 300px;
        position: absolute;
        top: 195px;
        left: 40px;
        background-image: linear-gradient(to top right, #bbe6ff, #ffffff);
        border-style: solid;
        border-width: 0px;
        border-color: #e4e3e3;
    }

    .estadisticasC{
        height: 680px;
        width: 1200px;
        top: 195px;
        left: 340px;
        position: absolute;
        background-color: #ffffff;
        border-style: solid;
        border-width: 0px;
    }
    .circular1{
        height: 340px;
        width: 600px;
        top: 0px;
        left:0px;
        position: absolute;
        background-color:#ffffff;
        
    }
    .circular2{
        height: 340px;
        width: 600px;
        top: 0px;
        left:600px;
        position: absolute;
        background-color: #ffffff;
        
    }
    .barras{
        height: 340px;
        width: 1200px;
        top: 340px;
        left: 0px;
        position: absolute;
        background-color: #ffffff;
      
    }
    #filtrosTituloC {
        font-size: 50px;
        text-align: center;
        position: relative;
        top: 70px;
        color: #204051;
    }

    .sqrDepartamentoC {
        height: 100px;
        width: 200px;
        position: absolute;
        top: 195px;
        left: 45px;
    }

    .sqrMunicipioC {
        height: 100px;
        width: 200px;
        position: absolute;
        top: 300px;
        left: 45px;
    }

    .BotonComparar {
        height: 40px;
        width: 200px;
        position: absolute;
        top: 500px;
        left: 45px;
        background-color: #006e8c;
        box-sizing: border-box;
        margin: 10px auto;
        border-radius: .3em;
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
        color: #ffffff;
        border: 0px solid #204051;
    }
    
        .BotonComparar:hover{
            color: #1883ba;
            background-color: #ffffff;
            cursor:pointer;
        }


        .loadingAnimC{
            position: absolute;
            top: 580px;
            left: 110px;
        }

        .listaDepC{
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

        .listaDepC::-ms-expand {
            display: none;
        }
        .listaDepC:hover {
            border-color: #888;
        }
        .listaDepC:focus {
            border-color: #aaa;
            box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
            box-shadow: 0 0 0 3px -moz-mac-focusring;
            color: #222; 
            outline: none;
        }
        .listaDepC option {
            font-weight:normal;
        }
    
    .filtroB{
        height: 680px;
        width: 300px;
        position: absolute;
        top: 195px;
        left: 1540px;
        background-image: linear-gradient(to top left, #bbe6ff, #ffffff);
        border-style: solid;
        border-width: 0px;
    }

</style>