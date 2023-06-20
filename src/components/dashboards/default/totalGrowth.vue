<template>
     <div class="col-xl-12 box-col-12">
                <div class="card total-growth">
                  <div class="card-header pb-0">
                    <div class="d-flex justify-content-between">
                      <div class="flex-grow-1"> 
                        <p class="square-after f-w-600 header-text-primary">Our Total Growth<i class="fa fa-circle"> </i></p>
                        <h4>96.564%</h4>
                      </div>
                    </div>
                  </div>
                  <div class="card-body pb-0">
                    <div class="growth-chart"> 
                      <div id="growth-chart">
                          <apexchart
                           type="line"
                           height="280"
                          :series="series"
                          :options="chartOptions"
                           ></apexchart>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
</template>
<script>
import growthChart from "@/mixins/growthChart";
export default {
      mixins: [growthChart],
}
</script>