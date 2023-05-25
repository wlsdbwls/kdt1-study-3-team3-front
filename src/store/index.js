import Vue from 'vue'
import Vuex from 'vuex'

import accountModule from '@/store/account/AccountModule'
import productModule from '@/store/product/productModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    accountModule: accountModule,
    productModule: productModule
  },
})

export default store