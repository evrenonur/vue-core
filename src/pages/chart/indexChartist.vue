<template>
    <Breadcrumbs main="Charts" title="Chartist Chart"/>
     <div class="container-fluid">
            <div class="row">
                <animatingDonut/>
                <advancedAnimations/>
                <biPolar/>
                <svgAnimation/>
                <lineChart/>
                <barChart/>
                <stackedChart/>
                <horizontalBar/>
                <extremeResponsive/>
                <simpleChart/>
                <holesData/>
                <filledHoles/>
            </div>
     </div>
</template>
<script>
import animatingDonut from "@/components/chart/chartist/animatingDonut.vue"
import advancedAnimations from "@/components/chart/chartist/advancedAnimations.vue"
import biPolar from "@/components/chart/chartist/biPolar.vue"
import svgAnimation from "@/components/chart/chartist/svgAnimation.vue"
import lineChart from "@/components/chart/chartist/lineChart.vue"
import barChart from "@/components/chart/chartist/barChart.vue"
import stackedChart from "@/components/chart/chartist/stackedChart.vue"
import horizontalBar from "@/components/chart/chartist/horizontalBar.vue"
import extremeResponsive from "@/components/chart/chartist/extremeResponsive.vue"
import simpleChart from "@/components/chart/chartist/simpleChart.vue"
import holesData from "@/components/chart/chartist/holesData.vue"
import filledHoles from "@/components/chart/chartist/filledHoles.vue"
export default {
    components:{
        animatingDonut,
        advancedAnimations,
        biPolar,
        svgAnimation,
        lineChart,
        barChart,
        stackedChart,
        horizontalBar,
        extremeResponsive,
        simpleChart,
        holesData,
        filledHoles
    }
}
</script>