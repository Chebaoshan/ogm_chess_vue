<template>
    <div :class="data.playinfo">
        <div>The next step will be: <span :style="data.spanStyle">{{getPlayer}}</span></div>
        <div>Hello!</div>
        <div>Rival:</div>
    </div>
</template>
<script setup>
import { useGameStore } from '../store/store'
import { computed, reactive } from 'vue'
const store = useGameStore()
const getPlayer = computed(() => { return store.currentPlayer() })
const data = reactive({
    spanStyle: {
        "color": "red",
        "font-weight": "bolder",
        "font-size": "20px"
    },
    playinfo: {
        'position': 'relative',
        'margin-bottom': '50px',
        'font-size': "20px",
        'font-style': 'oblique',
        'font-weight': 'unset'
    }
})
</script>
