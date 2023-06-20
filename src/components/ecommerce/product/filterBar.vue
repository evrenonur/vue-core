<template>
    <div class="left-filter ">
    <div class="card-body filter-cards-view animate-chk">
      <div class="product-filter">
        <h6 class="f-w-600">Category</h6>
        <div class="checkbox-animated mt-0">
          <label class="d-block" for="edo-ani5" v-for="(product,index) in getCategory" :key="index">
            <input  @change="appliedFilter(product.category)" :value="product.category" v-model="applyFilter" 
            class="checkbox_animated" :id="product.category" type="checkbox">{{product.category}}
          </label>
        </div>
      </div>
      <div class="product-filter">
        <h6 class="f-w-600">Brand</h6>
        <div class="checkbox-animated mt-0">
          <label class="d-block" v-for="(brand,index) in getBrand" :key="index">
            <input @change="appliedFilter(brand)" class="checkbox_animated" :value="brand"  v-model="applyFilter" :id="brand" type="checkbox"> {{brand }} 
          </label>
        </div>
      </div>
        <div class="product-filter slider-product">
           <h6 class="f-w-600">Colors</h6>
            <div class="color-selector">
                                    <ul >
                                      <li :style="{'background-color':color.color}" v-for="(color,index) in getColors" :key="'color'+index" >
                                        <input @change="appliedFilter(color.color)" class="checkbox_animated" :value="color.color"  v-model="applyFilter" :id="color.color" type="checkbox">
                                      </li>
                                      <!-- <li class="bg-primary" > </li>
                                      <li class="bg-secondary"></li>
                                      <li class="bg-success"></li>
                                      <li class="bg-warning"></li>
                                      <li class="bg-danger"></li>
                                      <li class="blue"></li>
                                      <li class="red"></li> -->
                                    </ul>
                                  </div>
          </div>
          <div class="product-filter pb-0">
        <h6 class="f-w-500">Price</h6>
        <VueSlider v-model="one.value" :data="one.data1" :marks="true" :tooltip="'always'" :tooltip-placement="'top'" ></VueSlider>
        <h6 class="f-w-600 mt-5" >New Products</h6>
      </div>
      <div class="product-filter pb-0 new-products"> 
        <productSwiper/>
      </div>
       <div class="product-filter text-center"><img class="img-fluid banner-product" src="@/assets/images/ecommerce/banner.jpg" alt="" data-original-title="" title=""></div>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import VueSlider from 'vue-slider-component'
import productSwiper from "./productSwiper.vue"
import 'vue-slider-component/theme/antd.css'
export default {
  components:{
    VueSlider,
    productSwiper
  },
     data() {
      return {
        filter: false,
        value: [0, 450],
        applyFilter: [],
        one:{
          value:[200,800],
          data1: [10,  100, 200,250, 500,  750, 800, 1000 ],
        },
      };
    },
    computed: {
      ...mapState({
        products: state => state.products.products,  
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
    }
}
</script>