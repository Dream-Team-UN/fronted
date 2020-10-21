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

    </div v-on:click="funcionPrueba">-->
    <gmap-map v-on:click="funcionPrueba"
      :center="center"
      :zoom="10"
      style="width:100%;  height: 675px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
 props: {
    lati: Number,
    longi: String
  },
  data() {
    return {
      // Coordenadas de Colombia (default)
      center: { lat: 4.6420147, lng: -78.8461639 },
      markers: [],
      places: [],
      currentPlace: null,
      
    };
  },

  mounted() {
    // Función para centrar el mapa en la ubicación dada usuario:
    this.geolocate();
    console.log("latitud "+this.lati+"longitud "+this.longi)
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
    geolocate() {
        this.center = {
          lat: this.lati,
          lng: this.longi
        };    
    }
  }
};
</script>