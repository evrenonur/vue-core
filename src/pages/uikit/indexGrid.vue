<template>
    <Breadcrumbs main="Ui Kits" title="Grid"/>
     <div class="container-fluid grid-wrrapper">
            <div class="row">
                <optionsGrid/>
                <columnGrid/>
                <verticalGrid/>
                <nestingGrid/>
            </div>
     </div>
</template>
<script>
import optionsGrid from '@/components/uikit/grid/optionsGrid.vue'
import columnGrid from "@/components/uikit/grid/columnGrid.vue"
import verticalGrid from "@/components/uikit/grid/verticalGrid.vue"
import nestingGrid from "@/components/uikit/grid/nestingGrid.vue"
export default {
    components:{
        optionsGrid,
        columnGrid,
        verticalGrid,
        nestingGrid
    }
}
</script>