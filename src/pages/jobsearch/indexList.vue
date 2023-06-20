<template>
    <Breadcrumbs main="Job Search" title="List View" />
    <div class="container-fluid job-cardview">
            <div class="row">
                 <jobSidebar/>
                 <jobList/>
            </div>
    </div>
</template>
<script>
import jobSidebar from "@/components/common/jobSidebar.vue"
import jobList from "@/components/jobsearch/list/jobList.vue"
export default {
    components:{
        jobSidebar,
       jobList
    }
}
</script>