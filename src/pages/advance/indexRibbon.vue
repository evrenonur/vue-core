<template>
     <Breadcrumbs main="Bonus Ui" title="Ribbons"/>
        <div class="container-fluid">
            <coloredRibbons/>
            <ribbonsRight/>
        </div>
</template>
<script>
import coloredRibbons from "@/components/advance/ribbons/coloredRibbons.vue"
import ribbonsRight from "@/components/advance/ribbons/ribbonsRight.vue"
export default {
    components:{
        coloredRibbons,
        ribbonsRight
    }
}
</script>