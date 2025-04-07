<template>
  <fwb-modal @close="closeModal" size="7xl" position="top-center">
    <template #header>
      <div class="flex items-center text-lg">Location</div>
    </template>
    <template #body>
      <div class="min-h-[70vh] md:min-h-[60vh]">
        <div>
          <div class="mb-1">
            <p class="font-medium">Please select an option</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div
              class="p-4 rounded-md duration-300 cursor-pointer"
              :class="
                selectedLocation === 'engagement'
                  ? 'bg-[#cb925c]'
                  : 'bg-[#c6a988] hover:bg-[#cb925c]'
              "
              @click="selectLocation('engagement')">
              <p>Engagement Location</p>
            </div>
            <div
              class="p-4 rounded-md duration-300 cursor-pointer"
              :class="
                selectedLocation === 'wedding' ? 'bg-[#cb925c]' : 'bg-[#c5ac94] hover:bg-[#cb925c]'
              "
              @click="selectLocation('wedding')">
              <p>Wedding Location</p>
            </div>
            <div
              class="p-4 rounded-md duration-300 cursor-pointer"
              :class="
                selectedLocation === 'reception'
                  ? 'bg-[#cb925c]'
                  : 'bg-[#c5b5a6] hover:bg-[#cb925c]'
              "
              @click="selectLocation('reception')">
              <p>Reception Location</p>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <!-- Location Details -->
          <div v-if="selectedLocation" class="mb-4">
            <h3 class="text-lg font-semibold mb-2">{{ locationDetails[selectedLocation].name }}</h3>
            <!-- <p class="mb-1">{{ locationDetails[selectedLocation].address }}</p>
            <p class="text-sm text-gray-600">{{ locationDetails[selectedLocation].description }}</p> -->
          </div>

          <!-- Google Map -->
          <div class="w-full h-64 bg-gray-100 rounded-lg overflow-hidden relative">
            <!-- Google Maps iframe -->
            <iframe
              v-if="selectedLocation"
              width="100%"
              height="100%"
              frameborder="0"
              style="border: 0"
              :src="getMapEmbedUrl(selectedLocation)"
              allowfullscreen></iframe>
            <div v-else class="absolute inset-0 flex items-center justify-center bg-gray-200">
              <p class="text-gray-500">Select a location to view on map</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button
          class="bg-[#591f0b] hover:bg-[#794c22] duration-300 cursor-pointer"
          :disabled="!selectedLocation"
          @click="openInGoogleMaps">
          Open Location in Google Maps
        </fwb-button>
        <fwb-button @click="closeModal" color="dark"> Close </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>

<script setup>
import { ref } from "vue";
import { FwbButton, FwbModal } from "flowbite-vue";

const emit = defineEmits(["closeModal"]);
const selectedLocation = ref(null);

// Location details - replace with your actual location data
const locationDetails = {
  engagement: {
    name: "Sapeiman",
    address: "",
    description: "",
    coordinates: "5.731781,-0.316975",
    mapUrl:
      "https://www.google.com/maps/place/5%C2%B043'54.4%22N+0%C2%B019'01.1%22W/@5.7317807,-0.3195498,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.7317807!4d-0.3169749?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
  wedding: {
    name: "The Church of Pentecost, Latter Rain Assembly, Mallam Kokroko",
    address: "HPG8+RW7, Mallam",
    description: "Historic cathedral with gorgeous architecture for the perfect ceremony.",
    coordinates: "5.5767929,-0.283348",
    mapUrl:
      "https://www.google.com/maps/place/Church+Of+Pentecost+(Latter+Rain)/@5.5767929,-0.283348,18.85z/data=!4m12!1m5!3m4!2zNcKwMzQnMzYuNiJOIDDCsDE2JzU3LjQiVw!8m2!3d5.5768211!4d-0.2826145!3m5!1s0xfdf98167bd0479d:0x3f347b9486867b6d!8m2!3d5.5770367!4d-0.2826963!16s%2Fg%2F11bx8hh7rh?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
  reception: {
    name: "St. Margaret Mary Parish, Dansoman",
    address: "27th St, Accra",
    description: "",
    coordinates: "5.5611296,-0.2694559",
    mapUrl:
      "https://www.google.com/maps/place/St.+Margaret+Mary+Parish,+Dansoman/@5.5611296,-0.2694559,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf97878f15cfd5:0x519d5b3f7f596779!8m2!3d5.5611296!4d-0.2694559!16s%2Fg%2F11c55t_ms0?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
};

function selectLocation(location) {
  selectedLocation.value = location;
}

function getMapEmbedUrl(location) {
  // Create a Google Maps embed URL using the location coordinates
  const coords = locationDetails[location].coordinates;
  const name = encodeURIComponent(locationDetails[location].name);
  return `https://maps.google.com/maps?q=${coords}&z=15&output=embed&t=m&q=${name}`;
}

function openInGoogleMaps() {
  if (selectedLocation.value) {
    // Open Google Maps in a new tab with the selected location
    window.open(locationDetails[selectedLocation.value].mapUrl, "_blank");
  }
}

function closeModal() {
  emit("closeModal");
}
</script>
