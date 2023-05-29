<template lang="">
    <v-container class="container">
      <v-card id="productRegisterCard" justify-center>
      <h2>상품 등록</h2>
    <div>
      <v-card-text>
        <form @submit.prevent="onSubmit">
        <table id="productRegisterTable">
        <tr>
          <td style="font-weight: bold">상품명</td>
          <td>
            <v-text-field type="text" class="inputValue" v-model="productName" placeholder="상품명을 입력하세요"/>
          </td>
        </tr> 
        <tr>
          <td style="font-weight: bold">상품 가격</td>
          <td>
            <v-text-field type="number" class="inputValue" v-model="productPrice" step="10"
            placeholder="가격을 입력하세요"/>
          </td>
        </tr>
        <tr>
          <td style="font-weight: bold">상품 정보</td>
          <td>
            <v-textarea class="inputValue" rows="4" v-model="productInfo" 
            placeholder="상품의 세부 정보를 입력하세요"/>
          </td>
        </tr>
        <p></p>
        <tr>
          <td style="font-weight: bold">이미지</td>
          <td>
            <input type="file" id="files" ref="files"
                    multiple @change="handleFileUpload"/>
          </td>
        </tr></br>
        <p></p>
        </table>
        <v-btn raised type="submit" color="#f18893">등록</v-btn></br>
        <router-link style="font-size: 13px" :to="{ name: 'ProductListPage' }">
                    취소
        </router-link>
    </form>
  </v-card-text>
  </div>
  </v-card>

  </v-container>
</template>

<script>

import { mapActions } from 'vuex';

const productModule = 'productModule'

export default {
  data() {
    return {
      productName: '',
      productPrice: '',
      productInfo: '',
      files: '',
    }
  },
  methods: {
    ...mapActions(
      productModule, ['requestProductRegisterToSpring']
    ),

    async onSubmit() {
      let formData = new FormData()
      let aboutProduct = {
        productName: this.productName,
        productPrice: this.productPrice,
        productInfo: this.productInfo,
        userToken: localStorage.getItem("userToken")
      }

      for (let idx = 0; idx < this.files.length; idx++) {
        formData.append('productImg', this.files[idx])
      }

      formData.append(
        "aboutProduct",
        new Blob([JSON.stringify(aboutProduct)], { type: "application/json" })
      )

      this.$emit("submit", formData)
      await this.$router.push({ name: 'ProductListPage' })

    },
    handleFileUpload() {
      this.files = this.$refs.files.files
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#productRegisterCard {
  width: 500px;
  height: 550px;
  margin-top: 60px;
  padding-top: 20px;
}

.inputValue {
  outline: none;
  color: gray;
  width: 270px;
  font-weight: 300;
  font-size: 15px;
  padding: 8px 10px;
}
</style>