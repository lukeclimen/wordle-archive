<template>
  <GenericModal modalTitle="Statistics" @close="$emit('close')">
    <div class="flex flex-col m-8 h-full">
      <div class="flex flex-row justify-between py-8">
        <div class="flex flex-col items-center">
          <p class="text-2xl">{{ gamesPlayed }}</p>
          <p class="text-xs">Played</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-2xl">{{ winPercentage }}</p>
          <p class="text-xs">Win %</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-2xl">{{ streak }}</p>
          <p class="text-xs">Current Streak</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-2xl">{{ maxStreak }}</p>
          <p class="text-xs">Max Streak</p>
        </div>
      </div>
      <div class="flex flex-col gap-y-2 text-xs">
        <h4 class="text-base font-normal">Guess Distribution</h4>
        <div
          v-for="(guess, index) in guessDistribution"
          :key="index"
          class="flex flex-row gap-x-2"
        >
          <p class="font-bold">{{ index }}</p>
          <div class="w-full bg-green-700 text-white text-right pr-2 font-bold">
            {{ guess }}
          </div>
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center">
        <button
          class="flex bg-green-700 w-3/4 rounded-full h-fit text-xl font-bold text-white py-2 shadow-lg justify-center items-center gap-x-4"
        >
          Share
          <ShareIcon class="w-5 stroke-2" @click="$emit('share')" />
        </button>
      </div></div
  ></GenericModal>
</template>

<script setup>
import { ref } from 'vue';
import { ShareIcon } from '@heroicons/vue/24/outline';
import GenericModal from './GenericModal.vue';

defineEmits(['close', 'share']);
const props = defineProps({
  gamesPlayed: {
    type: Number,
    required: true
  },
  gamesWon: {
    type: Number,
    required: true
  },
  streak: {
    type: Number,
    required: true
  },
  maxStreak: {
    type: Number,
    required: true
  },
  guessDistribution: {
    type: Array,
    required: true
  }
});

const winPercentage = ref((100 * props.gamesPlayed) / props.gamesWon);
</script>

<style scoped>
.smoke {
  background-color: rgba(128, 128, 128, 0.7);
}
</style>
