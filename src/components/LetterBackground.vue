<template>
  <div
    class="flex justify-center items-center"
    :class="[
      { 'not-locked': letterState === 'notLocked' },
      { correct: letterState === 'correct' },
      { 'wrong-position': letterState === 'wrongPosition' },
      { 'not-in-word': letterState === 'notInWord' }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  letterState: {
    type: String,
    required: false,
    default: 'notLocked',
    validator(value) {
      return ['notLocked', 'correct', 'wrongPosition', 'notInWord'].includes(value)
    }
  }
})
</script>

<style scoped>
.not-locked,
.correct,
.wrong-position,
.not-in-word {
  width: 100%;
  height: 100%;
}
.not-locked {
  background-color: white;
}

.correct {
  background-color: #538d4e;
}

.wrong-position {
  background-color: #c9b458;
}

.not-in-word {
  background-color: #787c7e;
}
</style>
