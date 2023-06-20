<template>
     <div class="col-xxl-9 col-xl-8 col-md-12 box-col-8 box-col-70">
                  <div class="email-right-aside bookmark-tabcontent">
                    <div class="card email-body radius-left">
                      <div class="ps-0">
                        <div class="tab-content">
                          <div class="tab-pane fade" id="pills-created" v-bind:class="(activeclass==='pills_created') ? 'active show': 'none'" role="tabpanel" aria-labelledby="pills-created-tab">
                                <createdView/>
                            </div>
                            <div class="fade tab-pane" id="pills-todaytask" role="tabpanel" v-bind:class="(activeclass==='pills-todaytask') ? 'active show': ''" aria-labelledby="pills-todaytask-tab">
                                <todayTask/>
                            </div>
                            <div class="fade tab-pane" id="pills-delayed" v-bind:class="(activeclass==='pills-delayed') ? 'active show': ''"  role="tabpanel" aria-labelledby="pills-delayed-tab">
                            <delayedTasks/>
                            </div>
                            <div class="fade tab-pane" id="pills-upcoming" v-bind:class="(activeclass==='pills-upcoming') ? 'active show': ''" role="tabpanel" aria-labelledby="pills-upcoming-tab">
                                <upcomingTasks/>
                            </div>
                            <div class="fade tab-pane" id="pills-weekly" v-bind:class="(activeclass==='pills-weekly') ? 'active show': ''" role="tabpanel" aria-labelledby="pills-weekly-tab">
                                <weekTasks/>
                            </div>
                            <div class="fade tab-pane" id="pills-monthly" v-bind:class="(activeclass==='pills-monthly') ? 'active show': ''" role="tabpanel" aria-labelledby="pills-monthly-tab">
                                <monthTasks/>
                            </div>
                            <div class="fade tab-pane" id="pills-assigned" v-bind:class="(activeclass==='pills-assigned') ? 'active show': ''" role="tabpanel" aria-labelledby="pills-assigned-tab">
                                <assignedView/>
                            </div>
                            <div class="fade tab-pane" id="pills-tasks" v-bind:class="(activeclass==='pills-tasks') ? 'active show': ''" role="tabpanel" aria-labelledby="pills-tasks-tab">
                                <myTasks/>
                            </div>
                            <div class="fade tab-pane" id="pills-notification" v-bind:class="(activeclass==='pills-notification') ? 'active show': ''" role="tabpanel" aria-labelledby="pills-notification-tab">
                                <notificationView/>
                            </div>
                            <div class="fade tab-pane" id="pills-newsletter" v-bind:class="(activeclass==='pills-newsletter') ? 'active show': ''" role="tabpanel" aria-labelledby="pills-newsletter-tab">
                                <newsLetter/>
                            </div>
                           <careateTag/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</template>
<script>
import myTasks from "./myTasks.vue"
import monthTasks from "./monthTasks.vue"
import weekTasks from "./weekTasks.vue"
import upcomingTasks from "./upcomingTasks.vue"
import delayedTasks from "./delayedTasks.vue"
import todayTask from "./todayTask.vue"
import createdView from "./createdView.vue"
import assignedView from "./assignedView.vue"
import notificationView from "./notificationView.vue"
import newsLetter from "./newsLetter.vue"
import careateTag from "./careateTag.vue"
export default {
    components:{
      createdView,
      todayTask,
      delayedTasks,
      upcomingTasks,
      weekTasks,
      monthTasks,
      assignedView,
      myTasks,
      notificationView,
      newsLetter,
      careateTag
    },
     data(){
      return {
        activeclass : 'pills_created',
        filtered: false,
      };
    },
    methods:{
      getImgUrl(path) {
        return require('@/assets/images/'+path);
      },
      say: function (message) {
        this.activeclass = message;
      },
       collapseFilter() {
        this.filtered = !this.filtered;
      },
    }
}
</script>