<template>
    <div v-if="section==='about'" class="d-flex align-items-center justify-content-center   h-100" id="titleLeft">
        <h2 id="title" class="m-0">
            <span>About</span>
            <span>Us</span>
        </h2>
    </div>
    <div v-else-if="section==='services'" class="d-flex align-items-center justify-content-center   h-100"
        id="titleRight">
        <h2 id="title" class="m-0">
            <span>Our</span>
            <span>Services</span>
        </h2>
    </div>
    <div v-else-if="section==='howitworks'" class="d-flex align-items-center justify-content-center h-100 " id="How-ItWorks">
        <h2 id="title" class="m-0">
            <span>How</span>
            <span>It Works</span>
        </h2>
    </div>
    <div v-else-if="section==='contact'" class="d-flex align-items-center justify-content-center   h-100 " id="contact">
        <h2 id="title" class="m-0">
            <span>Contact</span>
            <span>Us</span>
        </h2>
    </div>
    <div v-else-if="section==='FAQ'" class="d-flex align-items-center justify-content-center  h-100 " id="FAQ">
        <h2 id="title" class="m-0">
            <span>Help Center</span>
            <span>FAQ</span>
        </h2>
    </div>
</template>

<script>
    export default {
        name: 'TitleSection',
        props: {
            section: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    #titleRight,
    #titleLeft,
    #How-ItWorks,
    #contact,
    #FAQ {
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


    #How-ItWorks {

        #title {
            span:first-child {
                display: flex;
                align-items: center;
                justify-content: end;
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

    #contact {

        #title {
            span:last-child {
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

    #FAQ {

        #title {
            span:last-child {
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

    // phone
    @media (max-width: 767.98px) {

        #title {
            font-size: var(--title-section-mobile);
        }
    }
</style>