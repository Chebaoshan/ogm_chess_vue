<template>
    <div class="feet">
        <button @click="reset">Play Again</button>
        <button @click="quit">Game Over</button>
    </div>
</template>
<script>
import { useGameStore } from '../store/gameStore'
export default {
    name: "feet",
    setup() {
        const store = useGameStore()

        return { store }
    },
    data() {
        return {}
    },
    methods: {
        quit() {
            this.store.$reset()
            this.$router.push({ name: 'login' })
        },
        reset() {
            this.store.result = true
            setTimeout(() => { this.store.$reset(); }, 10)
        }
    }
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