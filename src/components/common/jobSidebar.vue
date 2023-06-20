<template>
    <div class="col-xxl-3 col-xl-4 box-col-30">
                <div class="md-sidebar job-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)" @click="collapseFilter()">job filter</a>
                  <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered?'open':''">
                    <div class="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                      <div class="row">
                          <filterView/>
                          <locationView/>
                          <jobTitle/>
                          <industryView/>
                          <specificSkills/>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
</template>
<script>
import filterView from "@/components/jobsearch/jobfilter/filterView.vue"
import locationView from "@/components/jobsearch/jobfilter/locationView.vue"
import jobTitle from "@/components/jobsearch/jobfilter/jobTitle.vue"
import industryView from "@/components/jobsearch/jobfilter/industryView.vue"
import specificSkills from "@/components/jobsearch/jobfilter/specificSkills.vue"
export default {
    components:{
        filterView,
        locationView,
        jobTitle,
        industryView,
        specificSkills
    },
    data(){
      return {
        
        filtered: false,
      };
    },
    methods:{
      collapseFilter() {
        this.filtered = !this.filtered;
      },
    },
    
}
</script>