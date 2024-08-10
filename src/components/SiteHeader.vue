<template>
  <div
    class="flex flex-row items-center justify-around w-full h-20 border-b-2 border-gray-700 shadow-lg"
  >
    <LogoIcon :isMobile="isMobile" />
    <IconButton :icon="Cog6ToothIcon" @click="$emit('openSettings')" />
  </div>
</template>

<script setup>
import LogoIcon from '../assets/LogoIcon.vue';
import { Cog6ToothIcon } from '@heroicons/vue/24/solid';
import IconButton from './IconButton.vue';
defineProps({
  isMobile: {
    type: Boolean,
    default: true
  }
});
defineEmits('openSettings');
</script>

<style scoped></style>
