<template>
      <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Wishlist</h4>
                  </div>
                  <div class="card-body whishlist-main">
                    <div class="row"> 
                      <div class="col-xl-2 col-md-4 col-sm-6 col-lg-3" v-for="cards in whislist" :key="cards">
                        <div class="prooduct-details-box">                                 
                          <div class="d-block"><router-link to="/ecommerce/details/1"> <img class="align-self-center img-fluid"  :src="getImgUrl(cards.img)" alt=""></router-link>
                            <div class="flex-grow-1">
                              <div class="product-name"><router-link to="/ecommerce/details/1">
                                  <h6>{{cards.name}}</h6></router-link></div>
                              <ul class="rating">
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa " :class="cards.star1"></i></li>
                                <li><i class="fa " :class="cards.star2"></i></li>
                              </ul>
                              <div class="price">Price<span>: {{cards.price}}$</span></div>
                              <div class="avaiabilty">
                                <div :class="cards.color">{{cards.stock}}</div>
                              </div><router-link to="/ecommerce/cart" class="btn btn-primary btn-xs"> Move to Cart</router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  
     computed: {
    ...mapState({
      whislist:(state)=>state.ecommerce.whislist,    
    }),
   },
    methods:{
         getImgUrl(path) {
       return require("@/assets/images/" + path);
     },
    }
}
</script>