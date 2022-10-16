<template>
    <div class="square" @click="handleClick">
        {{cell}}
    </div>
</template>
<script setup>
import { useGameStore } from '../store/store'
import { winner } from '../utils/winner'
import { watch, reactive, toRefs, computed } from 'vue'
const props = defineProps(['position'])
const store = useGameStore()
const data = reactive({ pos: props.position, cell: null })
const getResult = computed(() => { return store.result })
const getHistory = computed(() => { return store.history })
const { pos, cell } = toRefs(data)
watch([getResult], () => {
    cell.value = null
})
const handleClick = () => {
    const current_value = store.getCount() % 2 == 0 ? 'X' : 'O'
    if (cell.value === null) {
        cell.value = current_value
        store.renewHistory(pos)
        store.addCount();
    }
    const res = winner(getHistory.value)
    if (res.result) {
        alert(`${res.winner}`)
        store.setResult();
        setTimeout(() => { store.$reset(); }, 10)
    }
}
</script>
<style scoped>
.square {
    display: inline-block;
    height: 100px;
    width: 100px;
    border: solid 2px black;
    font-size: 50px;
    line-height: 100px;
    text-align: center;
}

.square:hover {
    color: red;
    border-color: red;
}
</style>