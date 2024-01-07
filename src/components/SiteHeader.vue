<template>
  <div
    class="flex flex-row items-center justify-around w-full h-20 border-b-2 border-gray-700 shadow-lg"
  >
    <LogoIcon />
    <Cog6ToothIcon class="cursor-pointer w-10 aspect-square" />
  </div>
</template>

<script setup>
import LogoIcon from '../assets/LogoIcon.vue';
import { Cog6ToothIcon } from '@heroicons/vue/24/solid';
</script>

<style scoped></style>
