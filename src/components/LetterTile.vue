<template>
  <div
    class="flex justify-center items-center w-full aspect-square box-content border-2 border-gray-500 uppercase"
    :class="[
      !letterState && content ? 'not-empty' : '',
      letterState ? 'flip' : '',
      letterState
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

.flip {
  animation: flip-vertical 0.75s forwards;
  transform-origin: center;
}

@keyframes flip-vertical {
  0% {
    rotate: x 0deg;
  }
  50% {
    rotate: x 90deg;
  }
  100% {
    rotate: x 0deg;
  }
}

.wrongPosition {
  transition-property: border-color;
  border-color: #c9b458;
}

.correct {
  transition-property: border-color;
  border-color: #538d4e;
}

.notInWord {
  transition-property: border-color;
  border-color: #787c7e;
}

.letter-1 {
  animation-delay: 0s;
  transition-delay: 0.375s;
}

.letter-2 {
  animation-delay: 0.5s;
  transition-delay: 0.875s;
}

.letter-3 {
  animation-delay: 1s;
  transition-delay: 1.375s;
}

.letter-4 {
  animation-delay: 1.5s;
  transition-delay: 1.875s;
}

.letter-5 {
  animation-delay: 2s;
  transition-delay: 2.375s;
}
</style>
