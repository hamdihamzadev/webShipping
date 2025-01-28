<template>
    <section id="contact-us">
        <b-row class="g-0 overflow-hidden">
            <b-col md="10">
                <div id="subtitle" class="h-100 d-flex align-items-center justify-content-end gap-3">
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
            <b-col md="2">
                <div id="title">
                    <TitleSection :title-part1="'contact'" :title-part2="'Us'" :type-title="'right'" />
                </div>
            </b-col>
            <b-col md="12" class="position-relative" >
                <div class="position-absolute" id="bgBlur"><BlurBg/></div>
                <div id="form-contact">
                    <b-row class="align-items-center g-5">
                        <b-col md="7" id="form">

                            <div id="headline" class="mb-4 d-flex flex-column justify-content-center gap-2 ">
                                <p class="m-0 fw-bold position-relative">Send Message</p>
                                <p class="m-0">As a creative agency we work with you to develop solutions to address
                                    your
                                    brand
                                    needs. <br> That includes various aspects </p>
                            </div>
                            <b-form @submit="onSubmit" @reset="onReset">

                                <b-row class="g-4">
                                    <b-col md="6">
                                        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                            <b-form-input id="input" placeholder="Enter name" required>
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                            <b-form-input id="input" placeholder="Enter name" required>
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="12">
                                        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                            <b-form-input id="input" placeholder="Enter name" required>
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="12">
                                        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                            <b-form-textarea id="input" placeholder="Enter something..." rows="3"
                                                max-rows="6"></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="12">
                                        <b-button class="w-100" id="btn-form" type="submit">Submit</b-button>
                                    </b-col>
                                </b-row>

                            </b-form>

                        </b-col>
                        <b-col md="5" id="contact">
                                <p id="title" class="mb-3 fw-bold">Contact with:</p>
                            
                            <div class="d-flex flex-column gap-3 ">
                                <div id="item-contact" v-for="item in contact" :key="item.id" class="d-flex align-items-center gap-2">
                                    <div class="d-flex align-items-center justify-content-center" id="container-icon">
                                        <b-icon :icon="item.icon"></b-icon>
                                    </div>
                                    <div>
                                        <p id="name" class="m-0 fw-bold">{{ item.name }}</p>
                                        <p id="text" class="m-0 ">{{ item.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </section>
</template>

<script>
    import BlurBg from '../global/BlurBg.vue';
import TitleSection from '../TitleSection.vue';

    export default {
        name: 'ContactUs',
        components: {
            TitleSection,
            BlurBg

        },

        data() {
            return {
                contact: [{
                        icon: 'phone',
                        name: 'Phone',
                        text: '06 27 18 74 95'
                    },
                    {
                        icon: 'envelope',
                        name: 'Email',
                        text: 'hamdihamza440@gmail.com'
                    },
                    {
                        icon: 'geo-alt',
                        name: 'Adress',
                        text: 'Morocco - Casablanca'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    #contact-us {

        #subtitle,
        #form-contact {
            background-color: var(--background-section);
        }

        #subtitle {
            border-top-left-radius: var(--BRadius-Section);
            border-top-right-radius: var(--BRadius-Section);
            padding-inline: var(--paddingInline-section);

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

        #title {
            padding-bottom: 10px;
            padding-left: 10px;
        }

        #form-contact {
            border-bottom-left-radius: var(--BRadius-Section);
            border-bottom-right-radius: var(--BRadius-Section);
            border-top-right-radius: var(--BRadius-Section);
            padding: var(--paddingInline-section);

            #form {
                #headline {
                    p:first-child{
                        z-index: 2;
                        font-size: 16px;
                    }
                    p:first-child::before {
                        content: "";
                        background-color: #1721e4;
                        width: 21px;
                        aspect-ratio: 1;
                        border-radius: 50%;
                        position: absolute;
                        z-index: -2;
                        left: -6px;

                    }

                    p {
                        font-size: 14px;
                        width: fit-content;
                        padding-bottom: 6px;
                    }
                }

                ::v-deep #input-group-2__BV_label_ {
                    font-size: 14px;
                    margin-bottom: 8px;
                }

                #input {
                    background-color: var(--bg-Input);
                    height: 54px;
                    color: var(--colortext-primary);
                    font-size: 14px;

                    &::placeholder {
                        color: var(--color-placholder);
                    }

                    &:focus {
                        box-shadow: none;
                    }
                }

                #btn-form {
                    background-color: var(--backgroud-btn);
                    outline: none;
                    height: 54px;
                    border: none;
                    transition: background-color 0.3s ease;
                    box-shadow: 0px 7px 30px rgb(255 255 255 / 7%);

                    &:hover {
                        background-color: var(--hover-btn);
                        box-shadow: 0px 7px 30px rgb(23 33 228 / 45%);

                    }
                }
            }

            #contact {

                #title{
                    font-size: 16px;
                    z-index: 2;
                    position: relative;
                    padding: 0;
                    &::before{
                        content: "";
                        background-color: #1721e4;
                        width: 21px;
                        aspect-ratio: 1;
                        border-radius: 50%;
                        position: absolute;
                        z-index: -2;
                        left: -6px;
                    }
                }
                p {
                    font-size: 14px;
                }

                #item-contact{
                    padding-block: 20px;
                    border-bottom: 0.1px solid #ffffff14;
                }

                #container-icon {
                    background-color: #3C3B3B;
                    padding: 10px;
                    width: 50px;
                    height: 50px;
                    border-radius: var(--BRadius-titleSection);
                }
            }
        }

        #bgBlur{
            left: 52px;
            opacity: 0.7;
        }
    }
</style>