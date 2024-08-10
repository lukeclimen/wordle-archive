<template>
  <GenericModal modalTitle="Settings" @close="$emit('close')">
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
  </GenericModal>
</template>

<script setup>
import { BugAntIcon } from '@heroicons/vue/24/solid';
import {
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentListIcon
} from '@heroicons/vue/24/outline';
import GenericModal from './GenericModal.vue';

defineEmits(['close']);
</script>

<style scoped>
.smoke {
  background-color: rgba(128, 128, 128, 0.7);
}
</style>
