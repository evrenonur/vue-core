<template>
     <div class="col-xl-4 col-lg-6 col-md-12 box-col-50 cols-xl-50">
                <div class="card product-slider">
                  <div class="card-header pb-0">
                    <div class="d-flex justify-content-between">
                      <div class="flex-grow-1">
                        <p class="square-after f-w-600">Latest Offer Product<i class="fa fa-circle"> </i></p>
                        <h4>-60% Offer</h4>
                      </div>
                     
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="owl-carousel owl-theme" id="owl-carousel-1">
                          <swiper :space-between="20"  :pagination="{clickable: true,}" :modules="modules">
                               <swiper-slide>
                      <div class="item"><img class="img-fluid" src="@/assets/images/dashboard-2/1.png" alt="">
                        <div class="product-content"> 
                          <div class="badge badge-primary">New</div>
                          <h4>  <router-link to="/ecommerce/product">Black Apple Airpod </router-link><i class="fa fa-check-circle"></i></h4>
                          <h5 class="f-16">$120.00</h5>
                        </div>
                      </div>
                               </swiper-slide>
                                <swiper-slide>
                      <div class="item"><img class="img-fluid" src="@/assets/images/dashboard-2/2.png" alt="">
                        <div class="product-content"> 
                          <div class="badge badge-primary">New</div>
                          <h4> <router-link to="/ecommerce/product">Red Hova Sport Shoes</router-link><i class="fa fa-check-circle"></i></h4>
                          <h5 class="f-16">$120.00</h5>
                        </div>
                      </div>
                                </swiper-slide>
                                 <swiper-slide>
                      <div class="item"><img class="img-fluid" src="@/assets/images/dashboard-2/3.png" alt="">
                        <div class="product-content"> 
                          <div class="badge badge-primary">New</div>
                          <h4> <router-link to="/ecommerce/product">Blue Mens Watch</router-link><i class="fa fa-check-circle"></i></h4>
                          <h5 class="f-16">$120.00</h5>
                        </div>
                      </div>
                                 </swiper-slide>
                          </swiper>
                    </div>
                   
                  </div>
                </div>
              </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
   setup() {
    return {
      modules: [Pagination],
    };
  },
}
</script>