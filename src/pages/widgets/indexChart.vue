<template>
       <Breadcrumbs main="Widgets" title="Chart"/>
        <div class="container-fluid chart-widget">
              <div class="row">
                  <saleView/>
                  <projectView/>
                  <productsView/>
              </div>
              <div class="row">
                  <marketingExpenses/>
                  <totalEarning/>
                  <skillStatus/>
                  <orderStatus/>
              </div>
               <div class="row">
                   <liveProducts/>
                   <turnOver/>
                   <monthlySales/>
                   <usesChart/>
               </div>
                 <div class="row">
                     <browserUses/>
                 </div>
                    <div class="row">
                        <financeView/>
                        <orderChart/>
                    </div>
        </div>
</template>
<script>
import saleView from "@/components/widgets/chart/saleView.vue"
import projectView from "@/components/widgets/chart/projectView.vue"
import productsView from "@/components/widgets/chart/productsView.vue"
import marketingExpenses from "@/components/widgets/chart/marketingExpenses.vue"
import totalEarning from "@/components/widgets/chart/totalEarning.vue"
import skillStatus from "@/components/widgets/chart/skillStatus.vue"
import orderStatus from "@/components/widgets/chart/orderStatus.vue"
import liveProducts from "@/components/widgets/chart/liveProducts.vue"
import turnOver from "@/components/widgets/chart/turnOver.vue"
import monthlySales from "@/components/widgets/chart/monthlySales.vue"
import usesChart from "@/components/widgets/chart/usesChart.vue"
import browserUses from "@/components/widgets/chart/browserUses.vue"
import financeView from "@/components/widgets/chart/financeView.vue"
import orderChart from "@/components/widgets/chart/orderChart.vue"
export default {
    components:{
        saleView,
        projectView,
        productsView,
        marketingExpenses,
        totalEarning,
        skillStatus,
        orderStatus,
        liveProducts,
        turnOver,
        monthlySales,
        usesChart,
        browserUses,
        financeView,
        orderChart
    }
}
</script>