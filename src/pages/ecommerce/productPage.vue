<template>
      <Breadcrumbs main="E-Commerce" title="Product Page" />
        <div class="container-fluid">
            <div>
                  <div class="row product-page-main p-0">
                      <productSwiper/>
                      <pageDetails/>
                      <filterBlock/>
                  </div>
            </div>
            <prodectpageTab/>
        </div>
</template>
<script>
import productSwiper from "@/components/ecommerce/productpage/productSwiper.vue"
import pageDetails from "@/components/ecommerce/productpage/pageDetails.vue"
import filterBlock from "@/components/ecommerce/productpage/filterBlock.vue"
import prodectpageTab from "@/components/ecommerce/productpage/prodectpageTab.vue"
export default {
    components:{
        productSwiper,
        pageDetails,
        filterBlock,
        prodectpageTab
    }
}
</script>