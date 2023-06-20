<template>
     <Breadcrumbs main="Bonus Ui" title="Sweet Alert"/>
      <div class="container-fluid">
            <div class="row">
                <basicExample/>
                <advancedExample/>
                <alertExample/>
            </div>
      </div>
</template>
<script>
import basicExample from "@/components/advance/sweetalert/basicExample.vue"
import advancedExample from "@/components/advance/sweetalert/advancedExample.vue"
import alertExample from "@/components/advance/sweetalert/alertExample.vue"
export default {
    components:{
        basicExample,
        advancedExample,
        alertExample
    }
}
</script>