<template>
     <Breadcrumbs main="Ui Kits" title="Popover"/>
      <div class="container-fluid">
            <div class="row popover-main">
                <basicPopover/>
            </div>
      </div>
</template>
<script>
import basicPopover from "@/components/uikit/popover/basicPopover.vue"
export default {
    components:{
        basicPopover
    }
}
</script>