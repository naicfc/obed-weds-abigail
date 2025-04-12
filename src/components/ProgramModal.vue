<template>
  <fwb-modal @close="closeModal" size="7xl" position="top-center">
    <template #header>
      <div class="flex items-center text-lg">Programme</div>
    </template>

    <template #body>
      <div class="min-h-[65vh] sm:min-h-[70vh] md:min-h-[60vh]">
        <div class="relative min-h-[60vh] w-full shadow-md border rounded-lg overflow-hidden">
          <!-- Fallback layer with higher z-index -->
          <div
            v-if="showFallback"
            class="absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
            <div class="text-center p-6">
              <p class="text-gray-600 mb-4">Unable to display PDF file.</p>
              <a :href="pdfPath" target="_blank" class="text-blue-600 hover:underline">
                Open PDF in new tab
              </a>
            </div>
          </div>

          <!-- PDF iframe -->
          <iframe
            v-else
            :src="`${pdfPath}#navpanes=${sidebarOpen ? '1' : '0'}&toolbar=0&view=FitH`"
            class="w-full h-full"
            title="PDF Viewer"
            style="min-height: 60vh"
            frameborder="0"></iframe>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-between">
        <div>
          <fwb-button
            class="bg-[#591f0b] hover:bg-[#794c22] duration-300 cursor-pointer"
            @click="downloadPDF">
            Download
          </fwb-button>

          <!-- Optional sidebar toggle button
          <fwb-button
            class="bg-gray-200 text-gray-700 hover:bg-gray-300 duration-300"
            @click="toggleSidebar"
          >
            {{ sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar' }}
          </fwb-button> -->
        </div>

        <div class="hidden md:flex">
          <fwb-button @click="closeModal" color="dark">Close</fwb-button>
        </div>
      </div>
    </template>
  </fwb-modal>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { FwbButton, FwbModal } from "flowbite-vue";

const emit = defineEmits(["closeModal"]);
const pdfPath = "/OAA25.pdf";
const sidebarOpen = ref(false);
const showFallback = ref(false);

function closeModal() {
  emit("closeModal");
}

function downloadPDF() {
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "OAA25.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function isMobileScreen() {
  return window.innerWidth <= 768; // You can adjust breakpoint
}

async function checkPDFExists() {
  // Fallback for mobile devices where iframe PDF rendering fails
  if (isMobileScreen()) {
    showFallback.value = true;
    return;
  }

  try {
    const response = await fetch(pdfPath, { method: "HEAD" });
    if (!response.ok) {
      showFallback.value = true;
    }
  } catch {
    showFallback.value = true;
  }
}

onMounted(checkPDFExists);
</script>

<style scoped></style>
