<template>
     <Breadcrumbs main="Form Controls" title="Checkbox & Radio"/>
        <div class="container-fluid">
            <div class="row">
                <customRadio/>
                <customCheckbox/>
                <squareCheckout/>
                <animatedRadio/>
            </div>
        </div>
</template>
<script>
import customRadio from "@/components/forms/formcontrols/Checkbox&Radio/customRadio.vue"
import customCheckbox from "@/components/forms/formcontrols/Checkbox&Radio/customCheckbox.vue"
import squareCheckout from "@/components/forms/formcontrols/Checkbox&Radio/squareCheckout.vue"
import animatedRadio from "@/components/forms/formcontrols/Checkbox&Radio/animatedButtons.vue"
export default {
    components:{
        customRadio,
        customCheckbox,
        squareCheckout,
        animatedRadio
    }
}
</script>