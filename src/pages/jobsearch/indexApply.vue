<template>
     <Breadcrumbs main="Job Search" title="Apply" />
       <div class="container-fluid job-cardview">
            <div class="row">
                <jobSidebar/>
                <jobApply/>
            </div>
       </div>
</template>
<script>
import jobSidebar from "@/components/common/jobSidebar.vue"
import jobApply from "@/components/jobsearch/apply/jobApply.vue"
export default {
    components:{
        jobSidebar,
       jobApply
    }
}
</script>