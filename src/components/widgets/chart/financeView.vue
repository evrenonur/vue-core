<template>
  <div class="col-lg-5 box-col-5">
    <div class="card">
      <div class="card-header pb-0">
        <div class="d-flex">
          <div class="flex-grow-1">
            <h4>Finance</h4>
          </div>
          <div class="text-end">
           <vue-feather class="text-muted" type="navigation"></vue-feather>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="chart-container">
          <div id="columnchart">
            <apexchart
              type="bar"
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
import financeChart from "@/mixins/financeChart";
export default {
  mixins: [financeChart],
};
</script>