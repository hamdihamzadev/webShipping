<template>
    <div class="d-flex align-items-center justify-content-center"  id="backTitle" >
        <h2 id="title" class="m-0">
        <span>{{ titlePart1 }}</span>
        <br> 
        <span>{{ titlePart2 }}</span>
    </h2>
    </div>
</template>

<script>
    export default {
        name: 'TitleSection',
        props:{
            titlePart1:{
                type:String,
                required:true
            },
            titlePart2:{
                type:String,
                required:true
            }
        }
    }
</script>

<style  lang="scss" scoped>
    #backTitle {
        
        padding: var(--padding-titleSection);
        border-radius: var(--BRadius-titleSection);
        font-size: var(--title-section);
        background-color: var(--background-titleSection);


        #title{
            font-size: var(--title-section);
            color: var(--color-titleSection);
            font-weight: 900;

        }
       

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
</style>