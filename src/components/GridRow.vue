<template>
  <span class="flex flex-row gap-x-2"
    ><LetterTile v-for="(letter, index) in lettersInGuess" :key="index" :content="letter"
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
</script>

<style lang="scss" scoped></style>
