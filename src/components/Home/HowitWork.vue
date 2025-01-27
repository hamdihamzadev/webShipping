<template>
    <section id="howItWork">
        <b-container>
            <b-row class="g-0">
                <b-col md="3" id="col-title">
                    <TitleSection :title-part1="'How'" :title-part2="'It Work'" :type-title="'left'" />
                </b-col>
                <b-col md="9" id="col-subtitle">
                    <div class="h-100 d-flex align-items-center justify-content-end gap-3">
                        <div id="container-cercle" class="position-relative">
                            <div class="position-absolute top-50 start-50 translate-middle">
                                <div id="burst-puckerSubtitle"></div>
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
                            Service for tracking your orders Our mission is to offer modern and reliable tools that make
                            tracking your packages transparent and accessible, wherever
                        </p>
                    </div>
                </b-col>
                <b-col md="12" id="col-steps" class="position-relative" >
                    <div id="topology" class="position-absolute z-1" >
                        <b-img :src="require('@/assets/img/Topology-2.png')" ></b-img>
                    </div>
                    <b-row class="position-relative z-3" >
                        <b-col>
                            <div id="item-step" class="position-relative p-5 overflow-hidden">
                                <div class="position-absolute z-1" id="blur">
                                    <BlurBg />
                                </div>
                                <div
                                    class="position-relative z-3  d-flex align-items-center justify-content-between mb-4">
                                    <p id="number-step" class="m-0">01</p>
                                    <div>
                                        <StartBurst />
                                    </div>
                                </div>
                                <p id="title-step" class="position-relative z-3">Enter your id Order</p>
                                <div class="text-end position-relative z-3">
                                    <b-img id="img" :src="require('@/assets/img/aboutUs.webp')"></b-img>
                                </div>

                            </div>
                        </b-col>
                        <b-col>
                            <div id="item-step" class="position-relative p-5 overflow-hidden">
                                <div class="position-absolute z-1 " id="blur">
                                    <BlurBg />
                                </div>
                                <div
                                    class="position-relative z-3  d-flex align-items-center justify-content-between mb-4">
                                    <p id="number-step" class="m-0">02</p>
                                    <div>
                                        <StartBurst />
                                    </div>
                                </div>
                                <p id="title-step" class="position-relative z-3">Enter your id Order</p>
                                <div class="text-end position-relative-3">
                                    <b-img id="img" :src="require('@/assets/img/aboutUs.webp')"></b-img>
                                </div>
                            </div>
                        </b-col>
                        <b-col>
                            <div id="item-step" class="position-relative p-5 overflow-hidden">
                                <div class="position-absolute z-1" id="blur">
                                    <BlurBg />
                                </div>
                                <div
                                    class="position-relative z-3  d-flex align-items-center justify-content-between mb-4">
                                    <p id="number-step" class="m-0">03</p>
                                    <div>
                                        <StartBurst />
                                    </div>
                                </div>
                                <p id="title-step" class="position-relative z-3">Enter your id Order</p>
                                <div class="text-en position-relative-3d">
                                    <b-img id="img" :src="require('@/assets/img/aboutUs.webp')"></b-img>
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
    import StartBurst from '../global/StartBurst.vue';
    import TitleSection from '../TitleSection.vue';


    export default {
        name: 'HowItWork',
        components: {
            TitleSection,
            BlurBg,
            StartBurst
        }
    }
</script>

<style lang="scss" scoped>
    #howItWork {
        #col-title {
            padding-bottom: 10px;
            padding-right: 10px;
        }

        #col-subtitle {
            background-color: var(--background-section);
            border-radius: var(--BRadius-Section) var(--BRadius-Section) 0 0;
            padding-inline: var(--paddingInline-section);



            #container-cercle {
                background-color: #1721E4;
                width: fit-content;
                border-radius: 100%;
                transform-origin: center center;
                animation: anim 10s linear infinite;


                #burst-puckerSubtitle {
                    position: relative;
                    width: 20px;
                    /* Largeur totale */
                    height: 20px;
                    /* Hauteur totale */
                    background-color: #d3d3d3;
                    /* Couleur principale de l'étoile */
                    clip-path: polygon(50% 0%,
                            /* Pointe supérieure */
                            60% 40%,
                            /* Coin supérieur droit */
                            100% 50%,
                            /* Pointe droite */
                            60% 60%,
                            /* Coin inférieur droit */
                            50% 100%,
                            /* Pointe inférieure */
                            40% 60%,
                            /* Coin inférieur gauche */
                            0% 50%,
                            /* Pointe gauche */
                            40% 40%
                            /* Coin supérieur gauche */
                        );
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


            #para {
                font-size: 14px;
              
                text-align: justify;
            }
        }

        #col-steps {
            background-color: var(--background-section);
            border-radius: var(--BRadius-Section) 0 var(--BRadius-Section) var(--BRadius-Section);
            padding: var(--paddingInline-section);

            #topology{
                bottom: 0;
                left: 0;
                opacity: 0.7;
            }

            #item-step {
                background-color: var(--background-itemSection);
                border-radius: var(--BRadius-Section);
                border: 1px solid transparent;
                transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease, border 0.2s ease;

                #blur {
                    top: 45px;
                    right: 16px;
                    opacity: 0.6;
                    transition: opacity 0.2s ease,
                }

                #number-step {
                    font-size: 40px;
                    font-weight: bold;
                    color: rgb(255, 255, 255, 0.25);
                    margin-bottom: 1.5rem;
                    transition: background-color 0.2s ease;
                }

                #title-step {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    margin-bottom: 5rem;
                    transition: background-color 0.2s ease;
                }

                &:hover {
                    background-color: var(--hover-itemSection);
                    box-shadow: 0px 7px 30px #0000007a;
                    transform: translateY(-8px);
                    border-color: #1821E4;
                }

                &:hover #number-step {
                    color: #1721E4;
                }

                &:hover #title-step {
                    color: var(--hover-titleItemSection);
                }

                &:hover #blur {
                    opacity: 1;
                }
            }
        }

        #img {
            width: 150px;
            height: 150px;

        }
    }
</style>