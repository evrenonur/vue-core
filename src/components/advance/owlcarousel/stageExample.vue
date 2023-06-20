<template>
  <div class="card">
    <div class="card-header pb-0">
      <h4>Stage Padding Example</h4>
    </div>
    <div class="card-body">
      <div class="owl-carousel owl-theme" id="owl-carousel-8">
        <swiper :autoHeight="true" :breakpoints="swiperOptions" :loop="true" :slidesPerView="1" :freeMode="true"
          :spaceBetween="10" :pagination="{
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
import "swiper/css/free-mode";
import { Pagination, FreeMode } from "swiper";
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
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      },
    }
  },
  computed: {
    ...mapState({
      owlcarousel: (state) => state.owlcarousel.items,
    }),
  },
  methods: {

  },
  setup() {
    return {
      modules: [Pagination, FreeMode],
    };
  },
}
</script>