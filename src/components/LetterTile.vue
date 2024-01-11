<template>
  <div
    class="flex justify-center items-center w-full aspect-square border-2 border-gray-500 uppercase"
    v-bind:class="[
      { 'not-empty': content },
      { 'correct-position': letterState === 'correct' },
      { 'wrong-position': letterState === 'wrongPosition' },
      { absent: letterState === 'notInWord' }
    ]"
  >
    <LetterBackground :letter-state="letterState">
      <BaseLetter
        v-if="content || content !== ''"
        class="flex text-4xl justify-center"
        :colour="letterState ? 'white' : 'black'"
        :letter="content"
      />
    </LetterBackground>
  </div>
</template>

<script setup>
import LetterBackground from './LetterBackground.vue';
import BaseLetter from './BaseLetter.vue';

defineProps({
  content: {
    type: String,
    required: false
  },
  letterState: {
    type: String,
    required: false,
    validator(value) {
      return ['correct', 'wrongPosition', 'notInWord'].includes(value);
    }
  }
});
</script>

<style scoped>
.not-empty {
  border-color: black;
}

.correct-position,
.wrong-position,
.absent {
  animation: flip-vertical 0.8s forwards;
  transform-origin: center;
}

@keyframes flip-vertical {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

.correct-position {
  border-color: #538d4e;
}

.wrong-position {
  border-color: #c9b458;
}

.absent {
  border-color: #787c7e;
}
</style>
