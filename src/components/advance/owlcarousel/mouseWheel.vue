<template>
  <div class="card">
    <div class="card-header pb-0">
      <h4>Mouse Wheel Example</h4>
    </div>
    <div class="card-body">
      <div class="owl-carousel owl-theme" id="owl-carousel-15">
        <swiper :autoHeight="true" :loop="true" :breakpoints="swiperOptions" :mousewheel="true" :slidesPerView="1"
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
import { Pagination, Mousewheel } from "swiper";
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
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 5,
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
      modules: [Pagination, Mousewheel],
    };
  },
}
</script>