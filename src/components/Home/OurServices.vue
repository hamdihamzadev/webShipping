<template>
    <section id="our-services">
        <b-container>
            <b-row>
                <b-col cols="8">
                    <div id="item-col8">
                        <p>reliable tools that make tracking your packages transparent and accessible, wherever you are. With a passionate </p>
                    </div>
                </b-col>
                <b-col cols="4">
                    <div id="container-title" class="position-relative">
                        <TitleSection :title-part1="'Our'" :title-part2="'Services'" />
                        <div id="radius-btm-right" class="position-absolute"></div>
                    </div>
                </b-col>
                <b-col cols="12">
                    <div id="item-col12"></div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import TitleSection from '../TitleSection.vue';
    export default {
        name: 'OurServices',
        components: {
            TitleSection
        }
    }
</script>

<style lang="scss" scoped>
    #our-services {

        #item-col8,
        #item-col12 {
            background-color: var(--background-section);
        }

        #item-col8 {
            background-color: var(--background-section);
            height: 100px;
            border-top-right-radius: var(--BRadius-Section);
            border-top-left-radius: var(--BRadius-Section);
        }

        #item-col12{
            background-color: var(--background-section);
            padding: var(--paddingInline-section);
            height: fit-content;
        }

        #container-title {
            background-color: var(--background-body);
            height: 100px;
            padding: 0px 10px 10px 0px;

        }
    }
</style>