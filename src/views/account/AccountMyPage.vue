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
                <li v-if="this.whatIsYourType === 'NORMAL'">
                    <a href="/ProductPurchaseCheckPage">주문내역</a>
                </li>
                <li v-if="this.whatIsYourType === 'BUSINESS'" @click="registeredProduct">
                    <a>상품관리</a>
                    <div v-if="myProductList" class="productListFormContainer">
                    <my-product-list-form />
                </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import myProductListForm from '@/components/account/MyProductListForm.vue';

const accountModule = 'accountModule'

export default {
    data () {
        return {
            userToken: '',
            response: { email: '', whatIsYourType: false },
            myProductList: false
        }
    },
    components: {
        myProductListForm,
    },
    methods: {
        ...mapActions(accountModule, ['requestAccountEmailToSpring']),
        registeredProduct() {
            this.myProductList = true
        }
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
     .productListFormContainer {
        position: fixed;
        top: 29%;
        left: 0;
        width: 100%;
        height: 500px; /* 원하는 크기로 조절 */
        background-color: white; 
     }
</style>