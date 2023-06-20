<template>
    <Breadcrumbs main="Ui Kits" title="accordion"/>
    <div class="container-fluid">
            <div class="row">
                <basicAccordion/>
                <closeAccordion/>
                <colorAccordion/>
                <iconAccordion/>
            </div>
    </div>
</template>
<script>
import basicAccordion from "@/components/uikit/accordion/basicAccordion.vue"
import closeAccordion from "@/components/uikit/accordion/closeAccordion.vue"
import colorAccordion from "@/components/uikit/accordion/colorAccordion.vue"
import iconAccordion from "@/components/uikit/accordion/iconAccordion.vue"
export default {
    components:{
        basicAccordion,
        closeAccordion,
        colorAccordion,
        iconAccordion
    }
}
</script>