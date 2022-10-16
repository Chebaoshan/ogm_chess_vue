<template>
    <div class="Navi">
        <router-link :to="{name:'login'}">login page</router-link>
        <router-link :to="{name:'game'}">game page</router-link>
    </div>
    <div class="mainContent">
        <router-view></router-view>
    </div>
</template>
  
<script setup>

</script>
<style>
.Navi {
    display: flex;
    justify-content: center;
}

a {
    position: relative;
    margin-left: 50px;
}
</style>
  