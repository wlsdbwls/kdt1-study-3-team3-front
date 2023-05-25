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
                        <input type="radio" v-model="roleType" name="radioBtn" value="NORMAL">
                        <label>일반</label>
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

            checkEmailValid: false
        }
    },
    methods: {
        onSubmit () {
            this.checkEmail()
            if(this.checkEmailValid == true) {
                const { email, password, roleType } = this
                this.$emit('submit', { email, password, roleType })
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
    }
}
</script>

<style lang="">
    
</style>