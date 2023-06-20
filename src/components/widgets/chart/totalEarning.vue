<template>
     <div class="col-lg-5 col-md-12 box-col-5">
                <div class="card o-hidden">
                  <div class="card-header pb-0">
                    <div class="d-flex"> 
                      <div class="flex-grow-1"> 
                        <h4>Total Earning</h4>
                      </div>
                    </div>
                  </div>
                  <div class="bar-chart-widget">
                    <div class="top-content bg-primary"></div>
                    <div class="bottom-content card-body">
                      <div class="row">
                        <div class="col-12">
                          <div id="chart-widget5"> 
                              <earningChart/>
                          </div>
                        </div>
                      </div>
                      <div class="row text-center">
                        <div class="col-4 b-r-light">
                          <div><span class="font-secondary f-w-600 f-16">12%<i class="icon-angle-up f-12 ms-1"></i></span><span class="text-muted block-bottom">Year</span>
                            <h4 class="num m-0"><span class="counter color-bottom"> <number
                class="bold counter color-bottom"
                ref="number1"
                :from="0"
                :to="3659"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></span>M</h4>
                          </div>
                        </div>
                        <div class="col-4 b-r-light">
                          <div><span class="font-secondary f-w-600 f-16">15%<i class="icon-angle-up f-12 ms-1"></i></span><span class="text-muted block-bottom">Month</span>
                            <h4 class="num m-0"><span class="counter color-bottom"><number
                class="bold counter color-bottom"
                ref="number1"
                :from="0"
                :to="698"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></span>M</h4>
                          </div>
                        </div>
                        <div class="col-4">
                          <div><span class="font-secondary f-w-600 f-16">34%<i class="icon-angle-up f-12 ms-1"></i></span><span class="text-muted block-bottom">Today</span>
                            <h4 class="num m-0"><span class="counter color-bottom"> <number
                class="bold counter color-bottom"
                ref="number1"
                :from="0"
                :to="9361"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></span>M</h4>
                          </div>
                        </div>
                      </div>
                    </div>
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