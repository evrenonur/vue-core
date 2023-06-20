<template>
      <Breadcrumbs main="Bootstrap Tables" title="Table Components"/>
       <div class="container-fluid">
            <div class="row">
                <uiTable/>
                <alertComponent/>
                <progressbarComponent/>
                <checkboxComponent/>
                <radioButtons/>
                <selectComponent/>
                <inputComponent/>
                <badgesComponent/>
                <tootipComponent/>
                <switchComponent/>
            </div>
       </div>
</template>
<script>
import uiTable from "@/components/table/tablecomponent/uiTable.vue"
import alertComponent from "@/components/table/tablecomponent/alertComponent.vue"
import progressbarComponent from "@/components/table/tablecomponent/progressbarComponent.vue"
import checkboxComponent from "@/components/table/tablecomponent/checkboxComponent.vue"
import radioButtons from "@/components/table/tablecomponent/radioButtons.vue"
import selectComponent from "@/components/table/tablecomponent/selectComponent.vue"
import inputComponent from "@/components/table/tablecomponent/inputComponent.vue"
import badgesComponent from "@/components/table/tablecomponent/badgesComponent.vue"
import tootipComponent from "@/components/table/tablecomponent/tootipComponent.vue"
import switchComponent from "@/components/table/tablecomponent/switchComponent.vue"
export default {
    components:{
        uiTable,
        alertComponent,
        progressbarComponent,
       checkboxComponent,
       radioButtons,
       selectComponent,
       inputComponent,
       badgesComponent,
       tootipComponent,
       switchComponent
    }
}
</script>