<template>
  <div
    class="flex justify-center items-center w-15 h-15 border-2 border-gray-500 uppercase font-bold text-4xl"
    v-bind:class="[
      { 'not-locked': !lockedIn },
      { 'not-empty': hasLetter },
      { 'locked-in': lockedIn }
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
  lockedIn: { type: Boolean, default: false }
})

const hasLetter = computed(() => props.letter.length !== 0)
console.log(props.lockedIn)
</script>

<style scoped>
.not-locked {
  border-color: lightgray;
}
.not-locked.not-empty {
  border-color: black;
}
</style>
