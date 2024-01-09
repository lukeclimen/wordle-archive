<template>
  <div class="z-50 w-screen h-screen fixed top-0 left-0 smoke">
    <div
      class="flex flex-col w-5/6 lg:max-w-md h-2/3 fixed top-0 bottom-0 left-0 right-0 mx-auto my-auto bg-white rounded-2xl shadow-2xl"
    >
      <div class="w-full border-b-2 border-gray-500 text-xl uppercase text-center py-4">
        <h2>Statistics</h2>
        <XMarkIcon
          class="w-8 aspect-square absolute top-0 bottom-0 my-auto right-4 text-gray-800 cursor-pointer"
          @click="$emit('close')"
        />
      </div>
      <div class="flex flex-col m-8">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
defineEmits(['close']);
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
