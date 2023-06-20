<template>
     <Breadcrumbs main="Form Layout" title="Step Form Wizard"/>
      <div class="container-fluid">
            <div class="row">
               <SimpleWizard/> 
            </div>
      </div>
</template>
<script>
import SimpleWizard from "@/components/forms/formlayout/formwizardtwo/SimpleWizard.vue"
export default {
    components:{
        SimpleWizard
    }
}
</script>