<template>
  <span class="flex flex-row w-full max-w-lg gap-x-2 px-2 mx-auto justify-center"
    ><LetterTile
      v-for="(letter, index) in lettersInGuess"
      :key="index"
      :content="letter"
      :letter-state="locked ? letterStateArray[index] : null"
  /></span>
</template>

<script setup>
import { computed } from 'vue';
import LetterTile from './LetterTile.vue';
import { useGameStore } from '../stores/GameStore';

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
  }
});

const gameStore = useGameStore();

const lettersInGuess = computed(() => {
  let letterArray = props.guess;
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

const letterStateArray = computed(() => {
  const letterStateArray = [];
  const guessLetterArray = props.guess.split('');
  guessLetterArray.forEach((letter, index) => {
    if (gameStore.wordOfTheDay.includes(letter)) {
      if (gameStore.wordOfTheDay[index] === letter) {
        letterStateArray.push('correct');
      } else {
        letterStateArray.push('wrongPosition');
      }
    } else {
      letterStateArray.push('notInWord');
    }
  });
  return letterStateArray;
});
</script>

<style scoped></style>
