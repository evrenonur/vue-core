<template>
     <Breadcrumbs main="Form Widgets" title="Switch"/>
       <div class="container-fluid">
            <div class="row">
                <basicSwitch/>
                <colorSwitch/>
                <checkedoutline/>
                <uncheckedSwitch/>
                <sizingSwitch/>
                <iconSwitch/>
                <switchColor/>
            </div>
       </div>
</template>
<script>
import basicSwitch from "@/components/forms/formwidgets/switch/basicSwitch.vue"
import colorSwitch from "@/components/forms/formwidgets/switch/colorSwitch.vue"
import checkedoutline from "@/components/forms/formwidgets/switch/checkedSwitch.vue"
import uncheckedSwitch from "@/components/forms/formwidgets/switch/uncheckedSwitch.vue"
import sizingSwitch from "@/components/forms/formwidgets/switch/sizingSwitch.vue"
import iconSwitch from "@/components/forms/formwidgets/switch/iconSwitch.vue"
import switchColor from "@/components/forms/formwidgets/switch/switchColor.vue"
export default {
   components:{
       basicSwitch,
       colorSwitch,
       checkedoutline,
       uncheckedSwitch,
       sizingSwitch,
       iconSwitch,
       switchColor
   } 
}
</script>