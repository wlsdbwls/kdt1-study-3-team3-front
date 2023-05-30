<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <h1수정폼</h1>
            <table class="detailbox1">
                <tr>
                    <td class="textstyle1">상품 번호</td>
                    <td>
                        <input type="text" :value="product.id" disabled/>
                    </td>
                </tr>
                <tr>
                    <td class="textstyle1">상품명</td>
                    <td>
                        <input type="text" :v-model="product.productName"/>
                    </td>
                </tr>
                <tr>
                    <td class="textstyle1">상품 가격</td>
                    <td>
                        <input type="number" v-model="product.productPrice">
                    </td>
                </tr>
                <tr>
                    <td class="textstyle1">상품 정보</td>
                    <td>
                        <input type="text" v-model="product.productInfo">
                    </td>
                </tr>
            </table>
            <div>
                <v-btn type="submit" class="detailbox1" color="#f18893">수정완료</v-btn>
                <router-link :to="{
                    name: 'ProductReadPage',
                    params: { id: product.id.toString() }
                }">
                취소
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data () {
        return {
            productName: '',
            productPrice: 0,
            productInfo: ''
        }
    },
    created () {
        this.productName = this.product.productName
        this.productPrice = this.product.productPrice
        this.productInfo = this.product.productInfo
    },
    methods: {
        onSubmit () {
            const { productName, productPrice, productInfo } = this
            this.$emit('submit', { productName, productPrice, productInfo})
        }
    }
}
</script>
<style scoped>
    .detailbox1 {
    margin: 70px;
    }
    table td {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    }
    .textstyle1 {
    color: #f18893;
    font-weight: bold;
    }
    
</style>