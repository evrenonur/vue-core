<template>
      <Breadcrumbs main="Apps" title="Kanban Board"/>
       <div class="container-fluid jkanban-container">
            <div class="row">
                <kanbanDemo/>
                <customDemo/>
                <apiDemo/>
            </div>
       </div>
</template>
<script>
import kanbanDemo from "@/components/kanbanboard/kanbanDemo.vue"
import customDemo from "@/components/kanbanboard/customDemo.vue"
import apiDemo from "@/components/kanbanboard/apiDemo.vue"
export default {
    components:{
        kanbanDemo,
        customDemo,
        apiDemo
    }
}
</script>