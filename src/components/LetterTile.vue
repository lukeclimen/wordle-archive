<template>
  <div
    class="flex justify-center items-center w-15 h-15 border-2 border-gray-500 uppercase font-bold text-4xl"
    v-bind:class="[
      { 'not-locked': !guess },
      { 'not-empty': hasLetter },
      { 'correct-position': guess === 'correct' },
      { 'wrong-position': guess === 'wrongPosition' },
      { absent: guess === 'notInWord' }
    ]"
  >
    {{ letter.charAt(0) }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  letter: {
    type: String,
    default: ''
  },
  lockedIn: { type: Boolean, default: false },
  guess: {
    type: String,
    required: false,
    validator(value) {
      return ['correct', 'wrongPosition', 'notInWord'].includes(value)
    }
  }
})

const hasLetter = computed(() => props.letter.length !== 0)
</script>

<style scoped>
.not-locked {
  border-color: lightgray;
}
.not-locked.not-empty {
  border-color: black;
}
.correct-position,
.wrong-position,
.absent {
  color: white;
}

.correct-position {
  background-color: #538d4e;
  border-color: #538d4e;
}

.wrong-position {
  background-color: #c9b458;
  border-color: #c9b458;
}

.absent {
  background-color: #787c7e;
  border-color: #787c7e;
}
</style>
