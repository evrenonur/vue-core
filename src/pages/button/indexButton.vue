<template>
     <Breadcrumbs main="Buttons" title="Default Style" />
       <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <defaultButton/>
                <buttonGroup/>
                <sizingButton/>
              </div>
            </div>
       </div>
</template>
<script>
import defaultButton from "@/components/buttons/defaultButton.vue"
import buttonGroup from "@/components/buttons/buttonGroup.vue"
import sizingButton from "@/components/buttons/sizingButton.vue"
export default {
    components:{
        defaultButton,
        buttonGroup,
        sizingButton
    }
}
</script>