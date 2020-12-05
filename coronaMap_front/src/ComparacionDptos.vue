<template>
    <div>
        <div class="filtroAD">
            <h1 id="filtrosTituloCD">Departamento 1</h1>
            <div class="sqrDepartamentoCD">
                <h3>Departamento:</h3>
                <select class="listaDepCD" v-on:change="refreshDataDptosCD1($event)">
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
            
            <button class="BotonCompararD" @click="mostrarCasosDpto">Comparar</button>
            <div class="loadingAnimCD" v-if="loading">
                <fingerprint-spinner
                    :animation-duration="1100"
                    :size="64"
                    color="#0e918c"
                />
            </div>
        </div>
        <!--<div class="estadisticasC" v-if="casosMun1.length ==0">-->
        <div class="estadisticasCD">
            <div class="circular1D">Diagrama Circular de Municipio 1</div>
            <div class="circular2D">Diagrama Circular de Municipio 2</div>
            <div class="barrasD">Diagrama Comparativo de ambos Municipios</div>
        </div>
        <div class="estadisticasCD" v-if="this.ready">
            <div class="circular1D"><Chart type="pie" :data="chartData" /></div>
            <div class="circular2D"><Chart type="pie" :data="chartData2" /></div>
            <div class="barrasD"><Chart type="bar" :data="basicData" style="width:55%;height:20%;margin-left:260px"/></div>
        </div>
        
        <div class="filtroBD">
            <h1 id="filtrosTituloCD">Departamento 2</h1>
            <div class="sqrDepartamentoCD">
                <h3>Departamento:</h3>
                <select class="listaDepCD" v-on:change="refreshDataDptosCD2($event)">
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
        </div>
    </div>
</template>

