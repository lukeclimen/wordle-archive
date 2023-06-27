<template>
  <div class="w-15 h-15 border-2 border-black uppercase">{{ letter.charAt(0) }}</div>
</template>

<script setup>
defineProps({
  letter: {
    type: String,
    required: false,
    default: ''
  }
})
</script>
