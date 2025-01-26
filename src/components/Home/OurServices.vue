<template>
    <section id="our-services">
        <b-container>
            <b-row class="g-0 overflow-hidden">
                <b-col md="9" id="col-subtitle">
                    <div class="d-flex align-items-center justify-content-center">
                        <p class="m-0">ervice for tracking your orders. Our mission is to offer modern and reliable
                            tools that make tracking your packages transparent and accessible, wherever
                        </p>
                    </div>
                </b-col>
                <b-col md="3" id="col-title">
                    <TitleSection :type-title="'right'" :title-part1="'Our'" :title-part2="'Services'" />
                </b-col>
                <b-col md="12" class="col-services position-relative">
                    <div class="position-absolute z-1"><BlurBg/></div>
                    <b-row class="g-4 z-3">
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
            BlurBg
        },

    }
</script>

<style lang="scss" scoped>
    #our-services {

        #col-subtitle,
        .col-services {
            background-color: var(--background-section);
            padding-inline: var(--paddingInline-section);
        }

        .col-services {
            padding: var(--paddingInline-section);

            .service {
                background-color: var(--background-itemSection);
                border-radius: var(--BRadius-Section); 
                min-height: 300px;
                height: 100%;
                transition:background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease   ;

                &:hover{
                    background-color:var(--hover-itemSection);
                    box-shadow: 0px 7px 30px #0000007a;
                    transform: translateY(-8px);
                }

                &:hover #title{
                    color:var(--hover-titleItemSection)
                }

                &:hover #paragraphe{
                    color:var(--hover-paraItemSection)
                }

                #back-icon1{
                    background-color:#413D33;
                    color:#F1A706
                }

                #back-icon2{
                    background-color:rgb(224,55,55,0.14);
                    color:#E03737;
                }

                #back-icon3{
                    background-color:#363E37;
                    color:#33B842
                }

                #back-icon4{
                    background-color:rgb(0,0,0,0.12);
                    color:#000000;
                }

                #back-icon5{
                    background-color:rgb(67, 76, 255,0.11);
                    color:#434CFF;
                }

                #back-icon6{
                    background-color:rgb(242, 242, 24,0.11);
                    color:#F2F2F5
                }

                .container-icon {
                    width: fit-content;
                    border-radius: 6px;
                    margin-bottom: 30px;
                    padding: 16px 18px;

                    svg{
                        width:24px;
                        height: 24px;
                    }
                }

                #title {
                    font-weight: bold;
                    font-size: 20px;
                    transition:color 0.3s ease;
                }

                #paragraphe {
                    font-size: 14px;
                    transition:color 0.3s ease;
                }
            }

        }

    }
</style>