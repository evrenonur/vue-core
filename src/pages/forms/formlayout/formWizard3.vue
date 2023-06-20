<template>
    <Breadcrumbs main="Form Layout" title="Form Wizard With Icon"/>
      <div class="container-fluid">
            <div class="row">
                <SimpleWizard/>
            </div>
      </div>
</template>
<script>
import SimpleWizard from "@/components/forms/formlayout/formwizardthree/SimpleWizard.vue"
export default {
    components:{
        SimpleWizard
    }
}
</script>