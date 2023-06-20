<template>
     <Breadcrumbs main="Bonus Ui" title="Tabbed Card"/>
       <div class="container-fluid tabbed-cardpage basic-card">
            <div class="row">
                <simpleTab/>
                <iconTab/>
                <colorTab/>
                <materialTab/>
                <iconMaterial/>
                <colorMaterial/>
            </div>
       </div>
</template>
<script>
import simpleTab from "@/components/advance/tabbed/simpleTab.vue"
import iconTab from "@/components/advance/tabbed/iconTab.vue"
import colorTab from "@/components/advance/tabbed/colorTab.vue"
import materialTab from "@/components/advance/tabbed/materialTab.vue"
import iconMaterial from "@/components/advance/tabbed/iconMaterial.vue"
import colorMaterial from "@/components/advance/tabbed/colorMaterial.vue"
export default {
    components:{
        simpleTab,
        iconTab,
        colorTab,
        materialTab,
        iconMaterial,
        colorMaterial
    }
}
</script>