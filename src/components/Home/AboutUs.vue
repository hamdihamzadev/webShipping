<template>
    <section id="aboutUs">
            <b-row class="g-0 gap-3" >
                <b-col cols="12" lg="6" >
                    <b-row class="g-0 h-100" >
                        <b-col cols="6" md="4" id="col-title" class="position-relative" >
                            <div class="h-100" >
                                <TitleSection :section="'about'"  />
                            </div>
                            <div id="radius-btm-right" class="position-absolute"></div>
                        </b-col>
                        <b-col cols="6" md="4" id="col-cercle" ></b-col>
                        <b-col cols="12" id="col-paragraphe" >
                            <p class="m-0">
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
                        </b-col>
                    </b-row>
                </b-col>
                <b-col 
                    cols="12" 
                    lg="6" 
                    id="col-img" 
                    class="overflow-hidden position-relative d-flex align-items-center justify-content-end"  >
                    <img 
                        id="img-topology" 
                        class="position-absolute z-1" 
                        :src="require('@/assets/img/Topology-1.png')" 
                        alt="">
                    <div 
                        class="position-absolute z-1" 
                        id="blur">
                        <BlurBg />
                    </div>
                        <b-img 
                            id="img-gift"
                            :src="require('@/assets/img/aboutUs.webp')"  
                            alt="Responsive image">
                        </b-img>
                </b-col>
            </b-row>
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
    }
</script>

<style lang="scss" scoped>

    #aboutUs {

        #col-cercle,
        #col-paragraphe{
            background-color: var(--background-section);
        }

        #col-cercle{
            border-top-left-radius: var(--BRadius-Section);
            border-top-right-radius: var(--BRadius-Section);
        }

        #col-paragraphe{
            padding: var(--paddingInline-section);
            border-bottom-left-radius: var(--BRadius-Section);
            border-bottom-right-radius: var(--BRadius-Section);
            border-top-left-radius: var(--BRadius-Section);
        }

        #col-img{
            background-color: var(--background-section);
            padding: var(--paddingInline-section);
            border-radius: var(--BRadius-Section);
        }

        #col-title {
            background-color: var(--background-body);
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


        #col-img{

            #img-gift{
                min-width: 300px;
                min-height: 300px;
                object-fit: contain;
                flex: 0.7;
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

    }


// phone
@media (max-width: 767.98px) {
    #aboutUs{

        #col-paragraphe{
            padding: var(--paddingInline-section-mobile);
            p{
                font-size:var(--subtitle-mobile)
            }

        }

        #col-img{
            padding: var(--paddingInline-section-mobile);
        }
    }
}
    
</style>