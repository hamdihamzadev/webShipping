<template>
    <section id="header">
    
            <div class="d-flex justify-content-between align-items-center" id="content">
                <h5 class="m-0"><strong>SHIPiN</strong></h5>
                <ul class="d-flex justify-content-between align-items-center gap-3 m-0" id="list">
                    <li v-for="(item,index) in links" :key="item.id">
                        <a @click="linkActive(index)" :class="index===activeLink?'activeLink':'link'"
                            class="d-block p-2" href="">{{ item }}
                        </a>
                    </li>
                </ul>
                <router-link to="/trackorder">
                    <b-button id="cta" class="border-none">Track order</b-button>
                </router-link>
         
            </div>
        
    </section>
</template>

<script>
    export default {
        name: 'MainHeader',
        data() {
            return {
                links: [
                    'Home',
                    'Services',
                    'About Us',
                    'Contact'
                ],
                activeLink: 0
            }
        },

        methods: {
            linkActive(index) {
                this.activeLink = index
            }
        }
    }
</script>

<style lang="scss" scoped>
    #header {


        #content {
            border: 1px solid var(--border-color);
            padding: 16px 32px;
            border-radius: 8px;

            #list {

                li {
                    list-style: none;

                    a {
                        color: var(--color-5);
                        text-decoration: none;
                        transition: 0.2ms;
                    }

                    a.link {
                        position: relative;
                    }

                    a.link::after {
                        content: "";
                        background-color: #ffffff;
                        height: 1px;
                        display: block;
                        position: absolute;
                        bottom: 0;
                        width: 0px;
                        transition: width 2s ease;
                    }

                    a.link:hover::after {
                        width: -webkit-fill-available;
                    }

                    .activeLink {
                        border-bottom: 2px solid var(--border-color);
                        font-weight: bold;
                    }
                }
            }

            #cta {
                background-color: var(--backgroud-btn);
                border: none;
                padding: 8px 16px;
                font-size: 16px;
                transition: background-color 0.3s ease;

                &:hover {
                    background-color: var(--hover-btn);
                }
            }

    

        }
    }
</style>