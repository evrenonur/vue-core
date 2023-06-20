<template>
     <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Area Spaline Chart </h4>
                  </div>
                  <div class="card-body">
                    <div id="area-spaline">
                         <apexchart
            type="area"
            height="350"
            ref="chart"
            :options="chartOptions"
            :series="series"
          ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
export default {
  data() {
    return {
      series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
      chartOptions: {
         chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-09-19T00:00:00",
        "2023-09-19T01:30:00",
        "2023-09-19T02:30:00",
        "2023-09-19T03:30:00",
        "2023-09-19T04:30:00",
        "2023-09-19T05:30:00",
        "2023-09-19T06:30:00",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: [primary, secondary],
      },
    };
  },
};
</script>