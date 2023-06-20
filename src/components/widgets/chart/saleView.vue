<template>
      <div class="col-lg-4 col-md-6 box-col-33">
                <div class="card o-hidden">
                  <div class="chart-widget-top">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-5">
                          <h6 class="f-w-600 font-primary">SALE</h6><span class="num"><span class="counter"><number
                class="bold "
                ref="number1"
                :from="0"
                :to="90"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></span>%<i class="icon-angle-up f-12 ms-1"></i></span>
                        </div>
                        <div class="col-7 text-end">
                          <h4 class="num total-value">$ <span class="counter"><number
                class="bold "
                ref="number1"
                :from="0"
                :to="3654"
                :duration="5"
                :delay="0"
                easing="Power1.easeOut"
              /></span>.00</h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div id="chart-widget1">
                          <saleChart/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import saleChart from "./saleChart.vue"
export default {
    components:{
        saleChart
    }
}
</script>