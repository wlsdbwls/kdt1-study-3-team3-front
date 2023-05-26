import axiosInst from '@/utility/axiosInst'

export default {
    requestNormalRegisterAccountToSpring ({ }, payload) {

        return axiosInst.post('/account/normal-register', payload)
                .then((res) => {
                    alert('일반(구매자) 회원 가입 성공')
                })
                .catch(() => {
                    alert('중복된 이메일이 있습니다.')
                })
    },
    requestBusinessRegisterAccountToSpring ({ }, payload) {

        return axiosInst.post('/account/business-register', payload)
                .then((res) => {
                    alert('사업자(판매자) 회원 가입 성공')
                })
                .catch(() => {
                    alert('중복된 이메일이 있습니다.')
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