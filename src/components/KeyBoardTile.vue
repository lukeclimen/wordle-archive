<template>
  <button
    @click="$emit('keyClicked', content)"
    class="h-15 rounded-md overflow-hidden opacity-100 active:brightness-75 transition-opacity margin-auto"
    :class="content === 'back' || content === 'enter' ? 'max-w-17' : 'max-w-12'"
  >
    <LetterBackground :letter-state="letterState">
      <template v-if="content === 'enter'">
        <p class="text-black text-sm font-semibold">ENTER</p>
      </template>

      <template v-else-if="content === 'back'">
        <BackspaceIcon class="text-black h-6 w-6" />
      </template>

      <template v-else>
        <BaseLetter
          class="text-xl"
          :colour="hasBeenGuessed ? 'white' : 'black'"
          :letter="content"
        />
      </template>
    </LetterBackground>
  </button>
</template>

<script setup>
import { computed } from 'vue';

import LetterBackground from './LetterBackground.vue';
import BaseLetter from './BaseLetter.vue';

import { BackspaceIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  letterState: {
    type: String,
    required: false,
    default: 'default',
    validator(value) {
      return ['default', 'correctPosition', 'wrongPosition', 'notInWord'].includes(value);
    }
  }
});

const hasBeenGuessed = computed(() => {
  return props.letterState !== 'default';
});
</script>

<style scoped></style>
