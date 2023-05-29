<template lang="">
    <div><br/>
        <!-- <h2 style="text-align: center">상품 등록 페이지</h2><br/> -->
        <product-register-form align="center" @submit="onSubmit"/>
    </div>
</template>

<script>
import ProductRegisterForm from '@/components/product/ProductRegisterForm.vue';

import { mapActions } from 'vuex';
const productModule = 'productModule'

export default {
    components: {
        ProductRegisterForm
    },
    methods: {
        ...mapActions(
            productModule, ['requestProductRegisterToSpring']
        ),
        async onSubmit(payload) {
            const product = await this.requestProductRegisterToSpring(payload)
            console.log('product: ' + JSON.stringify(product))
        }
    }
}
</script>

<style lang="">
    
</style>