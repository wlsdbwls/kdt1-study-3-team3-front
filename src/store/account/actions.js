import axiosInst from '@/utility/axiosInst'

export default {
    requestNormalRegisterAccountToSpring ({ }, payload) {

        return axiosInst.post('/account/normal-register', payload)
            .then((resNormalRegister) => {
                if(resNormalRegister.data == true) {
                    alert('일반(구매자) 회원 가입 성공')
                } else {
                    alert('구매자 회원가입 실패!')
                }
            })
    },
    requestBusinessRegisterAccountToSpring ({ }, payload) {

        return axiosInst.post('/account/business-register', payload)
                .then((resBusinessRegister) => {
                    if(resBusinessRegister.data == true) {
                        alert('사업자(판매자) 회원 가입 성공')
                    } else {
                        alert('판매자 회원가입 실패!')
                    }
                })
    },
    requestLoginAccountToSpring ({ }, payload) {

        return axiosInst.post('/account/login', payload)
                .then((resLogin) => {
                    if(resLogin.data != '') {
                        alert('로그인 성공!')
                        localStorage.setItem("userToken", resLogin.data)
                    } else {
                        alert('이메일과 비밀번호를 다시 확인해주세요!')
                    }
                })
    },
}