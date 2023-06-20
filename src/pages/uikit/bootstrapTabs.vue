<template>
    <Breadcrumbs main="Tabs" title="Bootstrap Tabs" />
    <div class="container-fluid">
        <div class="row">
            <basicTab />
            <leftAlign />
            <iconTabs />
            <rightAlign />
            <verticalTabs />
            <pillTabs />
            <colorTabs />
            <!-- <tabsColor/> -->
        </div>
    </div>
</template>
<script>
import basicTab from "@/components/uikit/tabs/bootstrap/basicTab.vue"
import leftAlign from "@/components/uikit/tabs/bootstrap/leftAlign.vue"
import iconTabs from "@/components/uikit/tabs/bootstrap/iconTabs.vue"
import rightAlign from "@/components/uikit/tabs/bootstrap/rightAlign.vue"
import verticalTabs from "@/components/uikit/tabs/bootstrap/verticalTabs.vue"
import pillTabs from "@/components/uikit/tabs/bootstrap/pillTabs.vue"
import colorTabs from "@/components/uikit/tabs/bootstrap/colorTabs.vue"

export default {
    components:{
        basicTab,
        leftAlign,
        iconTabs,
        rightAlign,
        verticalTabs,
        pillTabs,
        colorTabs,
    
    }
}
</script>