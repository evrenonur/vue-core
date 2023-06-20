<template>
      <div class="col-xl-3 xl-40 box-col-40">
                <div class="job-sidebar md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)" @click="collapseFilter()">Knowledge filter</a>
                  <div class="md-sidebar-aside job-left-aside custom-scrollbar custom-scrollbar"  :class="filtered?'open':''">
                    <div class="default-according style-1 job-accordion" id="accordionoc">
                      <div class="row">
                        <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link ps-0" data-bs-toggle="collapse" :aria-expanded="isActive?'true':'false'" data-bs-target="#collapseicon1" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Knowledge Categories</button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="categories">
                                <div class="learning-header"><span class="f-w-600">Design</span></div>
                                <ul>
                                  <li><a href="#">UI Design </a><span class="badge badge-primary pull-right">28</span></li>
                                  <li><a href="#">UX Design </a><span class="badge badge-primary pull-right">35</span></li>
                                  <li><a href="#">Interface Design </a><span class="badge badge-primary pull-right">17</span></li>
                                  <li><a href="#">User Experience </a><span class="badge badge-primary pull-right">26</span></li>
                                </ul>
                              </div>
                              <div class="categories pt-0">
                                <div class="learning-header"><span class="f-w-600">Development</span></div>
                                <ul>
                                  <li><a href="#">Frontend Development</a><span class="badge badge-primary pull-right">48</span></li>
                                  <li><a href="#">Backend Development</a><span class="badge badge-primary pull-right">19</span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <upcomingCourses/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import upcomingCourses from "./upcomingCourses.vue"
export default {
    components:{upcomingCourses},
     data(){
    return{
     isActive: true,
    filtered: false,
    }
  },
  methods: {
toggle() {
      this.isActive = !this.isActive
    },
     collapseFilter() {
        this.filtered = !this.filtered;
      },
  }
}
</script>