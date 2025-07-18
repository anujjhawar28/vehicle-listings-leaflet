<template>
  <div class="max-w-wrapper-md mx-auto px-10 justify-center flex items-center gap-4">
    <VehicleTable class="w-[40%]"/>
    <MapView class="w-[60%]" />
  </div>
</template>

<script setup>
import VehicleTable from "../components/VehicleTable.vue";
import MapView from "../components/MapView.vue";
</script>
