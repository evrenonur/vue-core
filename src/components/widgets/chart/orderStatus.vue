<template>
     <div class="col-lg-7 box-col-7">
                <div class="card order-chart">
                  <div class="card-header pb-0">
                    <div class="d-flex"> 
                      <div class="flex-grow-1"> 
                        <h4>Order Status</h4>
                      </div>
                      <div class="text-end"><vue-feather class="text-muted"  type="shopping-bag"></vue-feather></div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="chart-container">
                      <div id="progress1">
                          <progressChart1/>
                      </div>
                      <div id="progress2">
                          <progressChart2/>
                      </div>
                      <div id="progress3">
                          <progressChart3/>
                      </div>
                      <div id="progress4">
                          <progressChart4/>
                      </div>
                      <div id="progress5">
                          <progressChart5/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import progressChart1 from "./progressChart1.vue"
import progressChart2 from "./progressChart2.vue"
import progressChart3 from "./progressChart3.vue"
import progressChart4 from "./progressChart4.vue"
import progressChart5 from "./progressChart5.vue"
export default {
    components:{
        progressChart1,
        progressChart2,
        progressChart3,
        progressChart4,
        progressChart5
    }
}
</script>