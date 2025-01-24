<template>
    <section id="aboutUs">
        <b-container class="mb-5">
            <b-row>
                <b-col cols="12" lg="6" >
                    <b-row class="g-0">
                        <b-col md="4">
                            <div id="container-title" class="position-relative">
                                <TitleSection :title-part1="'About'" :title-part2="'Us'" />
                                <div id="radius-btm-right" class="position-absolute"></div>
                            </div>
                        </b-col>
                        <b-col md="8">
                            <div id="item2"></div>
                        </b-col>
                        <b-col cols="12">
                            <div id="item3">
                                <p class="m-0">
                                    Welcome to our platform! We are dedicated to providing a simple and efficient
                                    service for
                                    tracking your orders. Our mission is to offer modern and reliable tools that make
                                    tracking
                                    your packages transparent and accessible, wherever you are. With a passionate team
                                    and
                                    innovative technology .
                                </p>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" lg="6" >
                    <div id="container-img" class="d-flex align-items-center justify-content-end position-relative">
                        <div class="position-absolute z-1" id="img-topology" >
                            <img :src="require('@/assets/img/Topology-1.png')"  alt="">
                        </div>
                        <div class="position-absolute z-1" id="blur">
                            <BlurBg />
                        </div>
                        <div id="back-img" class="z-3"><img :src="require('@/assets/img/imgAbout.png')" alt=""></div>
                    </div>
                </b-col>
            </b-row>

        </b-container>

    </section>
</template>

<script>
    import BlurBg from '../global/BlurBg.vue';
    import TitleSection from '../TitleSection.vue';


    export default {
        name: 'AboutUs',
        components: {
            TitleSection,
            BlurBg
        }
    }
</script>

<style lang="scss" scoped>
    #aboutUs {

        #container-title {
            background-color: var(--background-body);
            height: 100px;
            padding: 0px 10px 10px 0px;

            #radius-btm-right {
                background-color: var(--background-section);
                width: 10px;
                height: 10px;
                right: 0;
                bottom: 0;

                &::after {
                    content: '';
                    background-color: var(--background-body);
                    width: inherit;
                    display: block;
                    height: inherit;
                    border-bottom-right-radius: 16px;
                }
            }
        }

        #item2 {
            background-color: var(--background-section);
            height: 100px;
            border-top-right-radius: var(--BRadius-Section);
            border-top-left-radius: var(--BRadius-Section);
        }

        #item3 {
            background-color: var(--background-section);
            height: 350px;
            border-top-left-radius: var(--BRadius-Section);
            border-radius: var(--BRadius-Section) 0 var(--BRadius-Section) var(--BRadius-Section);
            padding: var(--paddingInline-section);
            p{
                text-align: justify;
            }
        }


        #container-img {
            background-color: var(--background-section);
            height: 450px;
            border-radius: var(--BRadius-Section);
            padding: var(--paddingInline-section);

            #img-topology{
                top: 73px;
    width: 182px;
    left: 100px;
    opacity: 0.6;
            }

            #blur {
                left: 57px;
                top: 0;
                opacity: 0.8;
                rotate: 108deg;
            }

            #back-img {
                height: fit-content;
            }

        }

    }
</style>