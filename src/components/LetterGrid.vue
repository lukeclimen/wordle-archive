<template>
    <div class="flex flex-col gap-y-2">
        <GridRow v-for="(element, index) in gridRows" :key="index"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import GridRow from './GridRow.vue';

const gridRows = ref([0, 1, 2, 3, 4, 5]);

</script>

<style lang="scss" scoped>

</style>