<template>
    <section id="aboutUs">
        <b-container class="mb-5">
            <b-row>
                <b-col cols="12" lg="6">
                    <b-row class="g-0">
                        <b-col cols="6" md="4" id="item-col1">
                            <div id="container-title" class="position-relative">
                                <TitleSection :title-part1="'About'" :title-part2="'Us'" />
                                <div id="radius-btm-right" class="position-absolute"></div>
                            </div>
                        </b-col>
                        <b-col cols="6" md="8" id="item-col2">
                        </b-col>
                        <b-col cols="12" id="item-col3">
                            <div id="item3">
                                <p class="m-0">
                                    Welcome to our platform! We are dedicated to providing a simple and efficient
                                    service for
                                    tracking your orders. Our mission is to offer modern and reliable tools that make
                                    tracking
                                    your packages transparent and accessible, wherever you are. With a passionate team
                                    and
                                    innovative technology .
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

                <b-col cols="12" lg="6" id="col-img"
                    class="overflow-hidden position-relative d-flex align-items-center justify-content-end">
                    <img id="img-topology" class="position-absolute z-1" :src="require('@/assets/img/Topology-1.png')"
                        alt="">
                    <div class="position-absolute z-1" id="blur">
                        <BlurBg />
                    </div>
                    <b-img 
                        :src="require('@/assets/img/aboutUs.webp')" fluid-grow alt="Responsive image">
                    </b-img>
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
        },

        methods: {
            cercle() {
                this.$refs.roundedText.innerHTML = this.$refs.roundedText.innerText
                    .split('')
                    .map((char, i) =>
                        `<span style=" transform:rotate(${i*8.3}deg) ; position:absolute;left: 50% ; transform-origin:0 50px; font-size:6px" >${char}</span>`
                    )
                    .join('')
            }
        },

        mounted() {
            this.cercle()
        }
    }
</script>

<style lang="scss" scoped>
    #aboutUs {

        #item-col1,
        #item-col2,
        #item-col3,
        #col-img {
            background-color: var(--background-section);
        }

        #item-col2 {
            border-top-right-radius: var(--BRadius-Section);
            border-top-left-radius: var(--BRadius-Section);
        }

        #item-col3 {
            border-bottom-right-radius: var(--BRadius-Section);
            border-bottom-left-radius: var(--BRadius-Section);
            border-top-left-radius: var(--BRadius-Section);
            padding: var(--paddingInline-section);
        }

        #col-img {
            border-radius: var(--BRadius-Section);
            padding: var(--paddingInline-section);
        }

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


        #img-topology {
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

    }
</style>