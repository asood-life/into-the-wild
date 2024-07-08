<template>
    <div id="map-frame" class="relative ml-3">
        <div id="search-animation" class="absolute inset-0 flex items-center justify-center z-10 opacity-80"
            style="background-color: rgba(255,255,255,0.85); width: 98%; height: 100vh;">
        </div>
        <GoogleMap :api-key="API_KEY" :center="center" :zoom="12"
            :style="{ width: '98%', height: '100vh', 'position': 'absolute' }">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'
export default {
    components: {
        GoogleMap,
        Marker
    },
    data() {
        return {
            center: { lat: 29.55, lng: 78.88 },
            API_KEY: process.env.VUE_APP_API_KEY
        };
    },
    mounted() {
        this.getCoords();
    },
    methods: {
        getCoords() {
            const coords = this.$bus.getData();
            if (coords) {
                this.center = { lat: coords.lat, lng: coords.lng };
            }
        }
    },
    watch: {
        '$bus.data'(newData) {
            if (newData) {
                this.center = { lat: newData.lat, lng: newData.lng };
            }
        }
    }
}
</script>