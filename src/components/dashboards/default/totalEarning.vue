<template>
     <div class="col-xl-4 col-lg-6 box-col-30 xl-30">
                <div class="card our-earning">
                  <div class="card-header pb-0">
                    <div class="d-flex justify-content-between">
                      <div class="flex-grow-1"> 
                        <p class="square-after f-w-600 header-text-primary">Our Total Earning<i class="fa fa-circle"> </i></p>
                        <h4>96.564%</h4>
                      </div>
                    </div>
                  </div>
                  <div class="card-body p-0">
                    <div class="earning-chart">
                      <div id="earning-chart">
                          <earningChart/>
                      </div>
                    </div>
                    
                  </div>
                  <div class="card-footer">
                    <ul class="d-sm-flex d-block">
                      <li>
                        <p class="f-w-600 font-primary f-12">Daily Earning</p><span class="f-w-600">96.564%</span>
                      </li>
                      <li> 
                        <p class="f-w-600 font-primary f-12">Monthly Earning </p><span class="f-w-600">96.564%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
</template>
<script>
import earningChart from "./earningChart.vue"
export default {
    components:{
        earningChart
    }
}
</script>