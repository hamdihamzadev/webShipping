<template>
    <section id="home">
        <b-row class="g-4">
            <b-col cols="12">
                <MainBanner />
            </b-col>
                <b-col cols="12" id="AboutUs">
                    <AboutUs />
                </b-col>
            <b-col cols="12">
                <OurServices />
            </b-col>
            <b-col cols="12">
                <HowitWork />
            </b-col>
            <b-col cols="12">
                <ContactUs />
            </b-col>
            <b-col cols="12">
                <AskedQuestion />
            </b-col>
            <b-col cols="12">
                <AppFooter />
            </b-col>
        </b-row>
    </section>
</template>

<script>
    import AppFooter from '@/components/global/AppFooter.vue';
    import AboutUs from '@/components/Home/AboutUs.vue';
    import AskedQuestion from '@/components/Home/AskedQuestion.vue';
    import ContactUs from '@/components/Home/ContactUs.vue';
    import HowitWork from '@/components/Home/HowitWork.vue';
    import MainBanner from '@/components/Home/MainBanner.vue';
    import OurServices from '@/components/Home/OurServices.vue';

    export default {
        name: 'HomeView',
        components: {
            MainBanner,
            AboutUs,
            OurServices,
            HowitWork,
            ContactUs,
            AskedQuestion,
            AppFooter

        }

    }
</script>

