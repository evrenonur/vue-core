<template>
  <div :class="filtered ? 'container-fluid product-wrapper sidebaron' : 'container-fluid product-wrapper'">
    <div class="product-grid">
      <div class="feature-products">
        <div class="row m-b-10">
          <div class="col-md-3 col-sm-2 products-total">

            <div class="square-product-setting d-inline-block">
              <a class="icon-grid grid-layout-view" @click="gridView()">
                <vue-feather type="grid"></vue-feather>
              </a>
            </div>
            <div class="square-product-setting d-inline-block">
              <a class="icon-grid m-0 list-layout-view" @click="listView()">
                <vue-feather type="list"></vue-feather>
              </a>
            </div>
            <div class="grid-options d-inline-block">
              <ul>
                <li @click="grid2()">
                  <a class="product-2-layout-view">
                    <span class="line-grid line-grid-1 bg-primary"></span>
                    <span class="line-grid line-grid-2 bg-primary"></span>
                  </a>
                </li>
                <li @click="grid3()">
                  <a class="product-3-layout-view">
                    <span class="line-grid line-grid-3 bg-primary"></span>
                    <span class="line-grid line-grid-4 bg-primary"></span>
                    <span class="line-grid line-grid-5 bg-primary"></span>
                  </a>
                </li>
                <li @click="grid4()">
                  <a class="product-4-layout-view">
                    <span class="line-grid line-grid-6 bg-primary"></span>
                    <span class="line-grid line-grid-7 bg-primary"></span>
                    <span class="line-grid line-grid-8 bg-primary"></span>
                    <span class="line-grid line-grid-9 bg-primary"></span>
                  </a>
                </li>
                <li @click="grid6()">
                  <a class="product-6-layout-view">
                    <span class="line-grid line-grid-10 bg-primary"></span>
                    <span class="line-grid line-grid-11 bg-primary"></span>
                    <span class="line-grid line-grid-12 bg-primary"></span>
                    <span class="line-grid line-grid-13 bg-primary"></span>
                    <span class="line-grid line-grid-14 bg-primary"></span>
                    <span class="line-grid line-grid-15 bg-primary"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="d-none-productlist filter-toggle" @click="collapseFilter()">
              <h6 class="mb-0">Filters
                <span class="ml-2">
                  <vue-feather type="chevron-down" class="middle"></vue-feather>
                </span>
              </h6>
            </div>
          </div>
          <productLength />
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="pro-filter-sec">
              <div class="product-sidebar" :class="filtered ? 'open' : ''">
                <div class="filter-section">
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0 f-w-600 "> Filters<span class="pull-right" @click="collapseFilter()"><i
                            class="fa fa-chevron-down toggle-data"></i></span></h6>
                    </div>
                    <Slider @allFilters="allfilter" @priceVal="pricefilterArray" />
                  </div>
                </div>
              </div>
              <productSearch />
            </div>
          </div>
        </div>
      </div>
      <prodectDetail />
    </div>
  </div>
</template>
<script>
import productLength from "./productLength.vue"
import productMixin from "@/mixins/commen/productMixin"
import Slider from "./filterBar.vue"
import productSearch from "./productSearch.vue"
import prodectDetail from "./prodectDetail.vue"
export default {
  mixins: [productMixin],
  components: {
    productLength,
    Slider,
    productSearch,
    prodectDetail
  }
}
</script>