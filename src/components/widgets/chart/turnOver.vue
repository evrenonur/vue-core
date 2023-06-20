<template>
     <div class="xl-50 col-lg-5 box-col-5">
                <div class="small-chart-widget chart-widgets-small">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="d-flex">
                        <div class="flex-grow-1"> 
                          <h4>Turnover</h4>
                        </div>
                       
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="chart-container">
                        <div class="row">
                          <div class="col-12">
                            <div id="chart-widget7">
                                <turnoverChart/>
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
import turnoverChart from "./turnoverChart.vue"
export default {
    components:{
        turnoverChart
    }
}
</script>