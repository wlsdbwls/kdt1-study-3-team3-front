<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <table>
                <tr>
                    <td>이메일</td>
                    <td>
                        <input type="text" v-model="email">
                    </td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td>
                        <input type="text" v-model="password">
                    </td>
                </tr>
                <tr>
                    <td>회원 타입</td>
                    <td>
                        <input type="radio" v-model="roleType" name="radioBtn" value="BUSINESS">
                        <label>사업자</label>
                    </td>
                </tr>
                <tr>
                    <td>사업자번호</td>
                    <td id="businessNumber">
                        <input type="number" v-model="businessNumber">
                    </td>
                </tr>
            </table>
            <v-btn type="submit">가입하기</v-btn>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            roleType: '',
            businessNumber: 0,

            checkEmailValid: false,
            checkBusinessNumberValid: false
        }
    },
    methods: {
        onSubmit () {
            this.checkEmail()
            this.checkBusinessNumber()
            
            if(this.checkEmailValid == true && this.checkBusinessNumberValid == true) {
                const { email, password, roleType, businessNumber } = this
                this.$emit('submit', { email, password, roleType, businessNumber })
            } else {
                alert("확인 필요!")
            }
        },
        checkEmail() {
            if(this.email.includes('@')) {
                this.checkEmailValid = true
            } else {
                this.checkEmailValid = false
                alert('이메일 형식을 확인해주세요.')
            }
        },
        checkBusinessNumber() {
            if(this.businessNumber >= 1000000000 && this.businessNumber <= 9999999999) {
                this.checkBusinessNumberValid = true
            } else {
                this.checkBusinessNumberValid = false
                alert('사업자 번호를 다시 확인해주세요.')
            }
        }
    }
}
</script>

<style>
</style>