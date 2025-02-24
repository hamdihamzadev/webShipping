<template>
    <section id="faq">
        <b-container>
            <b-row class="g-0">
                <b-col cols="2" lg="4">
                    <div class="h-100" id="col-left">
                    </div>
                </b-col>
                <b-col cols="8" lg="4">
                    <div class="h-100 position-relative" id="col-title">
                        <div id="radius-btmLeft" class="position-absolute"></div>
                        <div id="radius-btmRight" class="position-absolute"></div>
                        <div id="container-title">
                            <TitleSection :section="'FAQ'" />
                        </div>
                    </div>
                </b-col>
                <b-col cols="2" lg="4">
                    <div class="h-100" id="col-right"></div>
                </b-col>
                <b-col cols="12">
                    <div class="h-100 position-relative z-3 overflow-hidden" id="col-questions">
                        <div id="bg-blur" class="position-absolute z-1">
                            <BlurBg />
                        </div>
                        <b-row class="g-3 position-relative z-3" id="group-question">
                            <b-col cols="12" v-for="(item,index) in questions" :key="item.id">
                                <div id="question-item" :class="{'activeResponse':activeResponse}" >
                                    <div class="d-flex justify-content-between align-items-center" >
                                        <p class="mb-0">{{ item.question }}</p>
                                        <b-button id="btn-toggle" v-b-toggle="`response${index}`" ><b-icon scale="1.5" icon="plus" ></b-icon></b-button>
                                    </div>
                                    
                                    <b-collapse  :id="`response${index}`"  accordion="response" role="tabpanel">
                                        <p id="response-text" class="mt-4" >{{ item.response }}</p>
                                    </b-collapse>
                                </div>
                            </b-col>
                        </b-row>
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
        name: 'AskedQuestions',
        components: {
            TitleSection,
            BlurBg
        },

        data() {
            return {
                questions: [{
                        question: 'Which countries do you deliver to?',
                        response: 'We offer delivery to several countries in Africa, including Burkina Faso, Niger, Togo, Benin, Ivory Coast, Chad, Gabon, and Senegal. We are constantly working to expand our delivery areas.'
                    },
                    {
                        question: 'How long does delivery take?',
                        response: 'Delivery times vary depending on the destination. Generally, delivery takes between 3 to 7 business days. You will receive a notification with your tracking number once your order has been shipped.'
                    },
                    {
                        question: ' How can I track my order?',
                        response: 'Once your order is shipped, you will receive an email with a tracking number and a link to the carrier’s website. You can track your package in real time.'
                    },
                    {
                        question: ' Can I cancel my order after placing it?',
                        response: 'If you wish to cancel your order, please contact us within 24 hours of placing it. If the order has not yet been shipped, we will proceed with the cancellation.'
                    }
                ],
                indexResponse: null,

            }
        },

        methods: {
            showResponse(index) {
                this.activeResponse = index
            }
        }
    }
</script>

<style lang=scss scoped>
    #faq {


        #col-left,
        #col-right,
        #col-questions {
            background-color: var(--background-section)
        }


        #col-left,
        #col-right {
            border-top-right-radius: var(--BRadius-Section);
            border-top-left-radius: var(--BRadius-Section);
        }

        #col-title {
            #radius-btmLeft {
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

            #radius-btmRight {
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

            #container-title {
                padding: 0px 10px 10px 10px;
            }
        }

        #col-questions {
            border-bottom-right-radius: var(--BRadius-Section);
            border-bottom-left-radius: var(--BRadius-Section);

            #bg-blur {
                    top: 186px;
                    opacity: 0.6;
                }

            #group-question {
                padding-inline: var(--paddingInline-section);

                #question-item {
                    border: 1px solid var(--border-color);
                    padding: 16px 24px;
                    border-radius: 12px;

                    #btn-toggle{
                        background-color: transparent;
                        border: none;

                    }

                    #response-text{
                        color: #bbb6ba;
                    }

                }
            }
        }
    }


    // phone
    @media (max-width: 767.98px) {
        #faq {

            #col-questions {
                

                #bg-blur {
                    top: 186px;
                }

                #group-question{
                    padding: var(--paddingInline-section-mobile);
                }

               }

        }
    }
</style>