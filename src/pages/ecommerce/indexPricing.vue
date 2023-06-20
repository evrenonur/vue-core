<template>
      <Breadcrumbs main="Ecommerce" title="Pricing"/>
         <div class="container-fluid">
            <div class="row">
                <pricingBlock/>
                <simplePricing/>
            </div>
         </div>
</template>
<script>
import pricingBlock from "@/components/ecommerce/pricing/pricingBlock.vue"
import simplePricing from "@/components/ecommerce/pricing/simplePricing.vue"
export default {
    components:{
        pricingBlock,
        simplePricing
    }
}
</script>