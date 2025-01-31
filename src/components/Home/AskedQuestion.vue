<template>
    <section id="faq" class="" >
        <b-row class="g-0" >
            <b-col  cols="2" lg="4" >
                <div class="h-100" id="col-left">
                </div>
            </b-col>
            <b-col  cols="8" lg="4" >
                <div class="h-100" id="col-title">
                    <div id="container-title" >
                        <TitleSection :section="'FAQ'"  />
                    </div>
                </div>
            </b-col>
            <b-col  cols="2" lg="4" >
                <div class="h-100" id="col-right"></div>
            </b-col>
            <b-col cols="12">
                <div class="h-100 position-relative z-3 overflow-hidden" id="col-questions">
                    <div id="bg-blur" class="position-absolute z-1" >
                        <BlurBg/>
                     </div>
                    <b-row class="g-3 z-3" >
                        <b-col cols="12" v-for="(item,index) in questions" :key="item.id">
                            <div 
                                @click="showResponse(index)" 
                                :class="{'ResponseActive' : activeResponse===index , 'ResponseNoActive' : activeResponse!==index}" 
                                id="item-question" 
                                class="h-100 d-flex flex-column gap-4">
                                <div class="d-flex align-items-center justify-content-between" >
                                    <p :class="{'fw-bold bgResponse' : activeResponse===index}" class="m-0" >{{ item.question }}</p>
                                    <b-icon scale="1.5" icon="plus"></b-icon>
                                </div>
                                <p v-if="activeResponse===index" class="mb-0" >{{item.response}}</p>
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
        name: 'AskedQuestions',
        components: {
            TitleSection,
            BlurBg
        },

        data() {
            return {
                questions: [
                    {question:'The expense windows adapted sir. Wrong widen drawn',response:'The expense windows adapted Wrong widen drawn The expense windows adapted Wrong widen drawn'},
                    {question:'The expense windows adapted sir. Wrong widen drawn',response:'The expense windows adapted Wrong widen drawn The expense windows adapted Wrong widen drawn'},
                    {question:'The expense windows adapted sir. Wrong widen drawn',response:'The expense windows adapted Wrong widen drawn The expense windows adapted Wrong widen drawn'},
                    {question:'The expense windows adapted sir. Wrong widen drawn',response:'The expense windows adapted Wrong widen drawn The expense windows adapted Wrong widen drawn'}
                ],
                activeResponse:0
            }
        },

        showResponse(index){
            this.activeResponse=index
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
        #col-right{
            border-top-right-radius: var(--BRadius-Section);
            border-top-left-radius: var(--BRadius-Section);
        }

        #col-title{
            #container-title{
                padding:0px 10px 10px 10px;
            }
        }

        #col-questions{
            border-bottom-right-radius: var(--BRadius-Section);
            border-bottom-left-radius: var(--BRadius-Section); 
        }

        #col-questions {
            padding:var(--paddingInline-section);
            #item-question {
                padding:20px 40px;
                cursor: pointer;
                transition : height 0.3s ease
            }

            .ResponseActive{
                background-color: var(--background-titleSection);
                color:var(--color-titleSection);
                border:1px solid #1721E4;
            }

            .ResponseNoActive{
                background-color:#363636;
                border:1px solid var(--border-color);
            }
        }
    }


        // phone
@media (max-width: 767.98px) {
    #faq{

        #col-questions{
            padding: var(--paddingInline-section-mobile);

            #bg-blur{
                top: 186px;
            }

            #item-question{
                border-radius: var(--BRadius-Section);
                padding: 12px 24px;

                p{
                    font-size: 14px;
                }
            }
        }

    }
}
</style>