<template>
    <Breadcrumbs main="Dashboard" title="Ecommerce"/>
      <div class="container-fluid dashboard-2">
            <div class="row">  
                <div class="col-xl-9 col-md-12 box-col-70 xl-70">
                  <div class="row"> 
                      <profitCard/>
                      <visitorCard/>
                      <sellCard/>
                      <bestSeller/>
                  </div>
                </div>
                <sellingProuct/>
                <goalView/>
                <newUpdate/>
                <orderStatic/>
                <productSlider/>
                <orderList/>
            </div>
      </div>
</template>
<script>
import profitCard from "@/components/dashboards/e-commerce/profitCard.vue"
import visitorCard from "@/components/dashboards/e-commerce/visitorCard.vue"
import sellCard from "@/components/dashboards/e-commerce/sellCard.vue"
import bestSeller from "@/components/dashboards/e-commerce/bestSeller.vue"
import sellingProuct from "@/components/dashboards/e-commerce/sellingProuct.vue"
import goalView from "@/components/dashboards/e-commerce/goalView.vue"
import newUpdate from "@/components/dashboards/e-commerce/newUpdate.vue"
import orderStatic from "@/components/dashboards/e-commerce/orderStatic.vue"
import productSlider from "@/components/dashboards/e-commerce/productSlider.vue"
import orderList from "@/components/dashboards/e-commerce/orderList.vue"
export default {
    components:{
        profitCard,
        visitorCard,
        sellCard,
        bestSeller,
        sellingProuct,
        goalView,
        newUpdate,
        orderStatic,
        productSlider,
        orderList
    }
}
</script>