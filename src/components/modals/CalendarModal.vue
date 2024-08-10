<template>
  <GenericModal modalTitle="Calendar" @close="$emit('close')" :collapse="true">
    <DatePicker v-model="date" mode="date" />
  </GenericModal>
</template>

<script setup>
import GenericModal from './GenericModal.vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { ref, watch } from 'vue';

defineEmits(['close']);

const date = ref(new Date());
watch(date, async () => {
  console.log(date.value);
});
</script>

<style scoped></style>
