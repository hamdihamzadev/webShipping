<template>
    <div v-if="typeTitle==='left'" class="d-flex align-items-center justify-content-center h-100" id="titleLeft">
        <h2 id="title" class="m-0">
            <span>{{ titlePart1 }}</span>
            <span>{{ titlePart2 }}</span>
        </h2>
    </div>
    <div v-else class="d-flex align-items-center justify-content-center h-100" id="titleRight">
        <h2 id="title" class="m-0">
            <span>{{ titlePart1 }}</span>
            <span>{{ titlePart2 }}</span>
        </h2>
    </div>
</template>

<script>
    export default {
        name: 'TitleSection',
        props: {
            titlePart1: {
                type: String,
                required: true
            },
            titlePart2: {
                type: String,
                required: true
            },
            typeTitle: {
                type: String,
                required: true
            }
        }

    }
</script>

<style lang="scss" scoped>
    #titleRight,
    #titleLeft {
        padding: var(--padding-titleSection);
        border-radius: var(--BRadius-titleSection);
        font-size: var(--title-section);
        background-color: var(--background-titleSection);
    }

    #title {
        font-size: var(--title-section);
        color: var(--color-titleSection);
        font-weight: 900;
    }

    #titleLeft {

        #title {
            span:last-child {
                display: flex;
                align-items: center;
                gap: 10px;

                &::after {
                    content: "";
                    background-color: var(--color-titleSection);
                    display: block;
                    height: 4px;
                    flex-grow: 1;
                    border-radius: 35px;
                }
            }
        }
    }


    #titleRight {

        #title {
            span:first-child {
                display: flex;
                align-items: center;
                justify-content: end;
                gap: 10px;

                &::before {
                    content: "";
                    background-color: var(--color-titleSection);
                    display: block;
                    height: 4px;
                    flex-grow: 1;
                    border-radius: 35px;
                }
            }
        }
    }
</style>