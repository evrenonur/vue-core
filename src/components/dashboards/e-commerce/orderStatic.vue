<template>
     <div class="col-xl-4 col-lg-6 col-md-12 box-col-28 xl-28">
                <div class="card static-card">
                  <div class="card-header pb-0">
                    <div class="d-flex justify-content-between">
                      <div class="flex-grow-1">
                        <p class="square-after f-w-600">Order Statics<i class="fa fa-circle"> </i></p>
                        <h4>6,65,484 Order</h4>
                      </div>
                     
                    </div>
                  </div>
                  <div class="card-body pb-0 pt-0">
                    <div class="order-static"> 
                      <div id="order-chart">
                          <orderChart/>
                      </div>
                    </div>
                  
                  </div>
                  <div class="card-footer">
                    <ul class="d-xxl-flex d-block order-bottom">
                      <li class="d-flex">
                        <div class="flex-shrink-0">
                          <div><i class="fa fa-arrow-up"></i></div>
                        </div>
                        <div class="flex-grow-1">
                          <h6>84,315 order</h6>
                          <p class="f-w-500">Last two month order....</p>
                        </div>
                      </li>
                      <li class="d-flex">
                        <div class="flex-shrink-0">
                          <div><i class="fa fa-arrow-up"></i></div>
                        </div>
                        <div class="flex-grow-1">
                          <h6>61,481 order</h6>
                          <p class="f-w-500">Last two Days order....</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
</template>
<script>
import orderChart from "./orderChart.vue"
export default {
    components:{
        orderChart
    }
}
</script>