<template>
  <span class="flex flex-row gap-x-2 mx-auto justify-center"
    ><LetterTile
      v-for="(letter, index) in lettersInGuess"
      :key="index"
      :content="letter"
      :letter-state="setLetterState(index)"
  /></span>
</template>

<script setup>
import { computed } from 'vue';
import LetterTile from './LetterTile.vue';

const props = defineProps({
  guess: {
    type: String,
    required: false,
    default: ''
  },
  locked: {
    type: Boolean,
    required: false,
    default: false
  },
  correctLetters: {
    type: Array,
    required: false,
    default: () => []
  },
  wrongPositionLetters: {
    type: Array,
    required: false,
    default: () => []
  }
});

const lettersInGuess = computed(() => {
  let letterArray = [];
  if (props.guess.length === 5) {
    letterArray = props.guess.split('');
  } else if (props.guess.length > 5) {
    letterArray = props.guess.split('').slice(0, 4);
  } else {
    letterArray = props.guess.split('');
    while (letterArray.length < 5) {
      letterArray.push('');
    }
  }
  return letterArray;
});

const setLetterState = (index) => {
  if (props.locked) {
    if (props.correctLetters.includes(index)) {
      return 'correct';
    } else if (props.wrongPositionLetters.includes(index)) {
      return 'wrongPosition';
    } else {
      return 'notInWord';
    }
  } else return;
};
</script>

<style lang="scss" scoped></style>
