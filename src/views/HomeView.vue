<template>
    <section  id="home" >
        <div class="mt-5" >
            <MainBanner/>
        </div>
        <div class="mt-5" >
            <AboutUs/>
        </div>
        <div class="mt-5" >
            <OurServices/>
        </div>
    </section>
</template>

<script>
import AboutUs from '@/components/Home/AboutUs.vue';
import MainBanner from '@/components/Home/MainBanner.vue';
import OurServices from '@/components/Home/OurServices.vue';



export default{
    name:'HomeView',
    components:{
        MainBanner,
        AboutUs,
        OurServices
    }

}
</script>