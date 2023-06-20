<template>
     <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Pie Chart <span class="digits">4</span></h5>
                  </div>
                  <div class="card-body p-0 chart-block">
                     <GChart
                      class="chart-overflow" 
                      id="pie-chart2"
                      type="PieChart"
                      :data="pie_chart.chartData_1"
                      :options="pie_chart.options_2"
                    />
                  </div>
                </div>
              </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';

import { GChart } from "vue-google-charts";
export default {
    components:{
        GChart 
    },
    data(){
        return{
              chartsLib: null, 
               pie_chart: {
                     chartData_1: [
            ['Task', 'Hours per Day'],
            ['Work',     5],
            ['Eat',      10],
            ['Commute',  15],
            ['Watch TV', 20],
            ['Sleep',    25]
          ],
           
           options_2: { 
            title: 'My Daily Activities',
            is3D: true,
            width:'100%',
            height: 300,
         colors: ["#f8d62b", "#a927f9" , "#51bb25", secondary , primary ]
          },
           
               }
        }
    }
}
</script>