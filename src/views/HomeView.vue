<template>
    <section  id="home" >
        <div class="mt-5" >
            <MainBanner/>
        </div>
        <div class="mt-5" >
            <AboutUs/>
        </div>
    </section>
</template>

<script>
import AboutUs from '@/components/Home/AboutUs.vue';
import MainBanner from '@/components/Home/MainBanner.vue';


export default{
    name:'HomeView',
    components:{
        MainBanner,
        AboutUs
    }

}
</script>