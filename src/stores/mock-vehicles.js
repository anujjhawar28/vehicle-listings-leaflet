// File: stores/vehicleData.js

export default [
  {
    id: "v-001",
    name: "Truck 1",
    plate: "ABC-123",
    status: "online",
    type: "Truck",
    location: { lat: 25.276987, lng: 55.296249 },
    lastUpdated: "2025-07-02T10:30:00Z",
    lastLocation: "Sheikh Zayed Road, Dubai",
    history: [
      { lat: 25.2100, lng: 55.2700, timestamp: "2025-07-02T08:00:00Z" },
      { lat: 25.2200, lng: 55.2750, timestamp: "2025-07-02T08:30:00Z" },
      { lat: 25.2500, lng: 55.2800, timestamp: "2025-07-02T09:00:00Z" },
      { lat: 25.2700, lng: 55.2900, timestamp: "2025-07-02T09:30:00Z" },
      { lat: 25.276987, lng: 55.296249, timestamp: "2025-07-02T10:30:00Z" }
    ]
  },
  {
    id: "v-002",
    name: "Van A1",
    plate: "XYZ-789",
    status: "alert",
    type: "Van",
    location: { lat: 25.3548, lng: 55.4048 },
    lastUpdated: "2025-07-02T10:45:00Z",
    lastLocation: "Al Majaz, Sharjah",
    history: [
      { lat: 25.3400, lng: 55.3900, timestamp: "2025-07-02T08:00:00Z" },
      { lat: 25.3450, lng: 55.3950, timestamp: "2025-07-02T08:30:00Z" },
      { lat: 25.3500, lng: 55.4000, timestamp: "2025-07-02T09:00:00Z" },
      { lat: 25.3525, lng: 55.4020, timestamp: "2025-07-02T09:30:00Z" },
      { lat: 25.3548, lng: 55.4048, timestamp: "2025-07-02T10:45:00Z" }
    ]
  },
  {
    id: "v-003",
    name: "Bus 12",
    plate: "DEF-456",
    status: "offline",
    type: "Bus",
    location: { lat: 24.4539, lng: 54.3773 },
    lastUpdated: "2025-07-01T22:00:00Z",
    lastLocation: "Abu Dhabi Downtown",
    history: [
      { lat: 24.4400, lng: 54.3600, timestamp: "2025-07-01T18:00:00Z" },
      { lat: 24.4450, lng: 54.3650, timestamp: "2025-07-01T19:00:00Z" },
      { lat: 24.4485, lng: 54.3700, timestamp: "2025-07-01T20:00:00Z" },
      { lat: 24.4510, lng: 54.3750, timestamp: "2025-07-01T21:00:00Z" },
      { lat: 24.4539, lng: 54.3773, timestamp: "2025-07-01T22:00:00Z" }
    ]
  },
  {
    id: "v-004",
    name: "Mini Truck 7",
    plate: "GHI-321",
    status: "online",
    type: "Mini Truck",
    location: { lat: 25.4092, lng: 55.4445 },
    lastUpdated: "2025-07-02T11:10:00Z",
    lastLocation: "Ajman Corniche",
    history: [
      { lat: 25.3950, lng: 55.4300, timestamp: "2025-07-02T08:30:00Z" },
      { lat: 25.3980, lng: 55.4350, timestamp: "2025-07-02T09:30:00Z" },
      { lat: 25.4010, lng: 55.4380, timestamp: "2025-07-02T10:00:00Z" },
      { lat: 25.4050, lng: 55.4420, timestamp: "2025-07-02T10:30:00Z" },
      { lat: 25.4092, lng: 55.4445, timestamp: "2025-07-02T11:10:00Z" }
    ]
  },
  {
    id: "v-005",
    name: "Delivery Van B4",
    plate: "JKL-654",
    status: "offline",
    type: "Van",
    location: { lat: 24.2075, lng: 55.7447 },
    lastUpdated: "2025-07-01T20:00:00Z",
    lastLocation: "Hili, Al Ain",
    history: [
      { lat: 24.1900, lng: 55.7200, timestamp: "2025-07-01T17:00:00Z" },
      { lat: 24.1950, lng: 55.7250, timestamp: "2025-07-01T18:00:00Z" },
      { lat: 24.2000, lng: 55.7300, timestamp: "2025-07-01T18:30:00Z" },
      { lat: 24.2050, lng: 55.7400, timestamp: "2025-07-01T19:00:00Z" },
      { lat: 24.2075, lng: 55.7447, timestamp: "2025-07-01T20:00:00Z" }
    ]
  },
   {
    id: "v-006",
    name: "Tanker Gulf",
    plate: "TGR-111",
    status: "alert",
    type: "Tanker",
    location: { lat: 23.6345, lng: 55.9311 },
    lastUpdated: "2025-07-02T07:30:00Z",
    lastLocation: "Liwa Oasis",
    history: [
      { lat: 23.6400, lng: 55.9000, timestamp: "2025-07-02T05:00:00Z" },
      { lat: 23.6355, lng: 55.9200, timestamp: "2025-07-02T06:00:00Z" },
      { lat: 23.6345, lng: 55.9311, timestamp: "2025-07-02T07:30:00Z" }
    ]
  },
  {
    id: "v-007",
    name: "Crane Carrier",
    plate: "CRA-552",
    status: "online",
    type: "Heavy Vehicle",
    location: { lat: 25.6840, lng: 55.9511 },
    lastUpdated: "2025-07-02T11:00:00Z",
    lastLocation: "Dhaid, Sharjah",
    history: [
      { lat: 25.6500, lng: 55.9200, timestamp: "2025-07-02T08:00:00Z" },
      { lat: 25.6600, lng: 55.9300, timestamp: "2025-07-02T09:00:00Z" },
      { lat: 25.6700, lng: 55.9400, timestamp: "2025-07-02T10:00:00Z" },
      { lat: 25.6840, lng: 55.9511, timestamp: "2025-07-02T11:00:00Z" }
    ]
  },
  {
    id: "v-008",
    name: "Medical Shuttle",
    plate: "MED-888",
    status: "offline",
    type: "Bus",
    location: { lat: 26.1056, lng: 56.0889 },
    lastUpdated: "2025-07-01T23:00:00Z",
    lastLocation: "Dibba, Fujairah",
    history: [
      { lat: 25.9500, lng: 56.0200, timestamp: "2025-07-01T20:00:00Z" },
      { lat: 26.0000, lng: 56.0500, timestamp: "2025-07-01T21:00:00Z" },
      { lat: 26.0500, lng: 56.0700, timestamp: "2025-07-01T22:00:00Z" },
      { lat: 26.1056, lng: 56.0889, timestamp: "2025-07-01T23:00:00Z" }
    ]
  },
  {
    id: "v-009",
    name: "Road Sweeper",
    plate: "RSW-321",
    status: "online",
    type: "Utility",
    location: { lat: 24.9602, lng: 55.1188 },
    lastUpdated: "2025-07-02T06:15:00Z",
    lastLocation: "Ghantoot, Abu Dhabi",
    history: [
      { lat: 24.9400, lng: 55.1000, timestamp: "2025-07-02T05:00:00Z" },
      { lat: 24.9500, lng: 55.1100, timestamp: "2025-07-02T05:30:00Z" },
      { lat: 24.9602, lng: 55.1188, timestamp: "2025-07-02T06:15:00Z" }
    ]
  },
  {
    id: "v-010",
    name: "Emergency Unit",
    plate: "EMU-001",
    status: "alert",
    type: "Ambulance",
    location: { lat: 24.8230, lng: 55.0132 },
    lastUpdated: "2025-07-02T04:45:00Z",
    lastLocation: "Ruwais, Abu Dhabi",
    history: [
      { lat: 24.8000, lng: 55.0000, timestamp: "2025-07-02T03:00:00Z" },
      { lat: 24.8100, lng: 55.0080, timestamp: "2025-07-02T03:45:00Z" },
      { lat: 24.8230, lng: 55.0132, timestamp: "2025-07-02T04:45:00Z" }
    ]
  }
];
