<template>
  <div style="height: 90vh; width: 50vw">
    <LMap v-model="zoom" :zoom="getZoom" :center="getCenterMap">
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
        <LPopup class="w-full">
          <div class="w-full flex items-center gap-2">
            <div class="w-2/3">
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
              size="small"
              severity="info"
              @click="vehicleHistory = vehicle"
            />
          </div>
        </LPopup>
      </LMarker>
    </LMap>
    <VehicleHistoryModal
      v-if="vehicleHistory"
      :model-value="!!vehicleHistory"
      :vehicle="vehicleHistory"
      @update:model-value="vehicleHistory = null"
    />
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
import VehicleHistoryModal from "./VehicleHistoryModal.vue";

const props = defineProps({
  selectedVehicle: {
    type: Object,
    default: null,
  },
});

const zoom = ref(8);

const getZoom = computed(() => {
  return props.selectedVehicle ? 12 : 8;
});

const vehicleHistory= ref(null);

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