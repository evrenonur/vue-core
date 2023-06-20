<template>
     <Breadcrumbs main="Bonus Ui" title="Tree View"/>
      <div class="container-fluid">
            <div class="row">
                <basicTree/>
                <checkTree/>
            </div>
      </div>
</template>
<script>
import basicTree from "@/components/advance/tree/basicTree.vue"
import checkTree from "@/components/advance/tree/checkTree.vue"
export default {
    components:{
        basicTree,
        checkTree
    }
}
</script>