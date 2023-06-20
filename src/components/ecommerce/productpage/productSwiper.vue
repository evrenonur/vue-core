<template>
  <div class="col-xl-5 col-md-6 box-col-7 xl-65">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-9 product-main">
            <div class="product-slider" id="sync1">
              <div class="pro-slide-single">
                <swiper :slidesPerView="1" :loop="true" :thumbs="{ swiper: thumbsSwiper }"
                  :autoplay="{ delay: 3500, disableOnInteraction: false, }" :spaceBetween="30" :centeredSlides="true"
                  :modules="modules" class="mySwiper">
                  <swiper-slide v-for="(product, index) in products.images" :key="index">
                    <img :src="getImgUrl(product)" :id="index" class="img-fluid bg-img" alt="index" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <div class="col-xl-3 product-thumbnail thumbsSwiper">
            <div class="pro-slide-right">
              <div>
                <swiper :breakpoints="swiperOptions.breakpoints" @swiper="setThumbsSwiper" :loop="true" :autoHeight="true"
                  :slidesPerView="3" :spaceBetween="3" :watchSlidesProgress="true" :pagination="{
                    clickable: true,
                  }" :modules="modules" class="Swiper">
                  <swiper-slide v-for="(product, index) in products.images" :key="index">
                    <img :src="getImgUrl(product)" :id="index" class="img-fluid bg-img" alt="index"
                      style="height:auto; " />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import productPage from "@/mixins/commen/productPage"
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Thumbs } from 'swiper';
import "swiper/css/thumbs"
import "swiper/css/free-mode";

export default {
  name: 'ProductDetails',
  mixins: [productPage],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {

          1215: {
            direction: 'vertical'
          }
        }
      },
    }
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      modules: [FreeMode, Autoplay, Thumbs], setThumbsSwiper, thumbsSwiper
    };
  }
};
</script>