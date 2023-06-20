var trigoStrength = 3
function getRangeRandom(yrange) {
    return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
}
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

const financeChart = {
    
    data(){
        return{
            series: [{
        name: 'Load Average',
        data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
            min: 10,
            max: 110
        })
    }],
         chartOptions: {
               chart: {
        height: 350,
        type: 'bar',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        events: {
            animationEnd: function (chartCtx) {
                const newData = chartCtx.w.config.series[0].data.slice()
                newData.shift()
                window.setTimeout(function () {
                    chartCtx.updateOptions({
                        series: [{
                            data: newData
                        }],
                        xaxis: {
                            min: chartCtx.minX,
                            max: chartCtx.maxX
                        },
                        subtitle: {
                            text: parseInt(getRangeRandom({min: 1, max: 20})).toString() + '%',
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
    colors: [primary],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 0,
    },
    series: [{
        name: 'Load Average',
        data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
            min: 10,
            max: 110
        })
    }],
    title: {
        text: 'Load Average',
        align: 'left',
        style: {
            fontSize: '12px'
        }
    },
    subtitle: {
        text: '20%',
        floating: true,
        align: 'right',
        offsetY: 0,
        style: {
            fontSize: '22px'
        }
    },
    xaxis: {
        type: 'datetime',
        range: 2700000,

    },
    yaxis: {
        decimalsInFloat: 1,
    },
    legend: {
        show: true
    },
         }
        }
    },
}
  
  export default financeChart