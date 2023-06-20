<template>
    <Breadcrumbs main="Ui Kits" title="Progress"/>
     <div class="container-fluid">
            <div class="row">
                <basicProgress/>
                <largeProgress/>
                <customHeight/>
                <multipleProgress/>
                <statesStriped/>
                <animationProgress/>
            </div>
     </div>
</template>
<script>
import basicProgress from "@/components/uikit/progress/basicProgress.vue"
import largeProgress from "@/components/uikit/progress/largeProgress.vue"
import customHeight from "@/components/uikit/progress/customHeight.vue"
import multipleProgress from "@/components/uikit/progress/multipleProgress.vue"
import statesStriped from "@/components/uikit/progress/statesStriped.vue"
import animationProgress from "@/components/uikit/progress/animationProgress.vue"
export default {
    components:{
        largeProgress,
        basicProgress,
        customHeight,
        multipleProgress,
        statesStriped,
        animationProgress
    }
}
</script>