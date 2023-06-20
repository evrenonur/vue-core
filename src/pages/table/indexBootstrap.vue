<template>
      <Breadcrumbs main="Bootstrap Tables" title="Bootstrap Basic Tables"/>
       <div class="container-fluid basic_table">
            <div class="row">
                <basicTable/>
                <inverseTable/>
                <hoverableTable/>
                <primaryBackground/>
                <captionTable/>
                <headOptions/>
                <stripedRow/>
                <breckpointSpecific/>
                <responsiveTable/>
                <sizingTable/>
                <customTable/>
                <dashedBorder/>
            </div>
       </div>
</template>
<script>
import basicTable from "@/components/table/bootstrap/basicTable.vue"
import inverseTable from "@/components/table/bootstrap/inverseTable.vue"
import hoverableTable from "@/components/table/bootstrap/hoverableTable.vue"
import primaryBackground from "@/components/table/bootstrap/primaryBackground.vue"
import captionTable from "@/components/table/bootstrap/captionTable.vue"
import headOptions from "@/components/table/bootstrap/headOptions.vue"
import stripedRow from "@/components/table/bootstrap/stripedRow.vue"
import breckpointSpecific from "@/components/table/bootstrap/breckpointSpecific.vue"
import responsiveTable from "@/components/table/bootstrap/responsiveTable.vue"
import sizingTable from "@/components/table/bootstrap/sizingTable.vue"
import customTable from "@/components/table/bootstrap/customTable.vue"
import dashedBorder from "@/components/table/bootstrap/dashedBorder.vue"

export default {
    components:{
        basicTable,
        inverseTable,
        hoverableTable,
        primaryBackground,
        captionTable,
        headOptions,
        stripedRow,
        breckpointSpecific,
        responsiveTable,
        sizingTable,
        customTable,
        dashedBorder
    }
}
</script>