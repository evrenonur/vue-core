<template>
      <div class="col-sm-12 empty-cart-cls text-center" v-if="!cart.length" >
                  <img :src="getImgUrl('ecommerce/icon-empty-cart.png')" class="img-fluid mb-4"/>
                  <h3><strong>Your Cart is Empty</strong></h3>
                  <h4>Add something to make me happy :)</h4>
                  <router-link :to="'/ecommerce/product'" class="btn btn-primary cart-btn-transform m-t-15" >continue shopping</router-link>
                </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components:{},
  data() {
    return {
      counter: 1,
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.products.cart,
      getAmount() {
        return (this.totalAmount =
          this.$store.getters["products/getTotalAmount"]);
      },
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    removeProduct: function (product) {
      this.$store.dispatch("products/removeProduct", product);
    },
    increment(product, qty = 1) {
      this.$store.dispatch("products/updateCartQuantity", {
        product: product,
        qty: qty,
      });
    },
    decrement(product, qty = -1) {
      this.$store.dispatch("products/updateCartQuantity", {
        product: product,
        qty: qty,
      });
    },
  },
};
</script>