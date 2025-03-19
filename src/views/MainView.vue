<template>
<div class="container">
  <Sidebar></Sidebar>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>
<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>
<style>
.container{
  display: flex;
}
.content{
  display: flex;
  padding: 20px;
}
</style>
