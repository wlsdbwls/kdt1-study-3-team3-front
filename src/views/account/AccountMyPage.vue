<template lang="">
    <div>
        <div class="myPageheader">
            <h2>마이페이지</h2>
            <h4>{{ response.email }} 님 안녕하세요.</h4>
        </div>
        <div class="myPageMenu">
            <ul>
                <li>회원정보관리</li>
                <li> | </li>
                <li v-if="whatIsYourType === 'NORMAL'">
                    <a href="/ProductPurchaseCheckPage">주문내역</a>
                </li>
                <li v-if="whatIsYourType === 'BUSINESS'">
                    <a href="/MyProductListPage">상품관리</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

const accountModule = 'accountModule'

export default {
    data () {
        return {
            userToken: '',
            response: { email: '', whatIsYourType: false },
        }
    },
    methods: {
        ...mapActions(accountModule, ['requestAccountEmailToSpring'])
    },
    async mounted() {
        this.userToken = localStorage.getItem("userToken")
        this.response = await this.requestAccountEmailToSpring({userToken: this.userToken})
        this.whatIsYourType = this.response.roleType
    },
}
</script>

<style scoped>
    .myPageheader h2, h4 {
        text-align: center;
        font-weight: lighter;
        padding-block: 20px;
    }
    .myPageheader h2 {
        padding-top: 40px;
    }
    .myPageMenu ul {
	    display: flex;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        background-color: rgb(247, 247, 247);
        height: 46px;
    }
    .myPageMenu li {
        display: block;
        width: 20%;
        text-align:center;
        font-weight: lighter;
        font-size: 14px;
        color: rgb(109, 109, 109);
        padding-top: 12px;
    }
</style>