<template>
    <section id="login">
        <b-row class="h-100 position-relative">
            <div id="blur" class="position-absolute ">
                <BlurBg />
            </div>
            <b-col class="d-none d-lg-block" lg="5">
                <div class="h-100 p-5" id="col-img">
                    <div class="d-flex align-items-center gap-2">
                        <b-img style="height: 20px; width: 20px;" :src="require('@/assets/img/logo.png')"></b-img>
                        <span class="fw-bold">GoDelivery</span>
                    </div>

                    <div class="text-center mt-5" id="container-img">
                        <b-img class="w-75" :src="require('@/assets/img/loginImg.webp')"></b-img>
                    </div>

                    <p class="mb-0  w-75" id="text">Track your all all orders by click with the fast systeme in any
                        placements</p>
                </div>
            </b-col>
            <b-col cols="12" lg="7" id="col-form" class="d-flex flex-column justify-content-evenly">
                <div class="d-flex align-items-center justify-content-center gap-2  mb-3 d-lg-none">
                    <b-img style="height: 20px; width: 20px;" :src="require('@/assets/img/logo.png')"></b-img>
                    <span class="fw-bold">GoDelivery</span>
                </div>
                <p class="mb-0 text-center fw-bold fs-3">Welcome back !</p>
                <b-form id="form">
                    <b-row class="g-3">
                        <b-col cols="12">
                            <label for="">Email</label>
                            <div class="d-flex align-items-center mb-2" id="email">
                                <b-icon icon="envelope" scale="1.2" id="icon-search"></b-icon>
                                <b-form-input class="bg-transparent  " placeholder="Enter your email">
                                </b-form-input>
                            </div>
                        </b-col>
                        <b-col cols="12">
                            <label for="">Password</label>
                            <div class="d-flex align-items-center mb-2" id="password">
                                <b-icon icon="lock" scale="1.2" id="icon-search"></b-icon>
                                <b-form-input class="bg-transparent  " placeholder="* * * * * * * *">
                                </b-form-input>
                            </div>
                            <p id="ForgetPass">Forget password</p>
                        </b-col>
                        <b-col cols="12">
                            <b-button class="w-100" id="btn">Log in</b-button>
                        </b-col>
                    </b-row>

                </b-form>
                <p id="signup" class="text-center">Don’t have account , <router-link tag="a" to="/signup"
                        class="text-decoration-underline fw-bold">Sign up</router-link>
                </p>
            </b-col>
        </b-row>
    </section>
</template>

<script>
    import BlurBg from '@/components/global/BlurBg.vue';
    export default {
        name: 'LoginView',
        components: {
            BlurBg
        }
    }
</script>

<style lang="scss" scoped>
    #login {
        height: 100vh;
        padding: 2rem;
        border-radius: var(--BRadius-Section);
        background-color: #232121;

        #blur {
            right: 0;
            width: fit-content;
            top: -48px;
            opacity: 0.7;
        }

        #col-img {
            background-color: var(--background-section);
            border-radius: var(--BRadius-Section);

            #text {
                margin-top: 5rem;
                padding-left: 24px;
                position: relative;

                &::before {
                    content: '';
                    width: 2px;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    background-color: white;
                }
            }
        }

        #col-form {
            padding-inline: 15rem;

            #signup {
                font-size: 14px;

                a {
                    color: white;
                }

            }
        }
    }

    #form {

        #email {
            border: 1px solid #A1A1AA;
            border-radius: 8px;
            padding: 8px 16px;
            height: 50px;

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

        #password {
            border: 1px solid #A1A1AA;
            border-radius: 8px;
            padding: 8px 16px;
            height: 50px;

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
            height: 50px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            border: none;
            border-radius: 8px;

            &:hover {
                background-color: var(--hover-btn);
                box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.15);
            }
        }

        label {
            font-size: 14px;
            margin-bottom: 5px;
        }

        #ForgetPass {
            font-size: 12px;
            text-align: end;

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }



    // phone
    @media (max-width: 767.98px) {
        #login {
            #col-form {
                padding: 0;
            }
        }
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
        #login {
            #col-form {
                padding: 8rem;
            }
        }
    }
</style>