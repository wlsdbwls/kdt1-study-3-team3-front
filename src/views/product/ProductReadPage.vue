<template lang="">
  <div>
    <h1>상품 상세페이지</h1>
    <h2>상품 상세 정보</h2>
    <product-read-form v-if="product" :product="product"/>
    <p v-else>로딩중 .......</p>
    <v-btn @click="productOrder">구매</v-btn>
    <v-btn @click="productDelete">삭제</v-btn>
    <v-btn @click="productModifyPage">수정</v-btn>
    <v-btn @click="productListPage">목록으로</v-btn>
  </div>
</template>
<script>
import ProductReadForm from "@/components/product/ProductReadForm.vue";
import { mapActions, mapState } from "vuex";
import router from "@/router";
import axiosInst from "@/utility/axiosInst";

const productModule = "productModule";

export default {
  name: "ProductReadPage",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    ProductReadForm,
  },
  computed: {
    ...mapState(productModule, ["product"]),
  },
  methods: {
    ...mapActions(productModule, [
      "requestProductToSpring",
      "requestDeleteProductToSpring",
    ]),
    productListPage() {
      router.push("/productListPage");
    },
    productModifyPage() {
      router.push("/productModifyPage");
    },
    async productDelete() {
      if (!confirm("정말 삭제하시겠습니까?")) {
        console.log("삭제하지 않습니다.");
      } else {
        await alert("확인(예)을 누르셨습니다.");
        await this.requestDeleteProductToSpring(this.id);
        await this.productListPage();
      }
    },
    productOrder () {
      axiosInst.post("/orders/register", {productId: this.id, userToken: localStorage.getItem("userToken")})
      router.push("/productPurchaseCheckPage");
    }
  },
  created() {
      this.requestProductToSpring(this.id);
  },
};
</script>

<style lang="">
</style>
