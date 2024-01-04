<template>
  <div class="h-screen max-w-md mx-auto py-3 flex flex-col justify-center">
    <div class="flex flex-col gap-y-2 pb-3">
      <GridRow
        v-for="(element, index) in gridRowContents"
        :key="index"
        :locked="index < activeRow ? true : false"
        :guess="index === activeRow ? currentRowGuess : element"
      />
    </div>
    <KeyBoard
      @letter-press="handleLetterPress"
      :correct-letters="getCorrectLetterArray"
      :wrong-guess-letters="getwrongGuessLetterArray"
      :wrong-position-letters="getwrongPositionLetterArray"
    />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useGameStore } from './stores/GameStore';
import GridRow from './components/GridRow.vue';
import KeyBoard from './components/KeyBoard.vue';

const gameStore = useGameStore();
const { getCorrectLetterArray, getwrongGuessLetterArray, getwrongPositionLetterArray } =
  useGameStore();

const gridRowContents = computed(() => gameStore.getGuessList);
const activeRow = computed(() => gameStore.getGuessCount);
const currentRowGuess = computed(() => gameStore.getCurrentGuessWord);

const handleLetterPress = (content) => {
  if (content === 'enter') {
    gameStore.checkGuess();
  } else if (content === 'back') {
    gameStore.removeLetterFromGuess();
  } else {
    gameStore.addLetterToGuess(content);
  }
};

onMounted(() => {
  gameStore.fetchWordOfTheDay();
});
</script>
