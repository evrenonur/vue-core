<template>
  <div class="col-sm-12 col-xl-6 box-col-12">
    <div class="card">
      <div class="card-header">
        <h4>bar-chart2</h4>
      </div>
      <div class="card-body chart-block">
        <div id="bar-chart2">
          <GChart class="chart-overflow" id="bar-chart2" type="BarChart" :data="bar_chart.chartData_1"
            :options="bar_chart.options_1" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>


import { GChart } from "vue-google-charts";
export default {
    components:{
        GChart 
    },
    data(){
        return{
              chartsLib: null, 
               bar_chart: {
          chartData_1: [  
            ['Element', 'Density', { role: 'style' } ],
             ["Copper", 10, "#a927f9"],
                ["Silver", 12, "#f8d62b"],
                ["Gold", 14, "#f73164"],
                ["Platinum", 16, "color: #7366ff"]
          ],
          options_1:  {
            title: 'Density of Precious Metals, in g/cm^3',
            width:'100%',
            height: 400,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
          }
        },
        }
    }
}
</script>