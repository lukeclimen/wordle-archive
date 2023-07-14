<template>
  <div class="h-screen max-w-md mx-auto py-3 flex flex-col justify-center">
    <div class="flex flex-col gap-y-2 pb-3">
        <GridRow v-for="(element, index) in gridRows" :key="index"/>
    </div>
    <KeyBoard />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import GridRow from './components/GridRow.vue';
import KeyBoard from './components/KeyBoard.vue';
const gridRows = ref([0, 1, 2, 3, 4, 5]);
</script>
