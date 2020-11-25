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
      style="width:100%;  height: 804px;"
    >
      <GmapCircle
    :center="{ lat: this.lati, lng: this.longi}"
    :radius="6000"
    :visible="true"
    :options="{fillColor:'red',fillOpacity:0.35,strokeOpacity: 0.8,strokeWeight: 2,strokeColor: 'red'}"
    
      
      
      
  ></GmapCircle>
    </gmap-map>
   
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
 props: {
    lati: Number,
    longi: Number,
    zoomi: Number
  },
  data() {
    return {
      // Coordenadas de Colombia (default)
      //center: { lat: 4.6420147, lng: -78.8461639},
      markers: [],
      places: [],
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
    }
  }
};
</script>
