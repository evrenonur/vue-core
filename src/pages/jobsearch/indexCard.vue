<template>
     <Breadcrumbs main="Job Search" title="Cards View" />
      <div class="container-fluid job-cardview">
            <div class="row">
                <jobSidebar/>
                <cardView/>
            </div>
      </div>
</template>
<script>
import jobSidebar from "@/components/common/jobSidebar.vue"
import cardView from "@/components/jobsearch/card/cardView.vue"
export default {
    components:{
        jobSidebar,
        cardView
    }
}
</script>