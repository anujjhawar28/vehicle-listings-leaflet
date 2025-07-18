<template>
  <div class="dashboard">
    <div class="grid">
      <div class="col-12 md:col-8">
        <MapView />
      </div>
      <div class="col-12 md:col-4">
        <VehicleTable />
      </div>
    </div>
  </div>
</template>

<script setup>
import MapView from '../components/MapView.vue';
import VehicleTable from '../components/VehicleTable.vue';
</script>