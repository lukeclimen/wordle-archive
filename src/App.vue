<template>
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
import { computed, onMounted, ref } from 'vue';
import { useGameStore } from './stores/GameStore';
import GridRow from './components/GridRow.vue';
import KeyBoard from './components/KeyBoard.vue';
import SiteHeader from './components/SiteHeader.vue';
import SettingsModal from './components/SettingsModal.vue';

const gameStore = useGameStore();
const { getCorrectLetterArray, getwrongGuessLetterArray, getwrongPositionLetterArray } =
  useGameStore();

const gridRowContents = computed(() => gameStore.getGuessList);
const activeRow = computed(() => gameStore.getGuessCount);
const currentRowGuess = computed(() => gameStore.getCurrentGuessWord);
const shortWideScreen = ref(false);
const settingsClosed = ref(true);

const handleLetterPress = (content) => {
  if (content === 'enter') {
    gameStore.checkGuess();
  } else if (content === 'back') {
    gameStore.removeLetterFromGuess();
  } else {
    gameStore.addLetterToGuess(content);
  }
};

const handleToggleSettings = (settingsModalStatus) => {
  settingsClosed.value = settingsModalStatus === 'closed' ? true : false;
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
