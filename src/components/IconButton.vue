<template>
  <button
    class="flex justify-center w-10 h-10 bg-gray-100 border border-gray-200 rounded shadow-lg active:translate-y-0.5"
  >
    <component :is="icon" class="h-8 w-8 text-neutral-800 self-center"></component>
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  }
});
</script>

<style scoped></style>
