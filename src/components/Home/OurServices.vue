<template>
    <section id="our-services">
        <b-container>
            <b-row class="g-0 overflow-hidden">
                <b-col md="9" id="col-subtitle">
                    <div class="h-100 d-flex align-items-center justify-content-end gap-3">
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
                        <p id="para" class="m-0">
                            Service for tracking your orders Our mission is to offer modern and reliable tools that
                            make
                            tracking your packages transparent and accessible, wherever
                        </p>
                    </div>

                </b-col>
                <b-col md="3" id="col-title" class="position-relative">
                    <div id="radius-btm-left" class="position-absolute"></div>
                    <TitleSection :type-title="'right'" :title-part1="'Our'" :title-part2="'Services'" />
                </b-col>
                <b-col md="12" class="col-services position-relative">
                    <div class="position-absolute z-1" id="blurBg">
                        <BlurBg />
                    </div>
                    <b-row class="g-4 z-3 position-relative">
                        <b-col cols="6" lg="4">
                            <div class="service p-5">
                                <div class="container-icon" id="back-icon1">
                                    <b-icon icon="person"></b-icon>
                                </div>
                                <div>
                                    <h4 class="mb-2" id="title">Real-time tracking</h4>
                                    <p class="mb-0" id="paragraphe">for tracking your orders. Our mission is to offer
                                        modern and reliable toolsy .</p>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6" lg="4">
                            <div class="service p-5">
                                <div class="container-icon" id="back-icon2">
                                    <b-icon icon="person"></b-icon>
                                </div>
                                <div>
                                    <h4 class="mb-2" id="title">Real-time tracking</h4>
                                    <p class="mb-0" id="paragraphe">for tracking your orders. Our mission is to offer
                                        modern and reliable toolsy .</p>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6" lg="4">
                            <div class="service p-5">
                                <div class="container-icon" id="back-icon3">
                                    <b-icon icon="person"></b-icon>
                                </div>
                                <div>
                                    <h4 class="mb-2" id="title">Real-time tracking</h4>
                                    <p class="mb-0" id="paragraphe">for tracking your orders. Our mission is to offer
                                        modern and reliable toolsy .</p>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6" lg="4">
                            <div class="service p-5">
                                <div class="container-icon" id="back-icon4">
                                    <b-icon icon="person"></b-icon>
                                </div>
                                <div>
                                    <h4 class="mb-2" id="title">Real-time tracking</h4>
                                    <p class="mb-0" id="paragraphe">for tracking your orders. Our mission is to offer
                                        modern and reliable toolsy .</p>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6" lg="4">
                            <div class="service p-5">
                                <div class="container-icon" id="back-icon5">
                                    <b-icon icon="person"></b-icon>
                                </div>
                                <div>
                                    <h4 class="mb-2" id="title">Real-time tracking</h4>
                                    <p class="mb-0" id="paragraphe">for tracking your orders. Our mission is to offer
                                        modern and reliable toolsy .</p>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6" lg="4">
                            <div class="service p-5">
                                <div class="container-icon" id="back-icon6">
                                    <b-icon icon="person"></b-icon>
                                </div>
                                <div>
                                    <h4 class="mb-2" id="title">Real-time tracking</h4>
                                    <p class="mb-0" id="paragraphe">for tracking your orders. Our mission is to offer
                                        modern and reliable toolsy .</p>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
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
                    background-color: #413D33;
                    color: #F1A706
                }

                #back-icon2 {
                    background-color: rgb(224, 55, 55, 0.14);
                    color: #E03737;
                }

                #back-icon3 {
                    background-color: #363E37;
                    color: #33B842
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
                    background-color: rgb(242, 242, 24, 0.11);
                    color: #F2F2F5
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
</style>