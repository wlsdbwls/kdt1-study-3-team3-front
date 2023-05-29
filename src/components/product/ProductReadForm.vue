<template lang="">
  <div>
    <v-container fluid>
        <v-row justify="center">
          <v-col cols="auto">
            <v-img src="@/assets/uploadImgs/0fb102f0-6fc6-4036-be54-532480f3fbadmario_run.jpg"></v-img>
          </v-col>
          <v-col v-for="(productImagesPath, idx) in product.productImagesPathList" :key="idx" cols="3">
            <v-img :src="productImagesPath" aspect-ratio="1" class="grey lighten-2"></v-img>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p>상품명</p>
          </v-col>
          <v-col cols="2">
            <input type="text" :value="product.productName" readonly />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p>상품 가격</p>
          </v-col>
          <v-col cols="2">
            <input type="number" :value="product.productPrice" readonly />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p>상품 상세 정보</p>
          </v-col>
          <v-col cols="2">
            <input type="text" :value="product.productInfo" readonly />
          </v-col>
        </v-row>
      </v-container>
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
