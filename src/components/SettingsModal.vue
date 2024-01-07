<template>
  <div class="z-50 w-screen h-screen fixed top-0 left-0 smoke">
    <div
      class="flex flex-col w-5/6 lg:max-w-md h-2/3 fixed top-0 bottom-0 left-0 right-0 mx-auto my-auto bg-white rounded-2xl shadow-2xl"
    >
      <div class="w-full border-b-2 border-gray-500 text-xl uppercase text-center py-4">
        <h2>Settings</h2>
        <XMarkIcon
          class="w-8 aspect-square absolute top-0 bottom-0 my-auto right-4 text-gray-800 cursor-pointer"
          @click="$emit('close')"
        />
      </div>
      <ul class="max-w-md w-full p-4">
        <li class="border-b-gray-200 border-b-2 flex flex-row justify-between py-4">
          <h3 class="text-lg">Feedback & Suggestions</h3>
          <ChatBubbleLeftEllipsisIcon
            class="w-6 cursor-pointer"
            @click="console.log('Nobody is listening yet')"
          />
        </li>
        <li class="border-b-gray-200 border-b-2 flex flex-row justify-between py-4">
          <h3 class="text-lg">Report a Bug</h3>
          <a href="https://github.com/lukeclimen/wordle-clone/issues" target="_blank"
            ><BugAntIcon class="w-6 cursor-pointer"
          /></a>
        </li>
        <li class="border-b-gray-200 border-b-2 flex flex-row justify-between py-4">
          <h3 class="text-lg">Upcoming Updates</h3>
          <a href="https://github.com/lukeclimen/wordle-clone/issues" target="_blank">
            <ClipboardDocumentListIcon class="w-6 cursor-pointer" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon, BugAntIcon } from '@heroicons/vue/24/solid';
import {
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentListIcon
} from '@heroicons/vue/24/outline';
defineEmits(['close']);
</script>

<style scoped>
.smoke {
  background-color: rgba(128, 128, 128, 0.7);
}
</style>
