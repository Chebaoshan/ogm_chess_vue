<template>
    <div class="Board">
        <div>
            <Playinfo></Playinfo>
            <div class="row">
                <Square :position="position[0]"></Square>
                <Square :position="position[1]"></Square>
                <Square :position="position[2]"></Square>
            </div>
            <div class="row">
                <Square :position="position[3]"></Square>
                <Square :position="position[4]"></Square>
                <Square :position="position[5]"></Square>
            </div>
            <div class="row">
                <Square :position="position[6]"></Square>
                <Square :position="position[7]"></Square>
                <Square :position="position[8]"></Square>
            </div>
            <Feet></Feet>
        </div>
    </div>
</template>
<script>
import Square from './Square.vue'
import Playinfo from './Playinfo.vue';
import Feet from './Feet.vue';
export default {
    components: { Square, Playinfo, Feet },
    name: "Board",
    data() {
        return {
            "position": [0, 1, 2, 3, 4, 5, 6, 7, 8]
        }
    }
}
</script>
<style>
.row {
    display: flex;
    flex: 1;
}

.Board {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 150px;
}
</style>