<template>
  <div
    class="md:min-h-[100vh] flex flex-col justify-between homepage rounded-bl-xl rounded-br-xl py-12">
    <div class="text-white flex flex-col justify-center items-center flex-grow gap-14">
      <div class="flex justify-center">
        <img src="../assets/images/rings.png" alt="Wedding rings" width="70" />
      </div>
      <div class="border-4 py-8 px-10 rounded-md">
        <div class="border-b-4 pb-4">
          <div class="flex w-full justify-center">
            <img src="../assets/images/obed.png" alt="Wedding rings" width="80" />
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl lobster-regular text-center">
            Obed & Abigail
          </h1>
          <p class="mt-2 text-center uppercase">We're Getting Married!</p>
        </div>
        <div class="pt-4 text-lg">
          <p class="text-center">{{ getFormattedDate() }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center mt-8 mb-4">
      <div class="text-center cursor-pointer" @click="scrollDown">
        <p class="text-white mb-2">Scroll Down</p>
        <div class="flex justify-center animate-pulse">
          <ChevronDown color="white" size="30" stroke-width="3" />
        </div>
      </div>
    </div>
  </div>

  <!-- Action buttons section -->
  <div class="p-8 md:p-16 lg:py-20 bg-[#f8f4f0]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        @click="toggleLocationsModal"
        class="p-4 bg-[#9e7148] rounded-md cursor-pointer hover:bg-[#cb925c] duration-300">
        <div class="flex items-center gap-2 text-[#eedccc] justify-center py-8">
          <MapPin size="30" color="#eedccc" />
          <p>Wedding Location</p>
        </div>
      </div>
      <div class="p-4 bg-[#9e7148] rounded-md cursor-pointer hover:bg-[#cb925c] duration-300">
        <div class="flex items-center gap-2 text-[#eedccc] justify-center py-8">
          <Logs size="30" color="#eedccc" />
          <p>Programme</p>
        </div>
      </div>
      <div class="p-4 bg-[#9e7148] rounded-md cursor-pointer hover:bg-[#cb925c] duration-300">
        <div class="flex items-center gap-2 text-[#eedccc] justify-center py-8">
          <Camera size="30" color="#eedccc" />
          <p>Wedding Photos</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Quote Section -->
  <div class="p-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex justify-center">
        <img
          src="../assets/images/wedding.svg"
          alt=""
          width="200"
          height="200"
          class="border-[#794022] p-4 rounded-full" />
      </div>
      <div>
        <blockquote class="border-l-4 border-[#794022] pl-4 italic text-lg text-gray-700">
          <p class="text-4xl leading-none m-0">“</p>
          <p class="text-center font-medium">
            I have found the one whom my soul loves, and I will hold onto that love with all my
            heart. In every season, in every circumstance, I will cherish this love, for it is a
            gift from God, a reminder of His everlasting care for me and for us both.
          </p>
          <p class="text-4xl leading-none text-right">”</p>
          <footer class="mt-2 font-semibold text-gray-900">— Song of Solomon 3:4</footer>
        </blockquote>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="p-8 py-16 bg-[#f8f4f0]">
    <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
      <div class="w-[200px] h-[200px] rounded-full overflow-hidden">
        <img src="/main.jpg" alt="" width="200" class="rounded-full" />
      </div>
      <div class="text-center md:text-left">
        <p class="lobster-regular text-3xl text-[#d99937]">
          Thank you for joining us on our big day. <span class="text-[#6b372b]">God Bless You</span>
        </p>
        <p class="text-[#6b372b] leading-10">&copy; Obed weds Abigail, 2025</p>
      </div>
    </div>
  </div>
  <div class="fixed z-[105]">
    <LocationsModal @close-modal="toggleLocationsModal" v-if="showLocationModal" />
  </div>
</template>

<script setup>
import { getFormattedDate, scrollDown } from "@/functions";
import { Camera, ChevronDown, Logs, MapPin } from "lucide-vue-next";
import { ref } from "vue";
import LocationsModal from "@/components/LocationsModal.vue";

const showLocationModal = ref(false);

const toggleLocationsModal = () => {
  showLocationModal.value = !showLocationModal.value;
};
</script>

<style scoped>
.main {
  background-image: url("/main.jpg");
}

.homepage {
  background: linear-gradient(0deg, rgb(45, 12, 5, 0.9), rgba(141, 86, 42, 0.8)), url("/main.jpg");
  margin-top: 0px;
  background-repeat: repeat;
  background-size: contain;
  background-position: top;
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-pulse {
  animation: pulse 1.5s infinite ease-in-out;
}
</style>
