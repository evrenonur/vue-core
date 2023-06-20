<template>
  <apexchart
    type="radialBar"
    height="345"
    :series="series"
    :options="chartOptions"
  ></apexchart>
</template>

<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
export default {
    data(){
        return{
       series: [75],
       chartOptions: {
            chart: {
        height: 345,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: '78%',
            dropShadow: {
              enabled: false,
            }
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              color: primary,
              fontSize: '36px',
              fontWeight: '700',
              show: true,
            }
          }
        }
      },
      responsive:[{
        breakpoint: 1551,
        options: {    
          chart: {
            height: 460, 
          },
        },
        breakpoint: 1200,
        options: {    
          chart: {
            height: 340,
          },
        },
        breakpoint: 1024,
        options: {    
          chart: {
            height: 300,
            width: 200,
          },
        },
        breakpoint: 480,
        options: {    
          chart: {
            height: 300, 
          },
        },
      }],
      colors: [primary],
      stroke: {
        lineCap: 'round'
      },
      tooltip: {
        enabled: false
      }
        }
        }
    }
}
</script>