<template>
  <GenericModal modalTitle="Calendar" @close="$emit('close')" :collapse="true">
    <DatePicker v-model="date" mode="date" :disabled-dates="disabledDates" />
  </GenericModal>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import GenericModal from './GenericModal.vue';

const emit = defineEmits(['close', 'dateSelected']);
const todayDate = new Date();
const date = ref(todayDate);
const disabledDates = computed(() => {
  const firstWordleDate = new Date('2021-06-19');
  const tomorrowDate = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() + 1
  );
  const dateRange = [
    {
      end: firstWordleDate
    },
    {
      start: tomorrowDate
    }
  ];
  return dateRange;
});

watch(date, async () => {
  emit('dateSelected', date.value);
});
</script>

<style>
.vc-bordered {
  border: none;
}
</style>
