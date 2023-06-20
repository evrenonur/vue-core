<template>
    <Breadcrumbs main="Ui Kits" title="Tooltip"/>
     <div class="container-fluid">
            <div class="row">
                <basicTooltip/>
            </div>
     </div>
</template>
<script>
import basicTooltip from "@/components/uikit/tooltip/basicTooltip.vue"
export default {
    components:{
        basicTooltip
    }
}
</script>