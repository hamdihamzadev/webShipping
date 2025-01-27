<template>
  <div id="app">
    <span class="loader"></span>
    <b-container class="px-5">
      <TopBar />
      <div class="mb-5">
        <MainHeader />
      </div>
      <router-view />
    </b-container>
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

    .loader {
      width: 100;
      height: 100;
      display: inline-block;
      position: relative;
    }

    .loader::after,
    .loader::before {
      content: '';
      box-sizing: border-box;
      width: -webkit-fill-available;
      height: -webkit-fill-available;
      border-radius: 50%;
      border: 2px solid #FFF;
      position: absolute;
      left: 0;
      top: 0;
      animation: animloader 2s linear infinite;
    }

    .loader::after {
      animation-delay: 1s;
    }

    @keyframes animloader {
      0% {
        transform: scale(0);
        opacity: 1;
      }

      100% {
        transform: scale(1);
        opacity: 0;
      }
    }

  }
</style>