<template>
  <div
    class="flex justify-center items-center"
    :class="[
      { 'not-locked': letterState === 'notLocked' },
      { correct: letterState === 'correct' },
      { 'wrong-position': letterState === 'wrongPosition' },
      { 'not-in-word': letterState === 'notInWord' },
      { default: letterState === 'default' }
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
      return ['default', 'notLocked', 'correct', 'wrongPosition', 'notInWord'].includes(
        value
      );
    }
  }
});
</script>

<style scoped>
.default,
.not-locked,
.correct,
.wrong-position,
.not-in-word {
  width: 100%;
  height: 100%;
}
.not-locked {
  background-color: white;
  transition: all 0s 0.6s;
}

.correct {
  background-color: #538d4e;
  transition: background-color 0s 0.6s;
}

.wrong-position {
  background-color: #c9b458;
  transition: background-color 0s 0.6s;
}

.not-in-word {
  background-color: #787c7e;
  transition: background-color 0s 0.6s;
}

.default {
  background-color: #d3d6da;
  transition: background-color 0s 0.6s;
}

.letter-1 > div {
  transition-delay: 0.375s;
}

.letter-2 > div {
  transition-delay: 0.875s;
}

.letter-3 > div {
  transition-delay: 1.375s;
}

.letter-4 > div {
  transition-delay: 1.875s;
}

.letter-5 > div {
  transition-delay: 2.375s;
}
</style>
