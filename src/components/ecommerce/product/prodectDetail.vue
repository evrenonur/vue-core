<template>
  <div class="product-wrapper-grid " :class="listViewEnable ? 'list-view' : ''">
    <div class="row">
      <div
        :class="[col2 ? 'col-md-6' : col3 ? 'col-lg-4 col-md-6' : col4 ? 'col-xl-3 col-md-6' : col6 ? 'col-xl-2 col-lg-4 col-md-6' : list ? 'col-xl-12' : 'col-xl-3 col-md-6',]"
        v-for="(product, index) in filterProduct" :key="index">
        <div class="card">
          <div class="product-box">
            <div class="product-img">
              <div class="ribbon ribbon-danger" v-if="product.sale">Sale</div>
              <div class="ribbon ribbon-success ribbon-right" v-if="product.off">50%</div>
              <img class="img-fluid" :src="getImgUrl(product.images[0])" alt />
              <div class="product-hover">
                <ul>
                  <router-link :to="'/ecommerce/cart'">
                    <li @click="addToCart(product)">
                      <i class="icon-shopping-cart"> </i>
                    </li>
                  </router-link>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <li @click="quickView(product)">
                      <i class="icon-eye"> </i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div class="modal fade" id="exampleModal" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="product-box row">
                      <div class="product-img col-lg-6"><img class="img-fluid" v-if="quickViewProduct.images"
                          :src="getImgUrl(quickViewProduct.images[0])" alt /></div>
                      <div class="product-details col-lg-6">
                        <h4 @click.prevent="this.$router.push('/ecommerce/details/' + quickViewProduct.sku)"
                          data-bs-dismiss="modal">{{ quickViewProduct.name }}</h4>
                        <div class="product-price">
                          ${{ quickViewProduct.price }}
                          <del>${{ quickViewProduct.salePrice }} </del>
                        </div>
                        <div class="product-view">
                          <h6 class="f-w-600">Product Details</h6>
                          <p class="mb-0"> Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo. </p>
                        </div>
                        <div class="product-size">
                          <ul>
                            <li> <button class="btn btn-outline-light" type="button" data-bs-original-title=""
                                title="">M</button></li>
                            <li> <button class="btn btn-outline-light" type="button" data-bs-original-title=""
                                title="">L</button></li>
                            <li> <button class="btn btn-outline-light" type="button" data-bs-original-title=""
                                title="">Xl</button> </li>
                          </ul>
                        </div>
                        <div class="product-qnty">
                          <h6 class="f-w-600">Quantity</h6>
                          <fieldset class="qty-box">
                            <div class="input-group bootstrap-touchspin">
                              <button class="btn btn-primary btn-square bootstrap-touchspin-down"
                                v-on:click="decrement(item)" type="button"><i class="fa fa-minus"></i></button>
                              <input class="touchspin text-center form-control" v-model="counter" name="item.quantity"
                                type="text">
                              <button class="btn btn-primary btn-square bootstrap-touchspin-up"
                                v-on:click="increment(item)" type="button">
                                <i class="fa fa-plus"></i></button>
                            </div>
                          </fieldset>
                          <div class="addcart-btn mt-3">
                            <router-link to="/ecommerce/cart">
                              <button class="btn btn-primary m-r-10" type="button"
                                data-original-title="btn btn-info-gradien" title
                                @click="addToCart(quickViewProduct, counter)" data-bs-dismiss="modal">
                                Add To Cart
                              </button>
                            </router-link>
                            <a href="javascript:void(0)" class="btn btn-primary cart-btn-transform"
                              @click.prevent="this.$router.push('/ecommerce/checkout')" data-bs-dismiss="modal">Buy
                              Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-details">
              <router-link :to="'/ecommerce/details/' + product.sku">
                <h4>{{ product.name }}</h4>
              </router-link>
              <p>{{ product.shortDescription }}</p>
              <div class="product-price">
                ${{ product.price }}
                <del>${{ product.salePrice }}</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productMixin from "@/mixins/commen/productMixin"
export default {
  mixins: [productMixin],
};
</script>