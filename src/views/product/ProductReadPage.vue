<template lang="">
  <div>
    <h1>상품 상세페이지</h1>
    <h2>상품 상세 정보</h2>
    <product-read-form v-if="product" :product="product" />
    <button>구매</button>
    <button>삭제</button>
    <button>수정</button>
    <button>목록으로</button>
  </div>
</template>
<script>
import ProductReadForm from "@/components/product/ProductReadForm.vue";
import { mapActions, mapState } from "vuex";

const productModule = "productModule";

export default {
  name: "ProductReadPage",
  components: {
    ProductReadForm,
  },
  computed: {
    ...mapState(productModule, ["product"]),
  },
  methods: {
    ...mapActions(productModule, ["requestProductToSpring"]),
  },
};
</script>
<style lang=""></style>
