<template lang="">
    <v-container>
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
          <td style="font-weight: bold">상품명</td>
          <td>
            <input style="border: 1px solid grey; border-radius: 10px" 
            type="text" v-model="productName"
            onclick="if(this.value===' 상품명') this.value='';"/>
          </td>
        </tr>
        <tr>
          <td style="font-weight: bold">상품 가격</td>
          <td>
            <input style="border: 1px solid grey; border-radius: 10px" 
            type="number" v-model="productPrice" step="10"
            onclick="if(this.value==='0') this.value='';"/>
          </td>
        </tr>
        <tr>
          <td style="font-weight: bold">상품 정보</td>
          <td>
            <textarea style="border: 1px solid grey; border-radius: 10px"
            cols="80" rows="20" v-model="productInfo"
            onclick="if(this.value===' 세부 정보') this.value='';"/>
            <!-- 위아래로 가운데 정렬을 주고 싶은데 방법을 모르겠음 -->
          </td>
        </tr>
        <tr>
          <td style="font-weight: bold">상품 이미지</td>
          <td>
            <input type="file" id="files" ref="files"
                    multiple @change="handleFileUpload"/>
          </td>
        </tr>
      </table>

      <p></p>
      <div>
        <v-btn raised type="submit">등록</v-btn><br/>
        <router-link style="font-size: 10px" :to="{ name: 'ProductListPage' }">
                    취소
        </router-link>
      </div>
    </form>
  </v-container>
</template>

<script>

import { mapActions } from 'vuex';

const productModule = 'productModule'

export default {
    data() {
        return {
            productName: ' 상품명',
            productPrice: 0,
            productInfo: ' 세부 정보',
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

<style>
</style>