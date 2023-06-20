<template>
  <div class="card">
    <div class="card-header pb-0">
      <h4>Auto Width Example</h4>
    </div>
    <div class="card-body">
      <div class="owl-carousel owl-theme" id="owl-carousel-5">
        <swiper :autoHeight="true" :loop="true" :breakpoints="swiperOptions" :slidesPerView="1" :spaceBetween="10"
          :pagination="{
                        clickable: true,
                      }" :modules="modules" class="mySwiper">
          <swiper-slide v-for="item in owlcarousel" :key="item">
            <div class="item"><img :src="getImgUrl(item.img)" alt=""></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import imageMixin from "@/mixins/commen/imageMixin"

import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper";
import { mapState } from "vuex";
export default {
  mixins: [imageMixin],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1.5,
        }
      },
    }
  },
  computed: {
    ...mapState({
      owlcarousel: (state) => state.owlcarousel.item,
    }),
  },
  methods: {

  },
  setup() {
    return {
      modules: [Pagination,],
    };
  },
}
</script>