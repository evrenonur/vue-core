<template>
    <swiper :options="swiperOption" :modules="modules" :rewind="true" >
               <swiper-slide >
                 <div class="product-box row" v-for="(product,index) in products.slice(0, 3)" :key="index">
                 <div class="product-img col-md-6">
                   <img class="img-fluid" :src='getImgUrl(product.images[0])' alt="">
                 </div>
                 <div class="product-details col-md-6 text-start">
                   <span>
                     <i class="fa fa-star font-warning me-1"></i>
                     <i class="fa fa-star font-warning me-1"></i>
                     <i class="fa fa-star font-warning me-1"></i>
                     <i class="fa fa-star font-warning me-1"></i>
                     <i class="fa fa-star font-warning"></i>
                   </span>
                   <router-link :to="'/ecommerce/details/'+product.sku"> <p class="mb-0">{{product.name}}</p></router-link>
                   <div class="product-price">${{product.price}}</div>
                 </div>
                 </div>
                 </swiper-slide>
                 <swiper-slide v-if="products.length >= 4">
                   <div class="product-box row" v-for="(product,index) in products.slice(3, 6)" :key="index">
                     <div class="product-img col-md-6">
                       <img class="img-fluid" :src='getImgUrl(product.images[0])' alt="">
                     </div>
                   <div class="product-details col-md-6 text-start">
                     <span>
                       <i class="fa fa-star font-warning me-1"></i>
                       <i class="fa fa-star font-warning me-1"></i>
                       <i class="fa fa-star font-warning me-1"></i>
                       <i class="fa fa-star font-warning me-1"></i>
                       <i class="fa fa-star font-warning"></i>
                     </span>
                     <router-link :to="'/ecommerce/details/'+product.sku"> <p class="mb-0">{{product.name}}</p></router-link>
                     <div class="product-price">${{product.price}}</div>
                   </div>
                   </div>
                 </swiper-slide>
          </swiper>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
   components:{
  Swiper,
     SwiperSlide,
 },
    data() {
     return {
       filter: false,
       value: [0, 450],
       applyFilter: [],
       swiperOption: {
         loop: true,
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
         }
       }
     };
   },
   computed: {
     ...mapState({
       products: state => state.products.products
     }),
     ...mapGetters({
       getCategory: 'products/getCategory',
       getBrand: 'products/getBrands',
       getColors: 'products/getColors'
     })
   },
   mounted() {
     this.$emit('priceVal', this.value);
   },
   methods: {
     isActive(filterItem) {
       return this.applyFilter.indexOf(filterItem) > -1;
     },

     appliedFilter() {
       this.$emit('allFilters', this.applyFilter);
     },
     sliderChange(event) {
       this.$emit('priceVal', event);
     },
     getImgUrl(path) {
       return require('../../../assets/images/'+path);
     }, 
   }
}
</script>