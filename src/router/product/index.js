import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductReadPage from "@/views/product/ProductReadPage.vue"
import ProductListPage from "@/views/product/ProductListPage.vue"

Vue.use(VueRouter)

const productRoutes = [
  {
    path: "/productReadPage",
    name: "productReadPage",
    component: ProductReadPage,
  },
  {
    path: "/productListPage",
    name: "ProductListPage",
    component: ProductListPage,
  },
]

export default productRoutes
