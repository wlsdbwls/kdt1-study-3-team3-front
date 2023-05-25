import {REQUEST_PRODUCT_TO_SPRING,
  REQUEST_PRODUCT_LIST_TO_SPRING,} from "./mutation-types";

import axiosInst from '@/utility/axiosInst'

export default {
  requestProductToSpring({ commit }, id) {
    // state.product = id;
    return (
      axios
        .get(`/product/${id}`)
        // .get(
        //   "https://94af1314-3b6d-4a44-9315-23a51cecb052.mock.pstmn.io/product"
        // )
        .then((res) => {
          commit([REQUEST_PRODUCT_TO_SPRING], res.data);
        })
        .catch(() => {
          alert("상품이 존재하지 않습니다.");
        })
    );
  },
  requestProductListToSpring ({ commit }) {
    return axiosInst.get('/product/list')
        .then((res) => {
            //get으로 받아온 res.data를  REQUEST_BOARD_LIST_TO_SPRING사용
            //REQUEST_BOARD_LIST_TO_SPRING는 받아온 데이터를 state의 boards에 넣어줌
            commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
        })
},
};