<script>
//import Chart from 'primevue/chart';
import { FingerprintSpinner } from 'epic-spinners'
import CasosDepartamentoService from './services/CasosDepartamentoService';
import Chart from 'primevue/chart';
export default {
    components:{
        FingerprintSpinner,
        Chart
    },
    data(){
        return{
            ready:false,
            loading:false,
            DATA_DPTO1:"algo",
            NUM_DPTO1:0,
            DATA_DPTO2:"algo",
            NUM_DPTO2:0,
            casosDpto1:[],
            casosDpto2:[],
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
        refreshDataDptosCD1: function(event){
            var id=event.target.value;
            var value=event.target.options[event.target.options.selectedIndex].text;
            console.log(id);
            console.log(value);
            this.DATA_DPTO1=value;
            this.NUM_DPTO1=id;
        },
        refreshDataDptosCD2: function(event){
            var id=event.target.value;
            var value=event.target.options[event.target.options.selectedIndex].text;
            console.log(id);
            console.log(value);
            this.DATA_DPTO2=value;
            this.NUM_DPTO2=id;
        },
        enviarDatosChartD(){
            this.chartData.datasets[0].data[0]=Number(this.casosDpto1.casosAct);
            console.log(this.chartData.datasets[0].data[0]);
            this.chartData.datasets[0].data[1]=Number(this.casosDpto1.casosFal);
            console.log(this.chartData.datasets[0].data[1]);
            this.chartData.datasets[0].data[2]=Number(this.casosDpto1.casosAsin);
            console.log(this.chartData.datasets[0].data[2]);
            this.chartData.datasets[0].data[3]=Number(this.casosDpto1.casosRec);
            console.log(this.chartData.datasets[0].data[3]);

            this.chartData2.datasets[0].data[0]=Number(this.casosDpto2.casosAct);
            console.log(this.chartData.datasets[0].data[0]);
            this.chartData2.datasets[0].data[1]=Number(this.casosDpto2.casosFal);
            console.log(this.chartData.datasets[0].data[1]);
            this.chartData2.datasets[0].data[2]=Number(this.casosDpto2.casosAsin);
            console.log(this.chartData.datasets[0].data[2]);
            this.chartData2.datasets[0].data[3]=Number(this.casosDpto2.casosRec);
            console.log(this.chartData.datasets[0].data[3]);

            this.basicData.datasets[0].data[0]=Number(this.casosDpto1.casosAct);
            console.log(this.chartData.datasets[0].data[0]);
            this.basicData.datasets[0].data[1]=Number(this.casosDpto1.casosFal);
            console.log(this.chartData.datasets[0].data[1]);
            this.basicData.datasets[0].data[2]=Number(this.casosDpto1.casosAsin);
            console.log(this.chartData.datasets[0].data[2]);
            this.basicData.datasets[0].data[3]=Number(this.casosDpto1.casosRec);
            console.log(this.chartData.datasets[0].data[3]);
            this.basicData.datasets[0].data[4]=Number(this.casosDpto1.casosTol);
            console.log(this.chartData.datasets[0].data[4]);
            this.basicData.datasets[1].data[0]=Number(this.casosDpto2.casosAct);
            console.log(this.chartData.datasets[0].data[0]);
            this.basicData.datasets[1].data[1]=Number(this.casosDpto2.casosFal);
            console.log(this.chartData.datasets[0].data[1]);
            this.basicData.datasets[1].data[2]=Number(this.casosDpto2.casosAsin);
            console.log(this.chartData.datasets[0].data[2]);
            this.basicData.datasets[1].data[3]=Number(this.casosDpto2.casosRec);
            console.log(this.chartData.datasets[0].data[3]);
            this.basicData.datasets[1].data[4]=Number(this.casosDpto2.casosTol);
            console.log(this.chartData.datasets[0].data[4]);


        },
        mostrarCasosDpto(){
            this.ready=false;
            this.loading=true;
        CasosDepartamentoService.devolverCasosDpto(this.DATA_DPTO1).then(response=>{
            this.casosDpto1 = response.data;   
            console.log(this.casosDpto1);   
        });
        CasosDepartamentoService.devolverCasosDpto(this.DATA_DPTO2).then(response=>{
            this.casosDpto2 = response.data;   
            console.log(this.casosDpto2);
        });
        
        setTimeout(()=>{
                this.enviarDatosChartD();
            },4000);
            setTimeout(() => {
                this.loading = false;
            }, 4000)
            setTimeout(() => {
                this.ready = true;
            }, 4000)
        }
    }
}
</script>

<style>

    .filtroAD{
        height: 680px;
        width: 300px;
        position: absolute;
        top: 195px;
        left: 40px;
        font-size: 20px;
        background-image: linear-gradient(to top right, #bbe6ff, #ffffff);
        border-style: solid;
        border-width: 0px;
        border-color: #e4e3e3;
    }

.estadisticasCD{
        height: 680px;
        width: 1200px;
        top: 195px;
        left: 340px;
        position: absolute;
        background-color: #ffffff;
        border-style: solid;
        border-width: 0px;
        border-color: #e4e3e3;
    }
    .circular1D{
        height: 340px;
        width: 600px;
        top: 0px;
        left:0px;
        position: absolute;
        background-color:#ffffff;
        
    }
    .circular2D{
        height: 340px;
        width: 600px;
        top: 0px;
        left:600px;
        position: absolute;
        background-color: #ffffff;
        
    }
    .barrasD{
        height: 340px;
        width: 1200px;
        top: 340px;
        left: 0px;
        position: absolute;
        background-color: #ffffff;
      
    }
    #filtrosTituloCD {
        font-size: 35px;
        text-align: center;
        position: relative;
        top: 70px;
        color: #204051;
    }
    .sqrDepartamentoCD {
        height: 100px;
        width: 200px;
        position: absolute;
        top: 200px;
        left: 45px;
    }
    .BotonCompararD {
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
    
        .BotonCompararD:hover{
            color: #1883ba;
            background-color: #ffffff;
            cursor:pointer;
        }


        .loadingAnimCD{
            position: absolute;
            top: 580px;
            left: 110px;
        }

    .listaDepCD{
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

        .listaDepCD::-ms-expand {
            display: none;
        }
        .listaDepCD:hover {
            border-color: #888;
        }
        .listaDepCD:focus {
            border-color: #aaa;
            box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
            box-shadow: 0 0 0 3px -moz-mac-focusring;
            color: #222; 
            outline: none;
        }
        .listaDepCD option {
            font-weight:normal;
        }

        .filtroBD{
        height: 680px;
        width: 300px;
        position: absolute;
        top: 195px;
        left: 1540px;
        background-image: linear-gradient(to top left, #bbe6ff, #ffffff);
        border-style: solid;
        border-width: 0px;
        border-color: #e4e3e3;
    }

</style>