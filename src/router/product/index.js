import Vue from "vue";
import VueRouter from "vue-router";

import ProductReadPage from "@/views/product/ProductReadPage.vue";
import ProductListPage from "@/views/product/ProductListPage.vue";
import ProductRegisterPage from "@/views/product/ProductRegisterPage.vue";
import ProductModifyPage from "@/views/product/ProductModifyPage.vue";
import ProductPurchaseCheckPage from "@/views/product/ProductPurchaseCheckPage.vue";

Vue.use(VueRouter);

const productRoutes = [
  {
    path: "/productReadPage",
    name: "productReadPage",
    component: ProductReadPage,
    props: true,
  },
  {
    path: "/productListPage",
    name: "ProductListPage",
    component: ProductListPage,
  },
  {
    path: "/productRegisterPage",
    name: "ProductRegisterPage",
    component: ProductRegisterPage,
  },
  {
    path: "/productModifyPage",
    name: "ProductModifyPage",
    component: ProductModifyPage,
  },
  {
    path: "/productPurchaseCheckPage",
    name: "ProductPurchaseCheckPage",
    component: ProductPurchaseCheckPage,
  },
];

export default productRoutes;
