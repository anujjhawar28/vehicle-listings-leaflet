import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { haversineDistance } from "../utils/distanceUtils.js";
import mockVehicles from "./mock-vehicles.js";

export const useVehicleStore = defineStore("vehicles", () => {
  const vehicles = ref(mockVehicles);

  const getVehicleById = (id) => {
    return vehicles.value.find((v) => v.id === id);
  };

  const getVehicleRouteStats = (id) => {
    const vehicle = getVehicleById(id);
    if (!vehicle || !vehicle.history || vehicle.history.length < 2) return null;

    const history = vehicle.history;
    let totalDistance = 0;
    for (let i = 1; i < history.length; i++) {
      totalDistance += haversineDistance(history[i - 1], history[i]);
    }

    const timeStart = new Date(history[0].timestamp);
    const timeEnd = new Date(history[history.length - 1].timestamp);
    const timeHours = (timeEnd - timeStart) / 1000 / 60 / 60;

    return {
      start: history[0],
      end: history[history.length - 1],
      distanceKm: totalDistance.toFixed(2),
      avgSpeed: timeHours > 0 ? (totalDistance / timeHours).toFixed(2) : 0,
    };
  };

  const getVehicles = computed(() => {
    return vehicles.value.map((vehicle) => ({
      ...vehicle,
      routeStats: getVehicleRouteStats(vehicle.id),
    }));
  });

  return {
    getVehicles,
    getVehicleById,
    getVehicleRouteStats,
  };
});
