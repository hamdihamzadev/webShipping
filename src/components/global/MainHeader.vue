<template>
    <section id="header">

        <div class=" d-none d-lg-flex justify-content-between align-items-center" id="content">
            <h5 class="m-0"><strong>SHIPiN</strong></h5>
            <ul class="d-flex justify-content-between align-items-center gap-3 m-0" id="list">
                <li v-for="(item,index) in links" :key="item.id">
                    <a @click="linkActive(index)" :class="index===activeLink?'activeLink':'link'" class="d-block p-2"
                        href="">{{ item }}
                    </a>
                </li>
            </ul>
            <router-link to="/trackorder">
                <b-button id="cta" class="border-none">Track order</b-button>
            </router-link>
        </div>

        <!-- Phone  -->
        <div class="d-flex justify-content-between align-items-center py-3 d-lg-none" id="mobile-header">
            <box-icon color="white" name='menu-alt-left' v-b-toggle.sidebar-menu></box-icon>
            <img style="width: 30px; height: 30px;" src="@/assets/img/logo.png" alt="Logo"
            class="sidebar-logo">
            <box-icon color="white" name='user'></box-icon>

            <!-- sidebar -->
            <b-sidebar id="sidebar-menu" shadow>

                <template #header>
                    <div id="sidebar-header" class="d-flex justify-content-between align-items-center w-100 mt-4 mb-3 ">
                        <img style="width: 30px; height: 30px;" src="@/assets/img/logo.png" alt="Logo"
                            class="sidebar-logo">
                        <box-icon color="#F2F2F5" name='x' v-b-toggle.sidebar-menu ></box-icon>
                    </div>
                </template>

                <ul class="m-0 list-unstyled px-3 py-2" id="links">
                    <li class="w-100 d-flex justify-content-between align-items-center" v-for="(item,index) in links" :key="item.id">
                        <a @click="linkActive(index)" :class="index===activeLink?'activeLink':'link'"
                            class="d-block text-decoration-none" href="">{{ item }}
                        </a>
                        <box-icon color="#F2F2F5" id="arrow-icon"  name='right-arrow-alt'></box-icon>
                    </li>
                </ul>
                <p class="m-0 px-3 d-flex align-items-center gap-2" id="login" > <box-icon color="white" name='user'></box-icon><span>Login</span></p>

                <div id="contact"  class="d-flex justify-content-between align-items-center px-3" >
                    <p class="m-0 d-flex align-items-center gap-2"  > <box-icon name='phone' color="#F2F2F5" ></box-icon><span>06 27 25 35 86</span></p>
                    <div id="social-media" class="d-flex gap-2 align-items-center ">
                        <box-icon name='facebook' type='logo' color="#F2F2F5" ></box-icon>
                        <box-icon name='instagram' type='logo' color="#F2F2F5" ></box-icon>
                        <box-icon type='logo' name='twitter' color="#F2F2F5"></box-icon>
                    </div>
                </div>

            </b-sidebar>
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

    // phone
    @media (max-width: 767.98px) {
        #header {
            #mobile-header {

                ::v-deep(#sidebar-menu) {
                    background-color: var(--background-section) !important;
                }
                ::v-deep(.b-sidebar) {
                    width: 100% !important;
                }

                #sidebar-menu {

                    #links {

                        li {
                            padding-block: 12px;

                            a {
                                color: var(--colortext-primary);
                            }

                            #arrow-icon{
                                rotate: 318deg;
                            }

                        }

                        &{
                            border-bottom: 1px solid #545454;
                        }
                        
                    }

                    #login{
                        padding-block: 16px;
                        color: var(--colortext-primary);
                        border-bottom: 1px solid #545454;
                    }

                    #contact{
                        padding-block: 16px;
                        color: var(--colortext-primary);
                        border-bottom: 1px solid #545454;
                    }
                }
            }
        }
    }
</style>