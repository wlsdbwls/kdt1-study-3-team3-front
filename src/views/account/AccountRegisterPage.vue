<template lang="">
    <v-container class="container">
    <v-card id="selectTypeVcard" justify-center>
        <h3>ICECREAM SHOP</h3>
        <div>
            <v-card-text>
                <div id="selectTypeBtn">
                    <v-btn type="submit" width="360" height="50" color="primary" @click="signUpNormal">일반 회원 가입</v-btn> 
                </div>
                <div id="selectTypeBtn">
                    <v-btn type="submit" width="360" height="50" color="primary" @click="signUpBusiness">사업자 회원 가입</v-btn> 
                </div>
            </v-card-text>
        </div>
    </v-card>
    </v-container>
</template>

<script>
import router from '@/router'

export default {
    methods: {
        signUpNormal() {
            router.push('/signup-normal')
        },
        signUpBusiness() {
            router.push('/signup-business')
        }
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #selectTypeVcard {
        width: 460px;
        height: 400px;
        margin-top: 60px;
        padding-top: 20px;
    }
    #selectTypeBtn {
        padding-top: 30px;
        padding-left: 30px;
    }
    #selectTypeVcard h3 {
        text-align: center;
        font-weight: 800;
        font-size: 32px;
        padding-top: 20px;
        padding-bottom: 40px;
    }
</style>