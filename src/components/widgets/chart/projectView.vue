<template>
     <div class="col-lg-4 col-md-6 box-col-33">
                <div class="card o-hidden">
                  <div class="chart-widget-top">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-7">
                          <h6 class="f-w-600 font-secondary">PROJECTS</h6><span class="num"><span class="counter"><number
                  class="bold"
                  ref="number1"
                  :from="0"
                  :to="30"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span>%<i class="icon-angle-up f-12 ms-1"></i></span>
                        </div>
                        <div class="col-5 text-end">
                          <h4 class="num total-value counter"><number
                class="bold counter"
                ref="number1"
                :from="0"
                :to="12569"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></h4>
                        </div>
                      </div>
                    </div>
                    <div id="chart-widget2">
                      <div class="flot-chart-placeholder" id="chart-widget-top-second">
                          <projectsChart/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import projectsChart from "./projectsChart.vue"
export default {
    components:{
        projectsChart
    }
}
</script>