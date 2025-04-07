<template>
  <fwb-modal @close="closeModal" size="5xl">
    <template #header>
      <div class="flex items-center text-lg">Terms of Service</div>
    </template>
    <template #body>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, deserunt?</p>
      </div>
    </template>
  </fwb-modal>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { FwbButton, FwbModal } from "flowbite-vue";

const emit = defineEmits(["closeModal"]);

function closeModal() {
  emit("closeModal");
}
onBeforeMount(() => {
  console.log("Modal setup running...");
});
</script>
