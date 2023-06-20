<template>
     <div class="col-lg-4 col-md-12 box-col-33">
                <div class="card o-hidden">
                  <div class="chart-widget-top">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-8">
                          <h6 class="f-w-600 font-success">PRODUCTS</h6><span class="num"><span class="counter"><number
                  class="bold"
                  ref="number1"
                  :from="0"
                  :to="68"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span>%<i class="icon-angle-up f-12 ms-1"></i></span>
                        </div>
                        <div class="col-4 text-end">
                          <h4 class="num total-value"><span class="counter"><number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="93"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span>M</h4>
                        </div>
                      </div>
                    </div>
                    <div id="chart-widget3">
                      <div class="flot-chart-placeholder" id="chart-widget-top-third">
                      <productsChart/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import productsChart from "./productsChart.vue"
export default {
    components:{
        productsChart
    }
}
</script>