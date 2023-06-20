<template>
    <apexchart
              type="candlestick"
              height="500"
              :series="series"
              :options="chartOptions"
            ></apexchart>
</template>
<script>
import {chartData} from "@/data/chart-data"
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
export default {
    data(){
        return{
         series: [{
            data: chartData
        }],
    chartOptions: {
      chart: {
            toolbar: {
                show: false
            },
            height: 500,
            type: 'candlestick',
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: primary,
                    downward: secondary
                }
            }
        },
        fill: {
            opacity: 0.9,
            colors:['#7366ff'],},
              title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }
        }
    }
}
</script>