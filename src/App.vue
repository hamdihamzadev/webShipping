<template>
  <div id="app">
    <TopBar />
    <div class="mb-5" ><MainHeader /></div>
    <router-view />
  </div>
</template>

<script>
  import MainHeader from './components/global/MainHeader.vue';
  import TopBar from './components/global/TopBar.vue';

  export default {
    name: 'App',
    components: {
      MainHeader,
      TopBar,
    }

  }
</script>

<style lang="scss">
  #app {
    background-color: var(--background-body);
    height: 100vh;
    font-family: "Montserrat", serif;
    color: var(--colortext-primary);
    overflow-x: hidden;


  }
</style>