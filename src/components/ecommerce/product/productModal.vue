<template>
  <div class="modal fade" id="exampleModal" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="product-box row">
            <div class="product-img col-lg-6">
              <img class="img-fluid" v-if="product.images" :src="getImgUrl(product.images[0])" alt />
            </div>
            <div class="product-details col-lg-6">
              <router-link to="/ecommerce/details/1" data-bs-original-title="" title="">
                <h4>{{ quickViewProduct.name }}</h4>
              </router-link>
              <div class="product-price">
                {{ n(quickViewProduct.price, "currency") }}
                <del>{{ quickViewProduct.salePrice }} </del>
              </div>
              <div class="product-view">
                <h6 class="f-w-600">Product Details</h6>
                <p class="mb-0"> Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam eaque ipsa, quae ab illo. </p>
              </div>
              <div class="product-size">
                <ul>
                  <li> <button class="btn btn-outline-light" type="button" data-bs-original-title="" title="">M</button>
                  </li>
                  <li>
                    <button class="btn btn-outline-light" type="button" data-bs-original-title="" title="">L</button>
                  </li>
                  <li> <button class="btn btn-outline-light" type="button" data-bs-original-title="" title="">Xl</button>
                  </li>
                </ul>
              </div>
              <div class="product-qnty">
                <h6 class="f-w-600">Quantity</h6>
                <fieldset class="qty-box">
                  <div class="input-group bootstrap-touchspin">
                    <button class="btn btn-primary btn-square bootstrap-touchspin-down" v-on:click="decrement(item)"
                      type="button"><i class="fa fa-minus"></i></button>
                    <input class="touchspin text-center form-control" v-model="counter" name="item.quantity" type="text">
                    <button class="btn btn-primary btn-square bootstrap-touchspin-up" v-on:click="increment(item)"
                      type="button">
                      <i class="fa fa-plus"></i></button>
                  </div>
                </fieldset>
                <div class="addcart-btn mt-3">
                  <router-link to="/ecommerce/cartView">
                    <button class="btn btn-primary m-r-10" type="button" data-original-title="btn btn-info-gradien" title
                      @click="addToCart(quickViewProduct, counter)" data-bs-dismiss="modal">
                      Add To Cart
                    </button>
                  </router-link>
                  <a href="javascript:void(0)" class="btn btn-primary cart-btn-transform"
                    @click.prevent="this.$router.push('/ecommerce/checkout')" data-bs-dismiss="modal">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productMixin from "@/mixins/commen/productMixin"
export default {
  mixins: [productMixin],
  mounted() {

  }
};
</script>