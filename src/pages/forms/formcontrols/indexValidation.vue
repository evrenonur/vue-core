<template>
    <Breadcrumbs main="Form Controls" title="Validation Forms" />
      <div class="container-fluid form-validate">
            <div class="row">
              <div class="col-sm-12">
                  <customForm/>
                  <browserForm/>
                  <supportedForm/>
                  <tooltipsForm/>
              </div>
            </div>
      </div>
</template>
<script>
import customForm from "@/components/forms/formcontrols/validation/customForm.vue"
import browserForm from "@/components/forms/formcontrols/validation/browserForm.vue"
import supportedForm from "@/components/forms/formcontrols/validation/supportedForm.vue"
import tooltipsForm from "@/components/forms/formcontrols/validation/tooltipsForm.vue"
export default {
    components:{
        customForm,
        browserForm,
        supportedForm,
        tooltipsForm
    }
}
</script>