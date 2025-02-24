<template>
    <section id="login" class="position-reltaive" >
        <div id="BlurBg" class="position-absolute" ><BlurBg/></div>
        <b-container class="h-100" fluid>
            <b-row class="h-100">
                <b-col cols="12" lg="5" id="container-img-section" class="d-none d-lg-block" >
                    <div id="img-section" class="p-5 h-100 d-flex flex-column justify-content-between">
                        <router-link tag="a" to="/" id="name-logo" ><strong  >GoDelivery</strong></router-link>
                        <!-- <p class="mb-0" id="name-logo"><strong>GoDelivery</strong></p> -->
                        <div id="container-img" class="text-center" >
                            <b-img style="width: 80%;" :src="require('@/assets/img/loginImg.webp')"></b-img>
                        </div>
                        <p id="para-img">Track all your orders with a fast system from anywhere.</p>

                    </div>
                </b-col>
                <b-col cols="12" lg="7" class="d-flex align-items-center py-5 py-lg-0">
                    <div id="form-section">
                        <div class="d-flex align-items-center justify-content-center gap-2 d-lg-none mb-5" id="container-logo">
                            <b-img style="width: 20px; aspect-ratio: 1;" :src="require('@/assets/img/logo.png')"></b-img>
                            <span><strong>GoDelivery</strong></span>
                        </div>
                        <p id="welcome-text" class="fw-bold mb-5 text-center">Welcome Back!</p>
                        <b-form id="form" class="mb-4">
                            <b-row class="g-3">
                                <b-col cols="12">
                                    <label class="mb-2">Email</label>
                                    <div class="d-flex align-items-center mb-2" id="container-input">
                                        <b-icon icon="envelope" scale="1.2" id="icon"></b-icon>
                                        <b-form-input id="input" type="email" class="bg-transparent  "
                                            placeholder="Enter your email address">
                                        </b-form-input>
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <label class="mb-2">Password</label>
                                    <div class="d-flex align-items-center mb-2" id="container-input">
                                        <b-icon icon="lock" scale="1.2" id="icon"></b-icon>
                                        <b-form-input id="input" type="password" class="bg-transparent  "
                                            placeholder="Create a password">
                                        </b-form-input>
                                    </div>
                                    <p class="mb-0 mt-2 text-end" id="frg-pass" >Forget Password</p>
                                </b-col>

                                <b-col cols="12">
                                    <b-button class="w-100" id="btn-form">Create account</b-button>
                                </b-col>

                            </b-row>

                        </b-form>

                        <p id="signup" class="text-center mb-0">Don’t have account,
                            <router-link tag="a" to="/signup" class="text-decoration-underline fw-bold">Sign up
                            </router-link>
                        </p>

                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import BlurBg from '@/components/global/BlurBg.vue';
    export default {
        name: 'LoginView',
        components:{
            BlurBg
        }
    }
</script>


<style lang="scss" scoped>
    #login{
        min-height: 100vh;
        height: 100vh;

        #BlurBg{
            right: -41px;
        }

        #form-section {
            width: 450px;
            margin: auto;

            #container-logo {

                img {
                    width: 25px;
                    aspect-ratio: 1;
                }
            }

            #welcome-text {
                font-size: 24px;
            }

            #form {

                label{
                    font-size: 14px;
                }

                #container-input {
                    border: 1px solid #A1A1AA;
                    border-radius: 8px;
                    padding: 8px 16px;
                    height: 50px;

                    &:focus-within {
                        border-color: var(--couleur-primaire-3);
                    }

                    &:focus-within #icon {
                        color: var(--colortext-primary);
                    }

                    #icon {
                        color: #A1A1AA;
                    }

                    #input {
                        border: none;
                        border-radius: var(--BRadius-titleSection);
                        color: #A1A1AA;
                        height: 50px;

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

                #frg-pass{
                    font-size: 12px;
                    cursor: pointer;
                    transition:text-decoration 0.3s ease ;
                    &:hover{
                        text-decoration: underline;
                    }
                }

                #btn-form {
                    height: 50px;
                    background-color: var(--backgroud-btn);
                    color: var(--colortext-primary);
                    border: none;

                    &:hover {
                        background-color: var(--hover-btn);
                        box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.15);
                    }
                }


            }

            #another-signup {
                font-size: 14px;

                &::before {
                    content: '';
                    flex: 1;
                    background-color: rgb(255, 255, 255, 0.24);
                    height: 2px;
                }

                &::after {
                    content: '';
                    flex: 1;
                    background-color: rgb(255, 255, 255, 0.24);
                    height: 2px;
                }
            }

            #btn-google,
            #btn-facebook {
                background-color: var(--background-section);
                padding: 12px 24px;
                height: 48px;
                font-size: 14px;
                border: none;
                transition: background-color 0.3s ease;

                &:hover {
                    background-color: #444444
                }
            }

            #signup {
                font-size: 14px;

                a {
                    color: var(--colortext-primary);
                }
            }


        }

        #container-img-section {
            padding-block: 12px;
            #img-section {
                background-color: var(--background-section);
                border-radius: var(--BRadius-Section);

            }
        }

    }


    @media  (max-width: 992px) {
        #form-section{
            margin-block: 24px;

            #welcome-text{
                font-size: 14px;
            }
        }
    }
</style>