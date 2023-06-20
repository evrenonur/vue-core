<template>
       <Breadcrumbs main="Charts" title="ApexChart" />
        <div class="container-fluid">
            <div class="row">
                <basicChart/>
                <areaSpaline/>
                <barChart/>
                <columnChart/>
                <chartBubble/>
                <steplineChart/>
                <annotationChart/>
                <pieChart/>
                <donutChart/>
                <mixedChart/>
                <candlestickChart/>
                <radarChart/>
                <radialBar/>
            </div>
        </div>
</template>
<script>
import basicChart from "@/components/chart/apexchart/basicChart.vue"
import areaSpaline from "@/components/chart/apexchart/areaSpaline.vue"
import barChart from "@/components/chart/apexchart/barChart.vue"
import columnChart from "@/components/chart/apexchart/columnChart.vue"
import chartBubble from "@/components/chart/apexchart/chartBubble.vue"
import steplineChart from "@/components/chart/apexchart/steplineChart.vue"
import annotationChart from "@/components/chart/apexchart/annotationChart.vue"
import pieChart from "@/components/chart/apexchart/pieChart.vue"
import donutChart from "@/components/chart/apexchart/donutChart.vue"
import mixedChart from "@/components/chart/apexchart/mixedChart.vue"
import candlestickChart from "@/components/chart/apexchart/candlestickChart.vue"
import radarChart from "@/components/chart/apexchart/radarChart.vue"
import radialBar from "@/components/chart/apexchart/radialBar.vue"
export default {
    components:{
        basicChart,
        areaSpaline,
        barChart,
        columnChart,
        chartBubble,
        steplineChart,
        annotationChart,
        pieChart,
        donutChart,
        mixedChart,
        candlestickChart,
        radarChart,
        radialBar
    }
}
</script>