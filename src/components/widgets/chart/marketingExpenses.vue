<template>
    <div class="col-lg-7 col-md-12 box-col-70">
                <div class="card o-hidden">
                  <div class="card-header pb-0">
                    <div class="d-flex"> 
                      <div class="flex-grow-1"> 
                        <h4>Marketing Expenses</h4>
                      </div>
                    </div>
                  </div>
                  <div class="bar-chart-widget">
                    <div class="bottom-content card-body">
                      <div class="row">
                        <div class="col-12">
                          <div id="chart-widget4">
                              <marketingChart/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import marketingChart from "./marketingChart.vue"
export default {
    components:{
        marketingChart
    }
}
</script>