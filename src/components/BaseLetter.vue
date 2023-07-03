<template>
  <p
    class="uppercase font-bold w-5"
    v-if="letter"
    :class="[colour === 'white' ? 'text-white' : 'text-black']"
  >
    {{ letter.charAt(0) }}
  </p>
</template>

<script setup>
defineProps({
  colour: {
    type: String,
    required: false,
    default: 'white',
    validator(value) {
      return ['white', 'black'].includes(value);
    }
  },
  letter: {
    type: String,
    required: false
  }
});
</script>

<style lang="scss" scoped></style>
