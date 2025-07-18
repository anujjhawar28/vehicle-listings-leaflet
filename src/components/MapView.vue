<template>
  <div style="height: 90vh; width: 50vw;">
    <LMap
      v-model="zoom"
      v-model:zoom="zoom"
      :center="getCenterMap"
      @move="log('move')"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LControlLayers />
      <LMarker v-for="(vehicle, key) in getVehicles" :key="key" :lat-lng="[vehicle.location?.lat ?? 0, vehicle.location?.lng ?? 0]">
      <LIcon>
        <GreenMarker v-if="vehicle.status === 'online'" />
        <GrayMarker v-else-if="vehicle.status === 'offline'" />
        <RedMarker v-else-if="vehicle.status === 'alert'" />
      </LIcon>
        <l-popup class="w-full">
         <div class="w-72 mr-6 flex items-center gap-4">
          <div>
            <span class="font-bold">Vehicle Name:</span> 
              {{vehicle.name}}
            <br />
            <span class="font-bold">Vehicle Plate:</span> 
              {{vehicle.plate}}
            <br />
            <span class="font-bold">Vehicle Status:</span> 
              {{vehicle.status}}
            <br />
           </div>
           <Button label="View History" icon="pi pi-eye"  size="small" severity="info" variant=""  />
         </div>
        </l-popup>
      </LMarker>

      <!-- <l-polyline
        :lat-lngs="[
          [47.334852, -1.509485],
          [47.342596, -1.328731],
          [47.241487, -1.190568],
          [47.234787, -1.358337],
        ]"
        color="green"
      ></l-polyline>
      <l-polygon
        :lat-lngs="[
          [46.334852, -1.509485],
          [46.342596, -1.328731],
          [46.241487, -1.190568],
          [46.234787, -1.358337],
        ]"
        color="#41b782"
        :fill="true"
        :fillOpacity="0.5"
        fillColor="#41b782"
      />
      <l-rectangle
        :lat-lngs="[
          [46.334852, -1.509485],
          [46.342596, -1.328731],
          [46.241487, -1.190568],
          [46.234787, -1.358337],
        ]"
        :fill="true"
        color="#35495d"
      />
      <l-rectangle
        :bounds="[
          [46.334852, -1.190568],
          [46.241487, -1.090357],
        ]"
      >
        <l-popup>
          lol
        </l-popup>
      </l-rectangle> -->
    </LMap>
  </div>
</template>

<script setup>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { useVehicleStore } from "../stores/vehicleStore";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import GreenMarker from "./markers/GreenMarker.vue";
import GrayMarker from "./markers/GrayMarker.vue";
import RedMarker from "./markers/RedMarker.vue";

const zoom = ref(8);

const { getVehicles } = storeToRefs(useVehicleStore());

const getCenterMap = computed(() => {
 return getVehicles.value[0]?.location ? [getVehicles.value[0].location.lat, getVehicles.value[0].location.lng] : [0, 0]
});
const log = (event) => {
  console.log(event);
};
</script>

<style scoped>
.leaflet-marker-icon.leaflet-div-icon.leaflet-zoom-animated.leaflet-interactive {
  display: none;
}
</style>