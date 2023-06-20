<template>
     <div class="col-sm-12 box-col-12">
                <div class="donut-chart-widget">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="d-flex">
                        <div class="flex-grow-1"> 
                          <h4>Browser Uses</h4>
                        </div>
                       
                      </div>
                    </div>
                    <div class="card-body">
                      <div id="chart-widget13">
                          <browserChart/>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import browserChart from "./browserChart.vue"
export default {
  components:{
    browserChart
  }
}
</script>