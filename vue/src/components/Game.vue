<template>
    <div class="Game">
        <Board></Board>
    </div>
</template>
<script setup>
import Board from './Board.vue';
</script>

<style scoped>
.Game {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%
}
</style>