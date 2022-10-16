<template>
    <div class="feet">
        <button @click="reset">Play Again</button>
        <button @click="quit">Game Over</button>
    </div>
</template>
<script setup>
import { useGameStore } from '../store/store'
import { useRouter } from 'vue-router'
const store = useGameStore()
const router = useRouter()
const quit = () => {
    store.$reset()
    router.push({ name: 'login' })
}
const reset = () => {
    store.result = true
    setTimeout(() => { store.$reset(); }, 10)
}
</script>
<style>
.feet {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    margin-top: 30px;
}
</style>