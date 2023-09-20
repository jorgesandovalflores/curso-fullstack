<script setup lang="ts">
    import GoogleMapsLoader from 'google-maps'
    import { onMounted, ref } from 'vue'

    GoogleMapsLoader.KEY = String(import.meta.env.VITE_API_KEY_MAPS)
    GoogleMapsLoader.VERSION = '3.53'
    GoogleMapsLoader.LIBRARIES = ['geometry', 'drawing']

    const googleConst = ref<GoogleMapsLoader.google | null>(null)
    let mapConst: GoogleMapsLoader.google.maps = null
    
    onMounted(async () => {
        loadMaps()
    })

    const loadMaps = () => {
        GoogleMapsLoader.load((mGoogle) => {
            googleConst.value = mGoogle
            initMap()
        })
    }

    const initMap = async () => {
        let mapHtml = await document.getElementById('map-custom')
        let myLatlng = new google.maps.LatLng(-8.108504, -79.026438)
        let mapOptions = {
            zoom: 5,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            draggable: false
        }
        let mGoogle = new google.maps.Map(mapHtml!!, mapOptions)
        mapConst = mGoogle
    }
</script>

<template>
    <div id="map-custom" class="full-screen-container">
    <!-- Contenido de tu div aquí -->
  </div>
</template>

<style scoped>
.full-screen-container {
  width: 700px;
  height: 80vh; /* 100% del alto de la pantalla */
  box-sizing: border-box; /* Asegura que el margen se incluya en el 100% de alto */
}
</style>