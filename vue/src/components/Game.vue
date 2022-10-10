<template>
    <div class="Game">
        <Board></Board>
    </div>
</template>
<script>
import Board from './Board.vue';
export default {
    data() {
        return {};
    },
    methods: {},
    components: { Board }
}
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