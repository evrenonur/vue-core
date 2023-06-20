<template>
    <Breadcrumbs main="Charts" title="Google Chart" />
    <div class="container-fluid">
        <div class="row">
            <areaChart />
            <columnChart />
            <ganttChart />
            <lineChart />
            <comboChart />
            <barChart />
            <wordTree />
            <pieChart1 />
            <pieChart3 />
            <pieChart4 />
        </div>
    </div>
</template>
<script>
import areaChart from "@/components/chart/google/areaChart.vue"
import columnChart from "@/components/chart/google/columnChart.vue"
import ganttChart from "@/components/chart/google/ganttChart.vue"
import lineChart from "@/components/chart/google/lineChart.vue"
import comboChart from "@/components/chart/google/comboChart.vue"
import barChart from "@/components/chart/google/barChart.vue"
import wordTree from "@/components/chart/google/wordTree.vue"
import pieChart1 from "@/components/chart/google/pieChart1.vue"
import pieChart3 from "@/components/chart/google/pieChart3.vue"
import pieChart4 from "@/components/chart/google/pieChart4.vue"
export default {
    components: {
        areaChart,
        columnChart,
        ganttChart,
        lineChart,
        comboChart,
        barChart,
        wordTree,
        pieChart1,
        pieChart3,
        pieChart4
    }
}
</script>