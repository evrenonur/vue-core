<template>
     <Breadcrumbs main="Form Widgets" title="Time Picker"/>
       <div class="container-fluid">
            <div class="row">
                 <defaultTime/>
            </div>
       </div>
</template>
<script>
import defaultTime from "@/components/forms/formwidgets/timepicker/defaultTime.vue"
export default {
    components:{
        defaultTime
    }
}
</script>