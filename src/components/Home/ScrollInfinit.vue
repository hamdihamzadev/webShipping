<template>
    <section id="scroll-infinit">
        <b-container>
            <div class="scroll-container mt-4">
                <div class="scroll-content d-flex  align-items-center gap-5">
                    <div v-for="item in scrollInfini" :key="item.id" class="d-flex align-items-center gap-2 w-100">
                        <b-img :src="require('@/assets/img/delivered.png')"></b-img>
                        <p class="mb-0 w-100">{{ item }}</p>
                    </div>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
export default{
    name:'scrollInfinit',
    data(){
        return{
            scrollInfini: ['Order in preparation', 'In delivery', 'Delivery successful', 'Waiting for confirmation',
                    'Order in preparation', 'In delivery', 'Delivery successful', 'Waiting for confirmation',
                    'Order in preparation', 'In delivery', 'Delivery successful', 'Waiting for confirmation',
                    'Order in preparation', 'In delivery', 'Delivery successful', 'Waiting for confirmation'
                ]
        }
    }
}
</script>

<style lang="scss" scoped>
.scroll-container {
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            width: 100%;
            border-radius: 10px;
        }

        .scroll-container::before {
            content: "";
            background: linear-gradient(to right, rgb(35 33 33), rgb(35 33 33 / 16%));
            bottom: 0;
            top: 0;
            position: absolute;
            width: 96px;
            left: 0px;
            z-index: 3;
        }



        .scroll-container::after {
            content: "";
            background: linear-gradient(to right, rgb(35 33 33 / 16%), rgb(35 33 33));
            bottom: 0;
            top: 0;
            position: absolute;
            width: 130px;
            right: 0px;
            z-index: 3;
        }

        .scroll-content {
            display: inline-block;
            white-space: nowrap;
            animation: scroll-left 10s linear infinite;
        }

    

    @keyframes scroll-left {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-80%);
        }
    }</style>