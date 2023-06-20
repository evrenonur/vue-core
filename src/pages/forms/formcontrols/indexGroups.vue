<template>
     <Breadcrumbs main="Form Controls" title="Input Groups"/>
    <div class="container-fluid">
            <div class="row">
                <basicInput/>
                <basicGroup/>
            </div>
    </div>
</template>
<script>
import basicInput from "@/components/forms/formcontrols/inputgroup/basicInput.vue"
import basicGroup from "@/components/forms/formcontrols/inputgroup/basicGroup.vue"
export default {
    components:{
        basicInput,
        basicGroup
    }
}
</script>