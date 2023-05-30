<template lang="">
  <div>
    <product-read-form v-if="product" :product="product" />
    <p v-else>로딩중 ...</p>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn @click="productOrder" color="#f18893">구매</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="productDelete" color="#f18893">삭제</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="productModifyPage" color="#f18893">수정</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="1">
          <v-btn @click="productListPage" color="#f18893">목록으로</v-btn>
        </v-col>
      </v-row>
    </v-container>
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
      type: String,
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
      this.$router.push({ name: "ProductModifyPage", params: { id: this.id } });
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
    productOrder() {
      axiosInst
        .post("/orders/register", {
          productId: this.id,
          userToken: localStorage.getItem("userToken"),
        })
        .then((res) => {
          if (res.data === true) {
            router.push("/productPurchaseCheckPage");
          } else {
            alert("사업자는 구매가 불가합니다!");
          }
        });
    },
  },
  created() {
    this.requestProductToSpring(this.id);
  },
};
</script>

<style lang=""></style>
