<template lang="">
    <div>
        <h2>회원 가입 페이지</h2>
        <p>원하시는 회원 타입을 선택하세요.</p>
        <v-btn @click="signUpNormal">일반(구매자) 회원 가입하기</v-btn>
        <v-btn @click="signUpBusiness">사업자(판매자) 회원 가입하기</v-btn>
    </div>
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

<style lang="">
    
</style>