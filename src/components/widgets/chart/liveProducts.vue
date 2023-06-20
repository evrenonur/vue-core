<template>
     <div class="xl-50 col-lg-7 box-col-7">
                <div class="small-chart-widget chart-widgets-small">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="d-flex">
                        <div class="flex-grow-1"> 
                          <h4>Live Products</h4>
                        </div>
                       
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="chart-container">
                        <div class="row">
                          <div class="col-12">
                            <div id="chart-widget6">
                                <liveChart/>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import liveChart from "./liveChart"
export default {
    components:{
        liveChart
    }
}
</script>