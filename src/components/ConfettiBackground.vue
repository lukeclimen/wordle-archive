<template>
  <ConfettiExplosion :stageHeight="screenHeight" :stageWidth="screenWidth" />
</template>

<script setup>
import ConfettiExplosion from 'vue-confetti-explosion';

const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
</script>
