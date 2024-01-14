<template>
  <ConfettiBackground
    v-if="gameWon"
    class="absolute h-screen w-full top-0 left-0 -z-50 m-auto"
  />
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
        :id="`row-${index}`"
        :letter-state-array="guessWordLetterState[index]"
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
import { generateGameCopy } from './utils/UtilFunctions';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import GridRow from './components/GridRow.vue';
import KeyBoard from './components/KeyBoard.vue';
import SiteHeader from './components/SiteHeader.vue';
import SettingsModal from './components/SettingsModal.vue';
import EndOfGameModal from './components/EndOfGameModal.vue';
import ConfettiBackground from './components/ConfettiBackground.vue';

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
const guessWordLetterState = computed(() => gameStore.getGuessWordsLetterPlacementArray);
const shortWideScreen = ref(false);
const settingsClosed = ref(true);
const gameOverModalClosed = ref(true);
const gameWon = ref(false);

watch(gameOver, () => {
  if (gameStore.getLostGame) {
    toastNotification(gameStore.wordOfTheDay.toLocaleUpperCase(), 'error');
  } else {
    gameWon.value = true;
    toastNotification('Congratulations!', 'success');
  }
  setTimeout(() => {
    handleToggleEndGameModal('open)');
  }, 3000);
});

const handleLetterPress = (content) => {
  if (gameOver.value) {
    handleToggleEndGameModal('open');
  } else if (content === 'enter') {
    if (gameStore.validateGuessWord()) {
      gameStore.checkGuess();
    } else {
      const currentRow = document.getElementById(`row-${activeRow.value}`);
      currentRow.classList.add('shake');
      setTimeout(() => {
        currentRow.classList.remove('shake');
      }, 1000);
    }
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

const toastNotification = (message, type) => {
  if (type === 'success') {
    toast.success(message, {
      theme: 'colored',
      type: 'default',
      position: 'top-center',
      closeOnClick: false,
      pauseOnHover: false,
      autoClose: 2000,
      hideProgressBar: true,
      transition: 'flip'
    });
  } else if (type === 'error') {
    toast.error(message, {
      theme: 'colored',
      type: 'default',
      position: 'top-center',
      closeOnClick: false,
      pauseOnHover: false,
      autoClose: 2000,
      hideProgressBar: true,
      transition: 'flip',
      style: 'letter-spacing: 2px;'
    });
  } else {
    toast(message, {
      theme: 'colored',
      type: 'default',
      position: 'top-center',
      closeOnClick: false,
      pauseOnHover: false,
      autoClose: 2000,
      hideProgressBar: true,
      transition: 'flip'
    });
  }
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

<style>
.Toastify__toast-container--top-center {
  left: 50%;
  top: 1em;
  transform: translateX(-50%);
}

.Toastify button,
.Toastify .Toastify__toast-icon {
  display: none;
}

.Toastify__toast-container {
  width: fit-content;
  text-align: center;
}

div[data-testid='toast-content'] {
  font-weight: bold;
  font-size: large;
}
</style>
