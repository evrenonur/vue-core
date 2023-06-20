<template>
     <div class="card total-revenue overflow-hidden">
                  <div class="card-header">
                    <div class="d-flex justify-content-between">
                      <div class="flex-grow-1">
                        <p class="square-after f-w-600 header-text-primary">Total Revenue<i class="fa fa-circle"></i></p>
                        <h4>96.564%</h4>
                      </div>
                    
                    </div>
                  </div>
                  <div class="card-body p-0">
                    <div class="revenue-chart" id="revenue-chart">
                   <revenueChart/>
                    </div>
                  </div>
                </div>
</template>
<script>
import revenueChart from "./revenueChart.vue"
export default {
   components:{
       revenueChart
   }
}
</script>