<template lang="">
    <nav>
        <v-app-bar color="primary" app dark>
            <v-btn v-if="!isLogin" text @click="signUp">
                <span>회원가입</span>
                <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>
            <v-btn v-if="!isLogin" text @click="signIn">
                <span>로그인</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <v-btn v-if="isLogin" text @click="signOut">
                <span>로그아웃</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
import router from '@/router'

export default {
    data () {
        return {
            accountId: 0,
            isLogin: false,
        }
    },
    methods: {
        signUp () {
            router.push('/signup')
        },
        signIn () {
            router.push('/account-login')
            this.isLogin = true
        },
        signOut () {
            localStorage.removeItem("userToken")
            this.isLogin = false
        },
    },
    mounted () {
        this.accountId = localStorage.getItem("userToken")
        if (this.accountId > 0) {
        this.isLogin = true
    }
  } 
}
</script>

<style scoped>
</style>