<template>
  <div id="app">
    <!-- <keep-alive exclude="Detail"> -->
      <!-- 使用exlude需谨慎，因为有可能Detail组件或子组件里在activated里有些操作不会发生发生bug -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<style>

</style>
