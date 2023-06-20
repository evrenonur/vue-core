<template>
     <Breadcrumbs main="Ui Kits" title="Helper Classes"/>
      <div class="container-fluid">
            <div class="row">
                <classesView/>
                <peddingClasses/>
                <paddingTopbuttom/>
                <marginClasses/>
                <marginTopbuttom/>
                <verticalImage/>
                <colorClasses/>
                <backgroundColor/>
                <borderRadius/>
                <fontClasses/>
                <borderColors/>
                <borderClass/>
            </div>
      </div>
</template>

<script>
import classesView from "@/components/uikit/helper/classesView.vue"
import peddingClasses from "@/components/uikit/helper/peddingClasses.vue"
import paddingTopbuttom from "@/components/uikit/helper/paddingTopbuttom.vue"
import marginClasses from "@/components/uikit/helper/marginClasses.vue"
import marginTopbuttom from "@/components/uikit/helper/marginTopbuttom.vue"
import verticalImage from "@/components/uikit/helper/verticalImage.vue"
import colorClasses from "@/components/uikit/helper/colorClasses.vue"
import backgroundColor from "@/components/uikit/helper/backgroundColor.vue"
import borderRadius from "@/components/uikit/helper/borderRadius.vue"
import fontClasses from "@/components/uikit/helper/fontClasses.vue"
import borderColors from "@/components/uikit/helper/borderColors.vue"
import borderClass from "@/components/uikit/helper/borderClass.vue"
export default {
    components:{
        classesView,
        peddingClasses,
        paddingTopbuttom,
        marginClasses,
        marginTopbuttom,
        verticalImage,
        colorClasses,
        backgroundColor,
        borderRadius,
        fontClasses,
        borderColors,
        borderClass
    }
}
</script>