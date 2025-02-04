<template>
    <section id="signup">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <div id="img-section"></div>
                </b-col>
                <b-col cols="7">
                    <div id="form-section">
                        <div class="d-flex align-items-center" id="container-logo">
                            <b-img :src="require('@/assets/img/logo.png')"></b-img>
                            <span><strong>GoDelivery</strong></span>
                        </div>
                        <p id="welcome-text" class="fw-bold">Start creating your account for free.</p>
                        <b-form id="form">
                            <b-row class="g-3">
                                <b-col cols="12" lg="6">
                                    <label class="mb-2">Full Name</label>
                                    <div class="d-flex align-items-center mb-2" id="container-input">
                                        <b-icon icon="person" scale="1.2" id="icon"></b-icon>
                                        <b-form-input id="input" type="text" class="bg-transparent  "
                                            placeholder="Enter your full name">
                                        </b-form-input>
                                    </div>
                                </b-col>
                                <b-col cols="12" lg="6">
                                    <label class="mb-2">Phone</label>
                                    <div class="d-flex align-items-center mb-2" id="container-input">
                                        <b-icon icon="telephone" scale="1.2" id="icon"></b-icon>
                                        <b-form-input id="input" type="tel" class="bg-transparent  "
                                            placeholder="Enter your phone number">
                                        </b-form-input>
                                    </div>
                                </b-col>
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
                                </b-col>

                                <b-col cols="12">
                                    <b-button class="w-100" id="btn-form">Create account</b-button>
                                </b-col>

                            </b-row>

                        </b-form>

                        <p class="d-flex align-items-center gap-2" id="another-signup">Sign up With</p>
                        <div class="d-flex align-items-center gap-2" >
                            <b-button></b-button>
                            <b-button></b-button>
                        </div>
                     
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'SignupView'
    }
</script>


<style lang="scss" scoped>
    #signup {
        #form-section {
            #container-logo {

                img {
                    width: 25px;
                    aspect-ratio: 1;
                }
            }

            #welcome-text {
                padding-left: 10px;
                position: relative;

                &::before {
                    content: '';
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    position: absolute;
                    background-color: var(--colortext-primary);
                }
            }

            #form {

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
                        height: 54px;

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

                #btn-form {
                    height: 54px;
                    background-color: var(--backgroud-btn);
                    color: var(--colortext-primary);
                    border: none;

                    &:hover {
                        background-color: var(--hover-btn);
                        box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.15);
                    }
                }


            }

            #another-signup{
                    font-size: 14px;

                    &::before{
                        content: '';
                        flex: 1;
                        background-color: rgb(255, 255, 255 , 0.24);
                        height: 2px;
                    }
                    &::after{
                        content: '';
                        flex: 1;
                        background-color: rgb(255, 255, 255 , 0.24);
                        height: 2px;
                    }
                }


        }
    }
</style>