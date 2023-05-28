<template>
   <div>
    <v-data-table :items="tableData" :headers="tableHeaders" @click="productRead" >
    <template v-slot:item.productImg="{item}">
    <v-img :src="item.productImg" :width="50" :heigth="50"></v-img>
  </template>
  <template v-slot:item.productName="{ item }">
    <td @click="handleCellClick(item)">{{ item.productName }}</td>
  </template>
  </v-data-table>
  <div>
  <v-btn @click="accountCheck">상품 등록</v-btn>
  </div>
  </div>
</template>

<script>
import axiosInst from '@/utility/axiosInst';
import { mapActions, mapState } from 'vuex';

const productModule='productModule'
export default {
  methods:{
    ...mapActions(productModule,['requestProductListToSpring']),
    productRead(item){
          this.$router.push({name: 'ProductReadPage', params: {id:item.productId}})
        },
    handleCellClick(item) { 
          this.$router.push({name: 'ProductReadPage', params: {id:item.productId}})
        },
    accountCheck(){
      const{ userToken } =this
      axiosInst.post('/account/businessCheck',{ userToken })
      .then((res)=>{
        console.log("돌아오는 값: "+res.data)
        if(res.data===true){
          this.$router.push({ name: 'ProductRegisterPage'})
        }
      })
      .catch((res)=>{
        alert("당신은 사업자가 아닙니다.")
      })
    },  
  },
  mounted() {
    this.requestProductListToSpring()
    // 리스트 가져오는 거 실행
    this.tableData=this.products
    // tableData에 가져온 products 넣어라
    this.userToken = localStorage.getItem("userToken")
    //로컬 스토리지의 유저 토큰 가져와라
  },
  computed:{
    ...mapState(productModule,['products']),
  },
  data() {
    return {
      userToken:'',
      tableData: [], 
      tableHeaders: [
        {text:'상품 이미지',value:'productImg'},
        {text:'상품명',value:'productName'},
        {text:'가격',value:'productPrice'},
        {text:'상품 설명',value:'productInfo'}], // 테이블 헤더 배열
    };
  },
}
</script>