<template>
  <div
    class="flex justify-center items-center w-15 h-15 border-2 border-gray-500 uppercase"
    v-bind:class="[
      { 'not-empty': hasLetter },
      { 'correct-position': guess === 'correct' },
      { 'wrong-position': guess === 'wrongPosition' },
      { absent: guess === 'notInWord' }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  hasLetter: {
    type: Boolean,
    default: false
  },
  guess: {
    type: String,
    required: false,
    validator(value) {
      return ['correct', 'wrongPosition', 'notInWord'].includes(value)
    }
  }
})
</script>

<style scoped>
.not-empty {
  border-color: black;
}

.correct-position,
.wrong-position,
.absent {
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: scaleX(180deg);
}

.correct-position {
  border-color: #538d4e;
}

.wrong-position {
  border-color: #c9b458;
}

.absent {
  border-color: #787c7e;
}
</style>
