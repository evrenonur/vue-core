<template>
     <div class="col-xl-4 col-lg-7 col-md-6 box-col-38 xl-38">
                <div class="card goal-view">
                  <div class="card-header pb-0">
                    <div class="d-flex justify-content-between">
                      <div class="flex-grow-1">
                        <p class="square-after f-w-600">Our Goal Overview<i class="fa fa-circle"> </i></p>
                        <h4>Goal Overview</h4>
                      </div>
                     
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="goal-chart"> 
                      <div class="shap-block">
                        <div class="rounded-shap animate-bg-secondary"><i></i><i></i><i></i></div>
                      </div>
                      <div id="goal">
                          <goalChart/>
                      </div>
                    </div>
                   
                  </div>
                  <div class="card-footer">
                    <ul> 
                      <li>
                        <h4 class="f-w-700">$8,54,159</h4><span class="f-w-500">Completed</span>
                      </li>
                      <li> 
                        <h4 class="f-w-700">$9,85,000</h4><span class="f-w-500">Our Goal</span>
                      </li>
                      <li> 
                        <h4 class="f-w-700">$66,264</h4><span class="f-w-500">In Progress</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
</template>
<script>
import goalChart from "./goalChart.vue"
export default {
    components:{
        goalChart
    }
}
</script>