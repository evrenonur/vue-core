<template>
     <Breadcrumbs main="Project" title="project list" />
      <div class="container-fluid">
            <div class="row project-cards">
                <projectTab/>
            </div>
      </div>
</template>
<script>
import projectTab from "@/components/project/projectlist/projectTab.vue"
export default {
    components:{
        projectTab
    }
}
</script>