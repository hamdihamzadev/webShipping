<template>
    <section id="our-services">

            <b-row class="g-0 overflow-hidden">
                <b-col cols="6" md="8" lg="10" id="col-subtitle">
                    <div class="h-100 d-flex align-items-center justify-content-lg-end justify-content-lg-start  gap-3">
                        <div id="container-cercle" class="position-relative">
                            <div class="starburst position-absolute top-50 start-50 translate-middle">
                            </div>
                            <svg id="rotatingText" viewBox="0 0 200 200" width="60" height="60">
                                <defs>
                                    <path id="circle" d="M 100, 100
                                         m -75, 0
                                         a 75, 75 0 1, 0 150, 0
                                         a 75, 75 0 1, 0 -150, 0 ">
                                    </path>
                                </defs>
                                <text width="400">
                                    <textPath alignment-baseline="top" xlink:href="#circle" class="text">
                                        FAST TRACKING - FAST TRACKING - FAST TRACKING -
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <p id="para" class="m-0 d-none d-md-block">
                            Service for tracking your orders Our mission is to offer modern and reliable tools that
                            make
                            tracking your packages transparent and accessible, wherever
                        </p>
                    </div>

                </b-col>
                <b-col cols="6" md="4" lg="2" id="col-title" class="position-relative">
                    <div id="radius-btm-left" class="position-absolute"></div>
                    <TitleSection :section="'services'" />
                </b-col>
                <b-col md="12" class="col-services position-relative">
                    <div class="position-absolute z-1" id="blurBg">
                        <BlurBg />
                    </div>
                    <b-row class="g-4 z-3 position-relative">
                        <b-col cols="12" lg="4" v-for="(item,index) in services" :key="item.id" >
                            <div class="service p-5">
                                <div class="container-icon" :id="`back-icon${index+1}`">
                                    <b-icon :icon="item.icon"></b-icon>
                                </div>
                                <div>
                                    <h4 class="mb-2" id="title">{{item.title}}</h4>
                                    <p class="mb-0" id="paragraphe">
                                        {{item.para}}
                                    </p>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

    </section>
</template>

<script>
    import BlurBg from '../global/BlurBg.vue';
    import TitleSection from '../TitleSection.vue';

    export default {
        name: 'OurServices',
        components: {
            TitleSection,
            BlurBg,
        },

        data(){return{
            services:[
                {title:'Real-Time Tracking',para:'Customers can track their order live, receiving automatic updates on its status from dispatch to delivery.',icon:'geo-alt'},
                {title:'Notifications and Alerts',para:'Receive email or SMS notifications about order status changes, ensuring customers are always informed.',icon:'bell'},
                {title:'Order History',para:'Access past orders with all details, including tracking information and invoices, for easy reference.',icon:'clock'},
                {title:'Return Reques',para:'If youre not satisfied, provide your order number and reason, and our support team will assist with a hassle-free return.',icon:'arrow-repeat'},
                {title:'Customer Support',para:'Get quick support through live chat or our FAQ section for any order-related issues.',icon:'headset'},
                {title:'Estimated Delivery Time',para:'Customers get an estimated delivery time based on their address and courier, helping them plan ahead.',icon:'calendar-check'},
            ]
        }}

    }
</script>

<style lang="scss" scoped>
    #our-services {

        #col-subtitle {
            border-top-left-radius: var(--BRadius-Section);
            border-top-right-radius: var(--BRadius-Section);

            #container-cercle {
                background-color: #1721E4;
                width: fit-content;
                border-radius: 100%;
                transform-origin: center center;
                animation: anim 10s linear infinite;

                .starburst {
                    width: 20px;
                    background-color: #F2F2F5;
                    aspect-ratio: 1;
                    clip-path: polygon(100% 50%, 78.98% 57.76%, 93.3% 75%, 71.21% 71.21%, 75% 93.3%, 57.76% 78.98%, 50% 100%, 42.24% 78.98%, 25% 93.3%, 28.79% 71.21%, 6.7% 75%, 21.02% 57.76%, 0% 50%, 21.02% 42.24%, 6.7% 25%, 28.79% 28.79%, 25% 6.7%, 42.24% 21.02%, 50% 0%, 57.76% 21.02%, 75% 6.7%, 71.21% 28.79%, 93.3% 25%, 78.98% 42.24%);
                }

                #rotatingText {
                    .text {
                        fill: var(--colortext-primary);
                        letter-spacing: 3px;
                    }
                }
            }

            @keyframes anim {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }



            p {
                font-size: 14px;
            }

        }

        #col-subtitle,
        .col-services {
            background-color: var(--background-section);
            padding-inline: var(--paddingInline-section);
        }

        #col-title {
            padding-left: 10px;
            padding-bottom: 10px;

            #radius-btm-left {
                background-color: var(--background-section);
                width: 10px;
                height: 10px;
                left: 0;
                bottom: 0;

                &::after {
                    content: '';
                    background-color: var(--background-body);
                    width: inherit;
                    display: block;
                    height: inherit;
                    border-bottom-left-radius: 16px;
                }
            }
        }

        .col-services {
            padding: var(--paddingInline-section);
            border-bottom-right-radius: var(--BRadius-Section);
            border-bottom-left-radius: var(--BRadius-Section);
            border-top-right-radius: var(--BRadius-Section);

            #topology{
                bottom: 0;
                right: 0;
                opacity: 0.5;
            }

            #blurBg {
                left: 97px;
                top: 107px;
            }

            .service {
                background-color: var(--background-itemSection);
                border-radius: var(--BRadius-Section);
                min-height: 300px;
                height: 100%;
                transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

                &:hover {
                    background-color: var(--hover-itemSection);
                    box-shadow: 0px 7px 30px #0000007a;
                    transform: translateY(-8px);
                }

                &:hover #title {
                    color: var(--hover-titleItemSection)
                }

                &:hover #paragraphe {
                    color: var(--hover-paraItemSection)
                }

                #back-icon1 {
                    background-color: #f1a70629;
                    color: #F1A706
                }

                #back-icon2 {
                    background-color: rgb(224, 55, 55, 0.14);
                    color: #E03737;
                }

                #back-icon3 {
                    background-color: rgba(54, 209, 54, 0.171);
                    color: #36D136
                }

                #back-icon4 {
                    background-color: rgb(0, 0, 0, 0.12);
                    color: #000000;
                }

                #back-icon5 {
                    background-color: rgb(67, 76, 255, 0.11);
                    color: #434CFF;
                }

                #back-icon6 {
                    background-color: rgb(154 154 154 / 17%);
    color: #939393;
                }

                .container-icon {
                    width: fit-content;
                    border-radius: 6px;
                    margin-bottom: 30px;
                    padding: 16px 18px;

                    svg {
                        width: 24px;
                        height: 24px;
                    }
                }

                #title {
                    font-weight: bold;
                    font-size: 20px;
                    transition: color 0.3s ease;
                }

                #paragraphe {
                    font-size: 14px;
                    transition: color 0.3s ease;
                }
            }

        }

    }


// phone
@media (max-width: 767.98px) {
    #our-services{
        #col-subtitle,
        .col-services {
            background-color: var(--background-section);
            padding: var(--paddingInline-section-mobile);
        }
    }
}
</style>