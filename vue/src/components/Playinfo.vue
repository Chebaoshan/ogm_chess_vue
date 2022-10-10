<template>
    <div class="playinfo">
        <div>The next step will be: <span :style="spanStyle">{{getPlayer}}</span></div>
        <div>Hello!</div>
        <div>Rival:</div>
    </div>
</template>
<script>
import { useGameStore } from '../store/gameStore'
export default {
    name: "Playinfo",
    props: {},
    setup() {
        const store = useGameStore()

        return { store }
    },
    data() {
        return {
            spanStyle: {
                "color": "red",
                "font-weight": "bolder",
                "font-size": "20px"
            }
        }
    },
    computed: {
        getPlayer() {
            return this.store.currentPlayer()
        }
    },
}
</script>
<style>
.playinfo {
    position: relative;
    margin-bottom: 50px;
    font-size: "20px";
    font-style: oblique;
    font-weight: unset;
}
</style>