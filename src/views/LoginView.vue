<template>
    <section id="login" >
        <b-row class="h-100" >
                <b-col>
                    <div class="h-100 p-4" id="col-img" >
                        <div class="d-flex align-items-center gap-2" >
                            <b-img style="height: 20px; width: 20px;" :src="require('@/assets/img/logo.png')" ></b-img>
                            <span class="fw-bold" >GoDelivery</span>
                        </div>

                        <div id="container-img" >
                            <b-img :src="require('@/assets/img/loginImg.webp')" ></b-img>
                        </div>

                        <p class="mb-0" >Track your all all orders by click with the fast systeme in any placements</p>
                    </div>
                </b-col>
                <b-col>
                    <p class="mb-0" >Welcome back !</p>
                    <b-form id="form">
                        <div class="d-flex align-items-center mb-2" id="email">
                            <b-icon icon="envelope" scale="1" id="icon-search"></b-icon>
                            <b-form-input class="bg-transparent  " placeholder="Search status" v-model="inputSearch">
                            </b-form-input>
                        </div>
                        <div class="d-flex align-items-center mb-2" id="password">
                            <b-icon icon="envelope" scale="1" id="icon-search"></b-icon>
                            <b-form-input class="bg-transparent  " placeholder="Search status" v-model="inputSearch">
                            </b-form-input>
                        </div>
                        <b-button class="w-100" id="btn">Subscribe Now</b-button>
                    </b-form>
                </b-col>
        </b-row>
    </section>
</template>

<script>
export default{
    name:'LoginView'
}
</script>

<style  lang="scss" scoped>
#login{
    height: 100vh;
    padding-block: 12px;
    border-radius: var(--BRadius-Section);
    #col-img{
        background-color: var(--background-section);
    }
}
            #form {
                #email,password {
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


</style>