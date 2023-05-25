import REQUEST_PRODUCT_TO_SPRING from "./mutation-types";

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
};
