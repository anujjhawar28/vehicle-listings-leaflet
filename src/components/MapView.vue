<template>
  <div style="height: 90vh; width: 50vw">
    <LMap v-model="zoom" v-model:zoom="zoom" :center="getCenterMap">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LControlLayers />
      <LMarker
        v-for="(vehicle, key) in getVehicles"
        :key="key"
        :lat-lng="[vehicle.location?.lat ?? 0, vehicle.location?.lng ?? 0]"
      >
        <LIcon>
          <GreenMarker v-if="vehicle.status === 'online'" />
          <GrayMarker v-else-if="vehicle.status === 'offline'" />
          <RedMarker v-else-if="vehicle.status === 'alert'" />
        </LIcon>
        <l-popup class="w-full">
          <div class="w-80 mr-6 flex items-center gap-8">
            <div>
              <span class="font-bold">Vehicle Name:</span>
              {{ vehicle.name }}
              <br />
              <span class="font-bold">Vehicle Plate:</span>
              {{ vehicle.plate }}
              <br />
              <span class="font-bold">Last Updated Time: </span>
              <br />
              {{
                vehicle.lastUpdated ? formatDate(vehicle.lastUpdated) : "N/A"
              }}
              <br />
              <span class="font-bold">Vehicle Status: </span>
              <span
                class="font-semibold"
                :class="getStatusColor(vehicle.status)"
              >
                {{ vehicle.status }}
              </span>
              <br />
            </div>
            <Button
              label="View History"
              icon="pi pi-eye"
              size="small"
              severity="info"
              variant=""
            />
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
       -->
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
} from "@vue-leaflet/vue-leaflet";
import { useVehicleStore } from "../stores/vehicleStore";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import GreenMarker from "./markers/GreenMarker.vue";
import GrayMarker from "./markers/GrayMarker.vue";
import RedMarker from "./markers/RedMarker.vue";
import dayjs from "dayjs";

const props = defineProps({
  selectedVehicle: {
    type: Object,
    default: null,
  },
});

const zoom = ref(8);

const { getVehicles } = storeToRefs(useVehicleStore());

const getCenterMap = computed(() => {
  if (props.selectedVehicle && props.selectedVehicle.location) {
    return [
      props.selectedVehicle.location.lat,
      props.selectedVehicle.location.lng,
    ];
  }
  return getVehicles.value[0]?.location
    ? [getVehicles.value[0].location.lat, getVehicles.value[0].location.lng]
    : [0, 0];
});

const getStatusColor = (status) => {
  return status === "online"
    ? "text-green-600"
    : status === "offline"
    ? "text-gray-400"
    : "text-red-500";
};
const formatDate = (isoString) =>
  dayjs(isoString).format("DD MMM YYYY, HH:mm A");
</script>