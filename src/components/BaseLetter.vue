<template>
  <p class="uppercase font-bold" :class="[colour === 'white' ? 'text-white' : 'text-black']">
    {{ letter.charAt(0) }}
  </p>
</template>

<script setup>
defineProps({
  colour: {
    type: String,
    required: true,
    validator(value) {
      return ['white', 'black'].includes(value)
    }
  },
  letter: {
    type: String,
    required: false
  }
})
</script>

<style lang="scss" scoped></style>
