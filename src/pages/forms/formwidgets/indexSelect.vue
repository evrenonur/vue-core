<template>
    <Breadcrumbs main="Form Widgets" title="Select2"/>
      <div class="container-fluid">
            <div class="select2-drpdwn">
              <div class="row">
                  <selectView/>
                  <outlineColor/>
                  <fullColored/>
              </div>
            </div>
      </div>
</template>
<script>
import selectView from "@/components/forms/formwidgets/select2/selectView.vue"
import outlineColor from "@/components/forms/formwidgets/select2/outlineColor.vue"
import fullColored from "@/components/forms/formwidgets/select2/fullColored.vue"
export default {
   components:{
       selectView,
       outlineColor,
       fullColored
   } 
}
</script>