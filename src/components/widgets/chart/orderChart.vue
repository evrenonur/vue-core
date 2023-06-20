<template>
  <div class="col-lg-7 box-col-7">
    <div class="card">
      <div class="card-header pb-0">
        <div class="d-flex">
          <div class="flex-grow-1">
            <h4>Order Status</h4>
          </div>
          <div class="text-end">
           <vue-feather class="text-muted" type="shopping-bag"></vue-feather>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="chart-container">
          <div id="linechart">
            <apexchart
              type="line"
              height="350"
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
import linechart from "@/mixins/linechart";
export default {
  mixins: [linechart],
};
</script>