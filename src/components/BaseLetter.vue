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
  transition-property: color;
}
.black {
  color: black;
  transition-property: color;
}

.letter-1 p {
  transition-delay: 0.375s;
}

.letter-2 p {
  transition-delay: 0.875s;
}

.letter-3 p {
  transition-delay: 1.375s;
}

.letter-4 p {
  transition-delay: 1.875s;
}

.letter-5 p {
  transition-delay: 2.375s;
}
</style>
