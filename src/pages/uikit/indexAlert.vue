<template>
    <Breadcrumbs main="Ui Kits" title="Alert"/>
     <div class="container-fluid">
            <div class="row">
                <colorTemplet/>
                <dismissingDark/>
                <iconAlert/>
                <lightAlert/>
                <linkAlert/>
                <dismissingLight/>
                <outlineAlert/>
                <outlineDark/>
                <outlineIcon/>
                <iconInverse/>
                <textAction/>
                <additionalContent/>
            </div>
     </div>
</template>
<script>
import colorTemplet from "@/components/uikit/alert/colorTemplet.vue"
import dismissingDark from "@/components/uikit/alert/dismissingDark.vue"
import iconAlert from "@/components/uikit/alert/iconAlert.vue"
import lightAlert from "@/components/uikit/alert/lightAlert.vue"
import linkAlert from "@/components/uikit/alert/linkAlert.vue"
import dismissingLight from "@/components/uikit/alert/dismissingLight.vue"
import outlineAlert from "@/components/uikit/alert/outlineAlert.vue"
import outlineDark from "@/components/uikit/alert/outlineDark.vue"
import outlineIcon from "@/components/uikit/alert/outlineIcon.vue"
import iconInverse from "@/components/uikit/alert/iconInverse.vue"
import textAction from "@/components/uikit/alert/textAction.vue"
import additionalContent from "@/components/uikit/alert/additionalContent.vue"
export default {
    components:{
        colorTemplet,
        dismissingDark,
        iconAlert,
        lightAlert,
        linkAlert,
        dismissingLight,
        outlineAlert,
        outlineDark,
        outlineIcon,
        iconInverse,
        textAction,
        additionalContent
    }
}
</script>