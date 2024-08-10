<template>
  <div class="z-50 w-screen h-screen fixed top-0 left-0 smoke">
    <div
      class="flex flex-col lg:max-w-md fixed top-0 bottom-0 left-0 right-0 mx-auto my-auto bg-white rounded-2xl shadow-2xl"
      :class="[collapse ? 'w-fit h-fit' : 'w-5/6 h-2/3']"
    >
      <div class="w-full border-b-2 border-gray-500 text-xl uppercase text-center py-4">
        <h2>{{ modalTitle }}</h2>
        <XMarkIcon
          class="w-8 aspect-square absolute top-0 bottom-0 my-auto right-4 text-gray-800 cursor-pointer"
          @click="$emit('close')"
        />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid';
defineProps({
  modalTitle: {
    type: String,
    required: true
  },
  collapse: {
    type: Boolean,
    required: false,
    default: false
  }
});
defineEmits(['close']);
</script>

<style scoped></style>
