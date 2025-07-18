<template>
  <div class="max-w-wrapper-md mx-auto px-10 pt-6">
    <h1 class="text-2xl font-semibold text-gray-600 mb-6 text-center">
      Wiot360 Technical Assessment
    </h1>
    
    <div class="justify-center flex items-start gap-4">
      <VehicleTable class="w-[40%]" @vehicleSelected="handleVehicleSelection" />
      <MapView class="w-[60%]" :selected-vehicle="selectedVehicle" />
    </div>
  </div>
</template>

<script setup>
import VehicleTable from "../components/VehicleTable.vue";
import MapView from "../components/MapView.vue";
import { ref } from "vue";

const selectedVehicle = ref(null);
const handleVehicleSelection = (vehicle) => {
  selectedVehicle.value = vehicle;
};
</script>
