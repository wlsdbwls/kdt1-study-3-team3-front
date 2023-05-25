<template lang="">
  <div>
    <h1>상품 상세페이지</h1>
    <h2>상품 상세 정보</h2>
    <product-read-form />
    <button>구매</button>
    <button>삭제</button>
    <button>수정</button>
  </div>
</template>
<script>
import ProductReadForm from "@/components/product/ProductReadForm.vue";
export default {
  name: "ProductReadPage",
  components: {
    ProductReadForm,
  },
};
</script>
<style lang=""></style>
