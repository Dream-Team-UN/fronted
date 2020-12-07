<template>
  <div>
    <!--<div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>-->
    <gmap-map v-on:click="funcionPrueba" 
      :center="{ lat: this.lati, lng: this.longi}"
      :zoom="this.zoomi"
      style="width:100%;  height: 812px;"
    >
    <!--<GmapCircle v-for="index in 1065" v-bind:key="index"-->
      <GmapCircle :key="index"
          v-for="(pin, index) in circulos"
    
    :center="{ lat:pin.latitud, lng: pin.longitud}"
    :radius=pin.radio
    :visible="true"
    :options="{fillColor:'red',fillOpacity:0.35,strokeOpacity: 0.8,strokeWeight: 2,strokeColor: 'red'}"
    
      
      
      
  ></GmapCircle>
    </gmap-map>
   
  </div>
</template>

<script>
import CoorMunicipioService from './services/CoorMunicipioService';
export default {
  name: "GoogleMap",
  components:{

  },
 props: {
    lati: Number,
    longi: Number,
    zoomi: Number,
  },
  data() {
    return {
      // Coordenadas de Colombia (default)
      //center: { lat: 4.6420147, lng: -78.8461639},
      coorMun:[],
      markers: [],
      places: [],
      circulos:[],
      currentPlace: null,
    };
  },

  mounted() {
    // Función para centrar el mapa en la ubicación dada usuario:
    //this.geolocate();
    //console.log("latitud "+this.lati+"longitud "+this.longi)
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    funcionPrueba(){
      
      console.log("latitud enviada "+this.lati),
      console.log("longitud enviada "+this.longi)
     },
    cordenadasMunicipiosDataG(){
            CoorMunicipioService.devolverCoorMunicipios().then(response=>{
                console.log(response.data);
                this.coorMun = response.data;
                //console.log(this.coorMun);
                this.informacionCirculos();
            });
        },

      informacionCirculos(){
            var list = {
                'municipios' :[]
            };
            var info_latitud=[];
            var info_longitud=[];
            var info_radio=[];
            var info_nombre=[]
            for(var i=0;i<1065;i++){
                var aux_lat=Number(this.coorMun[i].latitud)
                var aux_long=Number(this.coorMun[i].longitud)
                info_nombre.push(this.coorMun[i].name)
                info_latitud.push(aux_lat)
                info_longitud.push(aux_long)
                if(this.coorMun[i].name=="Bogotá D.C."){
                    info_radio.push(7*1000);
                }
                else if(this.coorMun[i].name=="Medellin"){
                    info_radio.push(5.5*1000)
                }
                else if(this.coorMun[i].name=="Cartagena De Indias" || this.coorMun[i].name=="Cali"
                        || this.coorMun[i].name=="Barranquilla" || this.coorMun[i].name=="Cúcuta"){
                    info_radio.push(5*1000)
                }
                else if(this.coorMun[i].name=="Ibagué" || this.coorMun[i].name=="Manizales"
                        || this.coorMun[i].name=="Pereira" || this.coorMun[i].name=="Bucaramanga"){
                    info_radio.push(4.5*1000)
                }
                else if(this.coorMun[i].name=="Villavicencio" || this.coorMun[i].name=="Santa Marta"
                        || this.coorMun[i].name=="Valledupar" || this.coorMun[i].name=="Montería"
                        || this.coorMun[i].name=="Neiva" || this.coorMun[i].name=="Pasto"
                        || this.coorMun[i].name=="Armenia"){
                    info_radio.push(4.1*1000)
                }
                else{
                    info_radio.push((Math.random() * (4 - 2) + 2)*1000)
                }  
            }
         
            console.log(info_latitud);
            console.log(info_longitud);
            console.log(info_nombre);
            console.log(info_radio);
            
            var a=[]


            for(var i=0;i< 1065;i++){
              var circulo1 = new Object();
              circulo1.nombre= info_nombre[i];
              circulo1.latitud= info_latitud[i];
              circulo1.longitud = info_longitud[i];
              circulo1.radio = info_radio[i];
              a.push(circulo1);
            }

          this.circulos=a
          console.log(this.circulos)


  
        },
        
    
    /*geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },*/
    /*if (navigator.geolocation) { 
  navigator.geolocation.getCurrentPosition (getPosition); 
}
function getPosition (position) { 
  console.log (position.coords.latitude, position.coords.longitude); 
}*/ 
    geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: this.lati,
          lng: this.longi
        };
      }); 
    },
    
  },
  created(){
      this.cordenadasMunicipiosDataG()
    }
};
</script>
