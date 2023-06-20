<template>
     <Breadcrumbs main="Job Search" title="Job Details" />
      <div class="container-fluid job-cardview">
            <div class="row">
                 <jobSidebar/>
                 <jobDetails/>
            </div>
      </div>
</template>
<script>
import jobSidebar from "@/components/common/jobSidebar.vue"
import jobDetails from "@/components/jobsearch/details/jobDetails.vue"
export default {
    components:{
        jobSidebar,
       jobDetails
    }
}
</script>