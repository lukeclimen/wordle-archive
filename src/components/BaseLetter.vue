<template>
  <p
    class="uppercase font-bold w-5"
    v-if="letter"
    :class="[colour === 'white' ? 'white' : 'black']"
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

<style scoped>
.white {
  color: white;
  transition: color 0s 0.5s;
}
.black {
  color: black;
}
</style>
