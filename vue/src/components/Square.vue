<template>
    <div class="square" @click="handleClick">
        {{cell_value}}
    </div>
</template>
<script>
import { useGameStore } from '../store/gameStore'
import { winner } from '../utils/winner'
export default {
    name: "Square",
    props: ['position'],
    setup() {
        const store = useGameStore()
        return { store }
    },
    data() {
        return {
            pos: this.position,
            cell_value: null,
        }
    },
    watch: {
        getResult() {
            this.cell_value = null

            console.log(this.store.history)
        }
    },
    computed: {
        getPlayer() {
            return this.store.currentPlayer()
        },
        getCount() {
            return this.store.count
        },
        getResult() {
            return this.store.result;
        },
        getHistory() {
            return this.store.history;
        }
    },
    methods: {
        handleClick() {
            const a = this.store.getCount() % 2 == 0 ? 'X' : 'O'
            if (this.cell_value === null) {
                this.cell_value = a
                this.store.renewHistory(this.pos)
                this.store.addCount();
            }
            const res = winner(this.getHistory)
            if (res.result) {
                alert(`${res.winner}`)
                this.store.setResult();
                setTimeout(() => { this.store.$reset(); }, 10)

            }
        }
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