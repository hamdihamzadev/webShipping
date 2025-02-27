<template>
    <section id="hautHeader" class="d-none d-md-block"   v-if="showTopBar" >
        <b-container>
            <div class="d-flex justify-content-between align-items-center py-4">
            <div class="d-flex justify-content-between align-items-center gap-5">
                <div class="d-flex align-items-center gap-2">
                    <b-icon icon="phone"></b-icon>
                    <small class="m-0">06 27 25 35 86</small>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <b-icon icon="youtube"></b-icon>
                    <b-icon icon="instagram"></b-icon>
                    <b-icon icon="facebook"></b-icon>
                </div>
            </div>

            <router-link id="login" to="/login" class="text-decoration-none" >
                <div class="d-flex align-items-center gap-2">
                    <b-icon icon="person"></b-icon>
                    <small class="m-0">Login</small>
                </div>
            </router-link>
        </div>
        </b-container>

    </section>
</template>

<script>
    export default {
        name: 'TopBar',
        data(){
            return{
                showTopBar: true
            }
        },
        watch: {
            '$route.path'(newPath) {
                newPath === '/login' || newPath === '/Login' || newPath==='/signup'  ? this.showTopBar = false : this.showTopBar = true;
                
            }
        },

        mounted(){
            this.$route.path === '/login' || this.$route.path  === '/Login' || this.$route.path==='/signup' ? this.showTopBar = false : this.showTopBar = true;
        }
    }
</script>

<style lang="scss" scoped>  
#hautHeader{
    color: var(--colortext-primary);
    #login{
        color: var(--colortext-primary);
        text-decoration: none;
    }
}
</style>