<template>
     <Breadcrumbs main="Form Controls" title="Mega Options"/>
       <div class="container-fluid mega-options">
            <div class="row">
                <defaultStyle/>
                <noBorder/>
                <offerStyle/>
                <inlineStyle/>
                <magaVertical/>
                <magaHorizontal/>
            </div>
       </div>
</template>
<script>
import defaultStyle from "@/components/forms/formcontrols/megaoption/defaultStyle.vue"
import noBorder from "@/components/forms/formcontrols/megaoption/borderStyle.vue"
import offerStyle from "@/components/forms/formcontrols/megaoption/offerStyle.vue"
import inlineStyle from "@/components/forms/formcontrols/megaoption/inlineStyle.vue"
import magaVertical from "@/components/forms/formcontrols/megaoption/magaVertical.vue"
import magaHorizontal from "@/components/forms/formcontrols/megaoption/magaHorizontal.vue"
export default {
    components:{
        defaultStyle,
        noBorder,
        offerStyle,
        inlineStyle,
        magaVertical,
        magaHorizontal
    }
}
</script>