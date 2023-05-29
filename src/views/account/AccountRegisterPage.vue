<template lang="">
    <v-container class="container">
    <v-card id="selectTypeVcard" justify-center>
        <h2 class="main-font">ICECREAM</h2>
        <!-- <v-img :src="require('@/assets/images/main_1.jpg')" :width="200"></v-img> -->
        <div>
            <v-card-text>
                <div id="selectTypeBtn">
                    <v-btn block rounded="xl" type="submit" height="50" color="#f18893" @click="signUpNormal" dark>일반 회원 가입</v-btn> 
                </div>
                <div id="selectTypeBtn">
                    <v-btn block rounded="xl" type="submit" height="50" color="#f18893" @click="signUpBusiness" dark>사업자 회원 가입</v-btn> 
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
        width: 400px;

    }
    #selectTypeVcard h2 {
        text-align: center;
        font-weight: 800;
        font-size: 48px;
        color: #ffcfd4;
        padding-top: 20px;
        padding-bottom: 40px;
    }
    @import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap');
    h2.main-font {
        font-family: 'Cherry Bomb One', cursive;
    }
</style>