<template>
  <div class="flex flex-col w-screen gap-y-2 p-2">
    <ul id="top-row" class="flex flex-row w-full gap-x-1.5 justify-center">
      <li v-for="(letter, index) in topRowKeys" :key="index" class="flex-grow">
        <KeyBoardTile :content="letter" @keyClicked="handleKeyClick" class="w-full" />
      </li>
    </ul>
    <ul id="middle-row" class="flex flex-row gap-x-1.5 justify-center">
      <li v-for="(letter, index) in middleRowKeys" :key="index" class="flex-grow">
        <KeyBoardTile :content="letter" @keyClicked="handleKeyClick" class="w-full" />
      </li>
    </ul>
    <ul id="bottom-row" class="flex flex-row gap-x-1.5 justify-center">
      <li v-for="(letter, index) in bottomRowKeys" :key="index" class="flex-grow">
        <KeyBoardTile :content="letter" @keyClicked="handleKeyClick" class="w-full" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import KeyBoardTile from './KeyBoardTile.vue'

const topRowKeys = ref(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
const middleRowKeys = ref(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])
const bottomRowKeys = ref(['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'back'])

const handleKeyClick = (content) => console.log(content)
</script>

<style lang="scss" scoped></style>
