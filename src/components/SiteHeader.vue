<template>
  <div
    class="flex flex-row items-center justify-around w-full h-20 border-b-2 border-gray-700 shadow-lg"
  >
    <LogoIcon :isMobile="isMobile" />
    <div class="flex flex-row gap-x-4">
      <IconButton :icon="CalendarDaysIcon" @click="$emit('openCalendar')" />
      <IconButton :icon="Cog6ToothIcon" @click="$emit('openSettings')" />
    </div>
  </div>
</template>

<script setup>
import LogoIcon from '../assets/LogoIcon.vue';
import { Cog6ToothIcon } from '@heroicons/vue/24/solid';
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import IconButton from './IconButton.vue';
defineProps({
  isMobile: {
    type: Boolean,
    default: true
  }
});
defineEmits(['openSettings', 'openCalendar']);
</script>

<style scoped></style>
