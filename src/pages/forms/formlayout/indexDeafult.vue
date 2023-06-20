<template>
      <Breadcrumbs main="Form Layout" title="Default Forms"/>
       <div class="container-fluid">
            <div class="row">
                <deafultLayout/>
                <magaForm/>
            </div>
       </div>
</template>
<script>
import deafultLayout from "@/components/forms/formlayout/deafultLayout.vue"
import magaForm from "@/components/forms/formlayout/magaForm.vue"
export default {
    components:{
        deafultLayout,
        magaForm
    }
}
</script>