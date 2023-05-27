<template lang="">
    <v-container class="container">
    <v-card id="signupVcard" justify-center>
        <h3>JOIN</h3>
        <div>
            <v-card-text>
                <form @submit.prevent="onSubmit" id="signupInfo">
                <table id="signupTable">
                    <tr>
                        <td>이메일</td>
                        <td class="input">
                            <input type="text" class="inputValue" v-model="email" placeholder="이메일을 입력해주세요">
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td class="input">
                            <input type="text" class="inputValue" v-model="password" placeholder="비밀번호를 입력해주세요">
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인</td>
                        <td class="input">
                            <input type="text" class="inputValue" v-model="passwordCheck">
                        </td>
                    </tr>
                </table>
                </form>

                <div id="signupSubmitBtn">
                    <v-btn type="submit" width="360" height="50" color="primary" @click="onSubmit">가입하기</v-btn> 
                </div>
            </v-card-text>
        </div>
    </v-card>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            passwordCheck: '',
            roleType: 'NORMAL',

            checkEmailValid: false,
            checkPasswordValid: false
        }
    },
    methods: {
        onSubmit () {
            this.checkEmail()
            this.checkPassword()
            if(this.checkEmailValid == true && this.checkPasswordValid == true) {
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
        checkPassword() {
            if(this.password === this.passwordCheck) {
                this.checkPasswordValid = true
            } else {
                this.checkPasswordValid = false
                alert('비밀번호를 확인해주세요.')
            }
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #signupVcard {
        width: 460px;
        height: 520px;
        margin-top: 60px;
        padding-top: 20px;
    }
    #signupSubmitBtn {
        padding-top: 140px;
        padding-left: 30px;
    }
    #signupInfo {
        height: 110px;
    }
    #signupTable {
        width: 390px;
        height: 80px;
        padding-left: 30px;
        border-spacing: 10px;
    }
    input.inputValue {
        outline: none;
        color: gray;
        width: 240px;
        font-weight: 300;
        padding: 8px 10px;
    }
    #signupTable td.input {
        border-bottom: 1px solid;
        border-color: lightgray;
        padding-bottom: 4px;
        font-size: 12px;
    }
    #signupTable td{
        padding-bottom: 4px;
        font-size: 12px;
        font-weight: 600;
    }
    #signupVcard h3 {
        text-align: center;
        font-weight: 800;
        font-size: 32px;
        padding-top: 20px;
        padding-bottom: 40px;
    }
</style>