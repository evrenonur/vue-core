<template>
      <div class="product-search"> 
                <form>
                <div class="form-group m-0">
                  <input class="form-control" type="text" placeholder="Search.." v-model="filterQuery"/>
                  <i class="fa fa-search"></i>
                </div>
              </form>
              <div class="col-sm-12">
                <div v-if="filterProduct.length == 0" >
                  <div class="search-not-found text-center">
                    <p>Sorry, We didn't find any results matching this search</p>
                  </div>
                </div>
              </div>
             </div>
</template>
<script>
import productMixin from "@/mixins/commen/productMixin"

export default {
     mixins:[productMixin],
  
  
}
</script>