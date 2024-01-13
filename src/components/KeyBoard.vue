<template>
  <div class="flex flex-col w-full gap-y-2 p-2">
    <ul id="top-row" class="flex flex-row w-full gap-x-1.5 justify-center">
      <li v-for="(letter, index) in topRowKeys" :key="index" class="flex-grow">
        <KeyBoardTile
          :content="letter"
          @keyClicked="handleKeyClick"
          class="w-full"
          :letter-state="lookupState(letter)"
        />
      </li>
    </ul>
    <ul id="middle-row" class="flex flex-row gap-x-1.5 justify-center px-4">
      <li v-for="(letter, index) in middleRowKeys" :key="index" class="flex-grow">
        <KeyBoardTile
          :content="letter"
          @keyClicked="handleKeyClick"
          class="w-full"
          :letter-state="lookupState(letter)"
        />
      </li>
    </ul>
    <ul id="bottom-row" class="flex flex-row gap-x-1.5 justify-center">
      <li v-for="(letter, index) in bottomRowKeys" :key="index" class="flex-grow">
        <KeyBoardTile
          :content="letter"
          @keyClicked="handleKeyClick"
          class="w-full"
          :letter-state="lookupState(letter)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import KeyBoardTile from './KeyBoardTile.vue';

const props = defineProps({
  correctLetters: {
    type: Array,
    required: false,
    default: () => []
  },
  wrongPositionLetters: {
    type: Array,
    required: false,
    default: () => []
  },
  wrongGuessLetters: {
    type: Array,
    required: false,
    default: () => []
  }
});
const emit = defineEmits(['letterPress']);

const topRowKeys = ref(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
const middleRowKeys = ref(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);
const bottomRowKeys = ref(['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'back']);

const handleKeyClick = (content) => emit('letterPress', content);

const lookupState = (letter) => {
  if (props.correctLetters.includes(letter)) {
    return 'correctPosition';
  } else if (props.wrongPositionLetters.includes(letter)) {
    return 'wrongPosition';
  } else if (props.wrongGuessLetters.includes(letter)) {
    return 'notInWord';
  } else {
    return 'default';
  }
};
</script>

<style lang="scss" scoped></style>
