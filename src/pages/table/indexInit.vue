<template>
     <Breadcrumbs main="Data Tables" title="Basic DataTables"/>
      <div class="container-fluid">
            <div class="row">
                <zeroConfiguration/>
            </div>
      </div>
</template>
<script>
import zeroConfiguration from "@/components/table/datatable/zeroConfiguration.vue"
export default {
    components:{
        zeroConfiguration
    }
}
</script>