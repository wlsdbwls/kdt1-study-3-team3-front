import {
  REQUEST_PRODUCT_TO_SPRING,
  REQUEST_PRODUCT_LIST_TO_SPRING,
} from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
  requestProductToSpring({ commit }, id) {
    // state.product = id;
    return axiosInst.get(`/product/${id}`)
      .then((res) => {
        console.log("상품 잘 가져오는지 확인: " + JSON.stringify(res.data))
        commit([REQUEST_PRODUCT_TO_SPRING], res.data);
      })
      .catch(() => {
        alert("상품이 존재하지 않습니다.");
      });
  },
  requestProductListToSpring({ commit }) {
    return axiosInst.get("/product/list").then((res) => {
      //get으로 받아온 res.data를  REQUEST_BOARD_LIST_TO_SPRING사용
      //REQUEST_BOARD_LIST_TO_SPRING는 받아온 데이터를 state의 boards에 넣어줌
      commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
    });
  },
  requestProductRegisterToSpring({}, payload) {
    return axiosInst.post("/product/register", payload)
      .then((res) => {
        if (res.data) {
          return res.data
      } else {
        alert("사업자 회원으로 로그인하세요");
      }
    });
  },
  requestDeletProductToSpring({}, id) {
    return axiosInst
      .delete(`/product/${id}`)
      .then((res) => {
        alert("상품이 삭제되었습니다.");
      })
      .catch(() => {
        console.log("상품삭제 실패");
      });
  },
};
