<template lang="">
  <div>
    <h1>상품정보폼</h1>
    <table>
      <tr>
        <td>상품명</td>
        <td>
          <input type="text" :value="product.productName" readonly />
        </td>
      </tr>
      <tr>
        <td>상품 가격</td>
        <td>
          <input type="number" :value="product.productPrice" readonly />
        </td>
      </tr>
      <tr>
        <td>상품 이미지</td>
        <td>
          <input type="text" :value="product.productImg" readonly />
        </td>
      </tr>
      <tr>
        <td>상품 상세 정보</td>
        <td>
          <input type="text" :value="product.productInfo" readonly />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "ProductReadForm",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
