<template>
  <div id="app" class="position-relative">
    <!-- <span class="loader"></span> -->
    <div id="loader" class="d-flex align-items-center justify-content-center h-100 " :class="{'hide-loading':showLoading===false}">
      <div>
        <div class="d-flex align-items-center justify-content-center gap-2">
        <div id="container-img">
          <img style="width: 40px; height: 40px;" src="@/assets/img/logo.png" alt="Logo">
        </div>

          <span class="text">
            <div class="d-flex flex-column justify-content-center fw-bold" >
              <span>Go</span>
              <span>Delivery</span>
            </div>
          </span>
      </div>
      <span  id="slogan" >Send, receive, smile!</span>
      </div>
    </div>

 
      <div class="d-none d-md-block mt-2" v-if="ShowHeader" >
        <TopBar />
      </div>
      <div class="mb-lg-5 mb-3" v-if="ShowHeader" >
        <MainHeader />
      </div>
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
    },

    data() {
      return {
        showLoading: true,
      }
    },

    computed:{
      ShowHeader(){
        return this.$route.path==="/login" || this.$route.path==="/signup" ? false : true
      }
    },

    mounted(){
      setTimeout(()=>{
        this.showLoading=false
      },3400)
    }

  }
</script>

<style lang="scss">
  #app {
    scroll-behavior: smooth;
    background-color: var(--background-body);
    height: 100vh;
    font-family: "Montserrat", serif;
    color: var(--colortext-primary);
    overflow-x: hidden;

    #loader {
      background-color: black;
      position: absolute;
      top: 0;
      bottom: 0%;
      right: 0;
      left: 0;
      z-index: 1000;
      transition: transform 0.8s ease;
      #container-img {
        animation-name: animImg;
        animation-duration: 0.5s;
        animation-timing-function: linear;
      }

      @keyframes animImg {
        0% {
          opacity: 0;
          scale: 0.3;
        }

        100% {
          opacity: 1;
          scale: 1;
        }
      }


      .text {
        display: inline-block;
        width: 0;
        overflow: hidden;
        white-space: nowrap;
        animation: revealText 0.5s forwards ease-in-out;
        animation-delay: 1s;
      
      }

      @keyframes revealText {
        0%{
          width: 0;
        }

        100%{
          width: 100%;
        }
      }

      #slogan{
        font-size: 12px;
        animation: slogan 0.5s forwards  ease-in-out;
        animation-delay:2s ;
        display: block;
        opacity: 0;
      }

      
      @keyframes slogan {
        0%{
          transform:translateY(22px);
          opacity: 0;
        }

        100%{
          transform:translateY(0px);
          opacity: 1;
        }
      }

    }

    .hide-loading{
      transform: translateY(-100%);
    }

    // .loader {
    //   width: 100;
    //   height: 100;
    //   display: inline-block;
    //   position: relative;
    // }

    // .loader::after,
    // .loader::before {
    //   content: '';
    //   box-sizing: border-box;
    //   width: -webkit-fill-available;
    //   height: -webkit-fill-available;
    //   border-radius: 50%;
    //   border: 2px solid #FFF;
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   animation: animloader 2s linear infinite;
    // }

    // .loader::after {
    //   animation-delay: 1s;
    // }

    // @keyframes animloader {
    //   0% {
    //     transform: scale(0);
    //     opacity: 1;
    //   }

    //   100% {
    //     transform: scale(1);
    //     opacity: 0;
    //   }
    // }

  }
</style>