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
}