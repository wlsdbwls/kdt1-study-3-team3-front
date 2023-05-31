<template>
    <div>
        <v-data-table :items="findProduct" :headers="tableHeaders">
            <template v-slot:item.productImagePath="{ item }">
                <v-img :src="require(`@/assets/uploadImgs/${item.productImagePath}`)" :width="50" :heigth="50"
                    @click="productRead(item)"></v-img>
            </template>
            <template v-slot:item.productName="{ item }">
                {{ item.productName }}<td @click="handleCellClick(item)"></td>
            </template>
        </v-data-table>
        <div>
            <input type="text" :value="searchTerm" @change="searchTerm = $event.target.value" placeholder="상품명을 입력하세요" />
            <v-btn :small=true color="#f18893" raised @click="findProduct">검색</v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

const productModule = 'productModule'

export default {
    methods: {
        ...mapActions(productModule, ['requestBusinessProductListToSpring']),
        productRead(item) {
            this.$router.push({ name: 'ProductReadPage', params: { id: item.id } })
        },
        handleCellClick(item) {
            this.$router.push({ name: 'ProductReadPage', params: { id: item.id } })
        },
    },

    async mounted() {
        this.userToken = localStorage.getItem("userToken");
        await this.requestBusinessProductListToSpring(this.userToken);
    },
    computed: {
        ...mapState(productModule, ['products']),
        findProduct() {
            return this.products.filter((product) =>
                product.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        },
    },
    data() {
        return {
            userToken: '',
            tableHeaders: [
                { text: '상품 이미지', value: 'productImagePath' },
                { text: '상품명', value: 'productName' },
                { text: '가격', value: 'productPrice' },
                { text: '상품 설명', value: 'productInfo' }], // 테이블 헤더 배열
            searchTerm: '',
        };
    },
}
</script>