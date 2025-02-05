<template>
    <section id="AppFooter" class="mb-4">
        <b-container>
            <b-row id="border-footer" class="g-0 gap-4 gap-lg-0 ">
                <b-col lg="4">
                    <div class="h-100 d-flex flex-column gap-3 ">
                        <div id="container-img">
                            <img style="width: 40px; height: 40px;" src="@/assets/img/logo.png" alt="Logo">
                        </div>
                        <span id="description">
                            Fast and secure delivery, send, receive with confidence and ease! 📦
                        </span>
                    </div>
                </b-col>
                <b-col cols="6" lg="2" v-for="item in sectionLinks" :key="item.id">
                    <div class="h-100" id="links">
                        <p id="title" class="mb-3 fw-medium">{{ item.topTitle }}</p>
                        <b-list-group>
                            <b-list-group-item v-for="link in item.links" :key="link.id"
                                class="ps-0 bg-transparent border border-0 text-white">
                                <router-link :to="link.path" tag="a" class="text-decoration-none fw-light d-block"
                                    id="link">
                                    {{ link.nameLink }}
                                </router-link>
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                </b-col>
                <b-col lg="4">
                    <div id="newsletter" class="h-100">
                        <p class="mb-3 fw-medium">NEWSLETTER</p>
                        <b-form id="form">
                            <div class="d-flex align-items-center mb-2" id="search">
                                <b-icon icon="envelope" scale="1" id="icon-search"></b-icon>
                                <b-form-input class="bg-transparent  " placeholder="Search status"
                                    v-model="inputSearch">
                                </b-form-input>
                            </div>
                            <b-button class="w-100" id="btn">Subscribe Now</b-button>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                sectionLinks: [{
                        topTitle: 'Explore',
                        links: [{
                                nameLink: 'Services',
                                path: '/path'
                            },
                            {
                                nameLink: 'Track order',
                                path: '/Trackorder'
                            },
                            {
                                nameLink: 'About Us',
                                path: '/About Us'
                            },
                        ]
                    },
                    {
                        topTitle: 'Terms of Use',
                        links: [{
                                nameLink: 'Terms of Service',
                                path: '/Terms'
                            },
                            {
                                nameLink: 'Privacy Policy',
                                path: '/PrivacyPolicy'
                            },
                            {
                                nameLink: 'Cookie Policy',
                                path: '/CookiePolicy'
                            },
                        ]
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    #border-footer {
        padding: var(--paddingInline-section);
        border: 1px solid var(--border-color);
        border-radius: var(--BRadius-Section);

        #description {
            font-size: 14px;
        }

        #links {
            #title {
                color: var(--colortext-primary);

            }

            #link {
                font-size: 14px;
                color: var(--colortext-primary);
            }
        }

        #newsletter {

            #form {
                #search {
                    border: 1px solid var(--border-color);
                    border-radius: 5px;
                    padding: 4px 12px;
                    height: 55px;

                    &:focus-within {
                        border-color: var(--couleur-primaire-3);
                    }

                    #icon-search {
                        color: #A1A1AA;
                    }

                    input {
                        border: none;
                        border-radius: var(--BRadius-titleSection);
                        color: #A1A1AA;

                        &::placeholder {
                            font-size: 14px;

                        }

                        &:focus {
                            box-shadow: none;
                            color: var(--colortext-primary);
                        }

                        &::placeholder {
                            color: var(--couleur-primaire-2);
                        }
                    }
                }

                #btn {
                    background-color: var(--backgroud-btn);
                    height: 55px;
                    transition: background-color 0.3s ease, box-shadow 0.3s ease;
                    border: none;

                    &:hover {
                        background-color: var(--hover-btn);
                        box-shadow: 0px 7px 30px rgb(23 33 228 / 45%);
                    }
                }
            }

        }
    }


    // phone
    @media (max-width: 767.98px) {
        #border-footer {
            padding: var(--paddingInline-section-mobile);
            border: 1px solid var(--border-color);
        }
    }
</style>