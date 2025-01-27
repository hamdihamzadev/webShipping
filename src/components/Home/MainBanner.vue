<template>
    <section id="slide">
        <b-container>
            <div id="content" class="d-flex justify-content-between align-items-center position-relative">
                <div class="d-flex flex-column">

                    <img id="topology" class="position-absolute z-1" :src="require('@/assets/img/Topology-2.png')"
                        alt="">

                    <div class="position-absolute z-1">
                        <BlurBg />
                    </div>
                    <h2 id="headline" class="fw-bold z-3">
                        <span>Simplify tracking your</span>
                        <br> <span>orders in on click</span>
                    </h2>

                    <p class="mb-5" id="subtitle">
                        Our platform allows you to track your packages <br>
                        in real time, wherever you are
                    </p>
                    <router-link to="/trackorder" class="z-3">
                        <b-button id="cta" class="border-none">Track order</b-button>
                    </router-link>
                </div>

                <div>
                    <img :src="require('@/assets/img/imgBanner.png')" alt="">
                </div>

            </div>
        </b-container>
    </section>
</template>

<script>
    import BlurBg from '@/components/global/BlurBg.vue'

    export default {
        name: 'MainBanner',
        components: {
            BlurBg,

        }

    }
</script>

<style lang="scss" scoped>
    #slide {


        #content {
            background-color: var(--background-section);
            padding-inline: var(--paddingInline-section);
            border-radius: 16px;
            height: 550px;
            overflow: hidden;
        }

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
            opacity: 0.8;
        }
    }
</style>