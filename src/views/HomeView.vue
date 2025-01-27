<template>
    <section  id="home" >
            <b-row class="g-5" >
                <b-col cols="12" ><MainBanner/></b-col>
                <b-col cols="12" ><AboutUs/></b-col>
                <b-col cols="12" ><OurServices/></b-col>
                <b-col cols="12" ><HowitWork/></b-col>
            </b-row>
       

    </section>
</template>

<script>
import AboutUs from '@/components/Home/AboutUs.vue';
import HowitWork from '@/components/Home/HowitWork.vue';
import MainBanner from '@/components/Home/MainBanner.vue';
import OurServices from '@/components/Home/OurServices.vue';





export default{
    name:'HomeView',
    components:{
        MainBanner,
        AboutUs,
        OurServices,
        HowitWork
    }

}
</script>