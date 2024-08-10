<template>
  <GenericModal modalTitle="Calendar" @close="$emit('close')"></GenericModal>
</template>

<script setup>
import GenericModal from './GenericModal.vue';

defineEmits(['close']);
</script>

<style scoped></style>
