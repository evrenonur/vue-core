<template>
      <Breadcrumbs main="Form Controls" title="Base Inputs"/>
       <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                  <basicForm/>
                  <basicHTML/>
              </div>
              <edgesInput/>
              <faltInput/>
              <raiseInput/>
              <solidInput/>
              <inputSizing/>
              <customInput/>
            </div>
       </div>
</template>
<script>
import basicForm from "@/components/forms/formcontrols/baseinputs/basicForm.vue"
import basicHTML from "@/components/forms/formcontrols/baseinputs/basicHTML.vue"
import edgesInput from "@/components/forms/formcontrols/baseinputs/edgesInput.vue"
import faltInput from "@/components/forms/formcontrols/baseinputs/faltInput.vue"
import raiseInput from "@/components/forms/formcontrols/baseinputs/raiseInput.vue"
import solidInput from "@/components/forms/formcontrols/baseinputs/solidInput.vue"
import inputSizing from "@/components/forms/formcontrols/baseinputs/inputSizing.vue"
import customInput from "@/components/forms/formcontrols/baseinputs/customInput.vue"
export default {
    components:{
        basicForm,
        basicHTML,
        edgesInput,
        faltInput,
        raiseInput,
        solidInput,
        inputSizing,
        customInput
    }
}
</script>