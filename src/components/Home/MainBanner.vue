<template>
    <section id="banner" >
        <b-container>
            <b-row id="banner-content" class="flex-column-reverse flex-lg-row gap-5 gap-lg-0 g-0 position-relative">
                <b-col cols="12" lg="6" class="d-flex justify-content-center">
                    <div class="d-flex flex-column justify-content-lg-center h-lg-100">
                        <img id="topology" class="position-absolute z-1" :src="require('@/assets/img/Topology-2.png')"
                            alt="">

                        <div class="position-absolute z-1">
                            <BlurBg />
                        </div>

                        <h2 id="headline" class="fw-bold z-3">
                            <span>Simplify tracking your</span>
                            <br> <span>orders in on click</span>
                        </h2>

                        <p class="mb-5 w-75" id="subtitle">
                            Our platform allows you to track your packages
                            in real time, wherever you are
                        </p>
                        <router-link to="/trackorder" class="z-3">
                            <b-button id="cta" class="border-none">Track order</b-button>
                        </router-link>
                    </div>
                </b-col>
                <b-col cols="12" lg="6">
                    <div>
                        <img class="w-100 h-100 object-fit-contain" :src="require('@/assets/img/imgBanner.png')" alt="">
                    </div>
                </b-col>
            </b-row>

            <div>
                <ScrollInfinit/>
            </div>
        </b-container>

    </section>
</template>

<script>
    import BlurBg from '@/components/global/BlurBg.vue'
import ScrollInfinit from './ScrollInfinit.vue';

    export default {
        name: 'MainBanner',
        components: {
            BlurBg,
            ScrollInfinit
        },
        data() {
            return {
                scrollInfini: ['Order in preparation', 'In delivery', 'Delivery successful', 'Waiting for confirmation',
                    'Order in preparation', 'In delivery', 'Delivery successful', 'Waiting for confirmation',
                    'Order in preparation', 'In delivery', 'Delivery successful', 'Waiting for confirmation',
                    'Order in preparation', 'In delivery', 'Delivery successful', 'Waiting for confirmation'
                ]
            }
        }

    }
</script>

<style lang="scss" scoped>
    #banner-content {

        background-color: var(--background-section);
        padding: 107px var(--paddingInline-section);
        border-radius: 16px;
        overflow: hidden;

        #headline {
            width: max-content;
            font-size: var(--title-banner);

            span:last-child {
                display: flex;
                align-items: center;
                gap: 10px;

                &::after {
                    content: "";
                    background-color: var(--colortext-seconde);
                    display: block;
                    height: 4px;
                    flex-grow: 1;
                    border-radius: 35px;
                }

            }
        }

        #cta {
            background-color: var(--backgroud-btn);
            border: none;
            padding: 16px 24px;
            font-size: 16px;
            transition: background-color 0.3s ease;
            box-shadow: 0px 7px 30px rgb(255 255 255 / 7%);

            &:hover {
                background-color: var(--hover-btn);
                box-shadow: 0px 7px 30px rgb(23 33 228 / 45%);

            }
        }

        #subtitle {
            color: var(--colortext-seconde);
            font-size: var(--subtitle);
        }

        #topology {
            top: -65px;
            left: 266px;
            width: 300px;
            opacity: 0.5;
        }


    }

    // phone
    @media (max-width: 767.98px) {
        #banner-content {
           

            #headline {
                font-size: var(--title-banner-mobile);
            }

            #subtitle {
                color: var(--colortext-seconde);
                font-size: var(--subtitle-mobile);
            }

            #topology {
                left: 272px;
                width: 148px;
                opacity: 0.8;
                bottom: -27px;
                top: auto;
            }

            #cta {
                font-size: 14px;
            }

        }
    }


    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
        #banner-content {
            padding-inline: var(--paddingInline-section-mobile);
            padding-block: 44px;

            #topology {
                left: auto;
                width: 148px;
                opacity: 0.8;
                bottom: -27px;
                top: auto;
                right: -13px;
            }

        }
    }
</style>