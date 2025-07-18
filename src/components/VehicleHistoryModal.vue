<template>
  <Dialog
    :visible="modelValue"
    @update:visible="(vl) => $emit('update:modelValue', vl)"
    :header="vehicle?.name || 'Vehicle History'"
    modal
    :style="{ width: '80vw'}"
  >
    <div class="mb-4 p-2 bg-gray-50 rounded">
      <div class="grid grid-cols-2 gap-2">
        <div><strong>Plate Number:</strong> {{ vehicle.plate }}</div>
        <div>
          <strong>Status:</strong>
          <Tag
            :value="vehicle.status"
            :severity="statusSeverity(vehicle.status)"
          />
        </div>
        <div><strong>Type:</strong> {{ vehicle.type }}</div>
        <div>
          <strong>Last Updated:</strong> {{ formatDate(vehicle.lastUpdated) }}
        </div>
        <div class="col-span-2">
          <strong>Last Location:</strong> {{ vehicle.lastLocation }}
        </div>
      </div>
    </div>

    <div style="height: 400px; width: 100%">
      <LMap :zoom="zoom" :center="mapCenter" style="height: 100%; width: 100%">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <LPolyline
          :lat-lngs="vehicle.history.map((p) => [p.lat, p.lng])"
          color="blue"
        />

        <LMarker :lat-lng="[vehicle.history[0].lat, vehicle.history[0].lng]">
          <LPopup
            >Start Point: {{ formatDate(vehicle.history[0].timestamp) }}</LPopup
          >
        </LMarker>

        <LMarker
          :lat-lng="[
            vehicle.history[vehicle.history.length - 1].lat,
            vehicle.history[vehicle.history.length - 1].lng,
          ]"
        >
          <LPopup
            >End Point:
            {{
              formatDate(vehicle.history[vehicle.history.length - 1].timestamp)
            }}</LPopup
          >
        </LMarker>
      </LMap>
    </div>
  </Dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import Dialog from "primevue/dialog";
import Tag from "primevue/tag";
import dayjs from "dayjs";
import {
  LMap,
  LTileLayer,
  LPolyline,
  LMarker,
  LPopup,
} from "@vue-leaflet/vue-leaflet";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  vehicle: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const zoom = ref(12);

const mapCenter = computed(() => {
  return props.vehicle?.history?.[0]
    ? [props.vehicle.history[0].lat, props.vehicle.history[0].lng]
    : [25.276987, 55.296249];
});

const statusSeverity = (status) => {
  return status === "online"
    ? "success"
    : status === "offline"
    ? "secondary"
    : "danger";
};

const formatDate = (isoString) =>
  dayjs(isoString).format("DD MMM YYYY, HH:mm A");
</script>

<style scoped>
.p-dialog-content {
  overflow-y: auto;
}
</style>
