<template lang="">
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(imagePath, idx) in product.productImagesPathList"
        :key="idx"
      >
        <v-img
          :src="require(`@/assets/uploadImgs/${imagePath}`)"
          aspect-ratio="1"
          class="grey lighten-2 imgbox1"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <table class="detailbox1">
      <tr>
        <td class="textstyle1">상품명</td>
        <td>
          <input type="text" :value="product.productName" readonly />
        </td>
      </tr>
      <tr>
        <td class="textstyle1">상품 가격</td>
        <td>
          <input type="number" :value="product.productPrice" readonly />
        </td>
      </tr>
      <tr>
        <td class="textstyle1">상품 정보</td>
        <td>
          <input type="text" :value="product.productInfo" readonly />
        </td>
      </tr>
      <tr>
        <td class="textstyle1">상품 이미지</td>
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
<style scoped>
.imgbox1 {
  margin: 0px auto;
  width: 500px;
  height: 500px;
}
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
