<template>
  <EndOfGameModal
    :class="{ hidden: gameOverModalClosed }"
    :games-played="1"
    :games-won="1"
    :streak="1"
    :max-streak="1"
    :guess-distribution="guessDistribution"
    @close="handleToggleEndGameModal('closed')"
    @share="handleShareButtonClick"
  />
  <SiteHeader @openSettings="handleToggleSettings('open')" />
  <SettingsModal
    :class="{ hidden: settingsClosed }"
    @close="handleToggleSettings('closed')"
  />
  <div class="h-screen md:max-w-md lg:max-w-lg mx-auto py-3 flex flex-col justify-center">
    <div class="flex flex-col gap-y-2 pb-3">
      <GridRow
        v-for="(element, index) in gridRowContents"
        :class="shortWideScreen ? 'max-w-xs' : 'max-w-md'"
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
import { computed, onMounted, ref, watch } from 'vue';
import { useGameStore } from './stores/GameStore';
import { generateGameCopy } from './utils';
import GridRow from './components/GridRow.vue';
import KeyBoard from './components/KeyBoard.vue';
import SiteHeader from './components/SiteHeader.vue';
import SettingsModal from './components/SettingsModal.vue';
import EndOfGameModal from './components/EndOfGameModal.vue';

const gameStore = useGameStore();
const { getCorrectLetterArray, getwrongGuessLetterArray, getwrongPositionLetterArray } =
  useGameStore();

const gridRowContents = computed(() => gameStore.getGuessList);
const activeRow = computed(() => gameStore.getGuessCount);
const currentRowGuess = computed(() => gameStore.getCurrentGuessWord);
const gameOver = computed(() => gameStore.gameEnded);
const guessDistribution = computed(() => {
  if (gameStore.gameEnded) {
    if (gameStore.gameLost) {
      return [0, 0, 0, 0, 0, 0];
    } else {
      const numberOfGuesses = gameStore.getGuessCount;
      const distributionArray = [0, 0, 0, 0, 0, 0];
      distributionArray[numberOfGuesses - 1] = 1;
      return distributionArray;
    }
  } else {
    return [0, 0, 0, 0, 0, 0];
  }
});
const shortWideScreen = ref(false);
const settingsClosed = ref(true);
const gameOverModalClosed = ref(true);

watch(gameOver, () => {
  handleToggleEndGameModal('open)');
});

const handleLetterPress = (content) => {
  if (gameOver.value) {
    handleToggleEndGameModal('open');
  } else if (content === 'enter') {
    gameStore.checkGuess();
  } else if (content === 'back') {
    gameStore.removeLetterFromGuess();
  } else {
    gameStore.addLetterToGuess(content);
  }
};

const handleToggleSettings = (modalStatus) => {
  settingsClosed.value = modalStatus === 'closed' ? true : false;
};

const handleToggleEndGameModal = (modalStatus) => {
  gameOverModalClosed.value = modalStatus === 'closed' ? true : false;
};

const handleShareButtonClick = async () => {
  await generateGameCopy(
    gameStore.getWordOfTheDay,
    gameStore.getGuessCount,
    gameStore.getGuessList
  );
};

onMounted(() => {
  gameStore.fetchWordOfTheDay();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (screenWidth < 700 && screenHeight < 2 * screenWidth) {
    shortWideScreen.value = true;
  }
});
</script>
