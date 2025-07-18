<template>
  <div class="py-8">
    <div class="flex justify-between items-center mb-4 gap-3 flex-wrap">
      <FloatLabel>
        <InputText id="search" v-model="search" />
        <label for="search">Search</label>
      </FloatLabel>

      <FloatLabel>
        <Select
          v-model="selectedStatus"
          :options="statuses"
          optionLabel="label"
          class="w-full md:w-48"
          id="status-select"
        />
        <label for="status-select">Filter</label>
      </FloatLabel>
    </div>
    <div class="max-h-[80vh] min-h-[80vh] overflow-auto">
      <DataView
        :value="filteredVehicles"
        :layout="'grid'"
      >
        <template #grid="slotProps">
          <div
            class="p-col-12 md:p-col-4 lg:p-col-3 p-2 cursor-pointer border-x-2 border-b-2 border-gray-200 shadow-sm bg-gray-50"
            v-for="vehicle in slotProps.items"
            :key="slotProps.key"
          >
            <div class="surface-card shadow-2 p-4 border-round">
              <div class="flex items-center gap-4 mb-2">
                <div class="text-xl font-semibold">{{ vehicle.name }}</div>
                <Tag
                  :value="vehicle.status"
                  :severity="statusSeverity(vehicle.status)"
                />
              </div>
              <div class="mb-2 text-sm text-color-secondary">
                Plate: <strong>{{ vehicle.plate }}</strong>
              </div>
              <div class="mb-2"></div>
              <div class="text-sm mb-1">
                <i class="pi pi-car mr-2"></i> Type: {{ vehicle.type }}
              </div>
              <div class="text-sm mb-1">
                <i class="pi pi-map-marker mr-2"></i> {{ vehicle.lastLocation }}
              </div>
              <div class="text-sm text-color-secondary">
                <i class="pi pi-clock mr-2"></i>
                {{ formatDate(vehicle.lastUpdated) }}
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVehicleStore } from "../stores/vehicleStore";
import dayjs from "dayjs";
import { storeToRefs } from "pinia";

const { getVehicles } = storeToRefs(useVehicleStore());
const search = ref("");
const statuses = [
  { label: "All", value: "all" },
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Alert", value: "alert" },
];

const selectedStatus = ref({ label: "All", value: "all" });

const statusSeverity = (status) => {
  return status === "online"
    ? "success"
    : status === "offline"
    ? "secondary"
    : "danger";
};

const filteredVehicles = computed(() => {
  return getVehicles.value.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(search.value.toLowerCase()) ||
      v.plate.toLowerCase().includes(search.value.toLowerCase());
    const matchesStatus =
      selectedStatus.value.value != "all"
        ? v.status === selectedStatus.value.value
        : true;
    return matchesSearch && matchesStatus;
  });
});

const formatDate = (isoString) => dayjs(isoString).format("DD MMM YYYY, HH:mm");
</script>

<style scoped>
.surface-card {
  transition: all 0.3s;
}
.surface-card:hover {
  transform: scale(1.02);
}
</style>
