var trigoStrength = 3
function generateMinuteWiseTimeSeries(baseval, count) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2))

        series.push([x, y]);
        baseval += 300000;
        i++;
    }
    return series;
}
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';

const linechart = {
    
    data(){
        return{
          series: [{
        name: 'Running',
        data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
            min: 30,
            max: 110
        })
    }, {
        name: 'Waiting',
        data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
            min: 30,
            max: 110
        })
    }],
    chartOptions: {
     chart: {
        height: 350,
        type: 'line',
        stacked: true,
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        events: {
            animationEnd: function (chartCtx) {
                const newData1 = chartCtx.w.config.series[0].data.slice()
                newData1.shift()
                const newData2 = chartCtx.w.config.series[1].data.slice()
                newData2.shift()
                window.setTimeout(function () {
                    chartCtx.updateOptions({
                        series: [{
                            data: newData1
                        }, {
                            data: newData2
                        }],
                        subtitle: {
                           
                        }
                    }, false, false)
                }, 300)
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 5,
    },
    grid: {
        padding: {
            left: 10,
            right: 0
        }
    },
    fill: {

        opacity: 0.9

    },
    colors:[primary, secondary],
    markers: {
        size: 0,
        hover: {
            size: 0
        }
    },
    series: [{
        name: 'Running',
        data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
            min: 30,
            max: 110
        })
    }, {
        name: 'Waiting',
        data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
            min: 30,
            max: 110
        })
    }],
    xaxis: {
        type: 'datetime',
        range: 2700000,
    },
     yaxis: {
          decimalsInFloat: 1,
      },
    title: {
        text: 'Processes',
        align: 'left',
        style: {
            fontSize: '12px'
        }
    },
    subtitle: {
        text: '20',
        floating: true,
        align: 'right',
        offsetY: 0,
        style: {
            fontSize: '22px'
        }
    },
    legend: {
        show: true,
        floating: true,
        horizontalAlign: 'left',
        onItemClick: {
            toggleDataSeries: false
        },
        position: 'top',
        offsetY: -30,
        offsetX: 60
    },
    }
        }
    }
}
  
  export default linechart