<template>
  <div class="col-xl-3 box-col-4 xl-30 box-col-30">
    <div class="md-sidebar email-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
        @click="collapseFilter()">bookmark filter</a>
      <div class="md-sidebar-aside email-left-aside" :class="filtered ? 'open' : ''">
        <div class="card">
          <div class="card-body">
            <div class="email-app-sidebar left-bookmark">
              <div class="d-xxl-flex d-block">
                <div class="flex-shrink-0"><img class="me-3 rounded-circle" src="@/assets/images/user/user.png" alt="">
                </div>
                <div class="flex-grow-1">
                  <h6 class="f-w-600"> <router-link to="/users/profile"> MARK JENCO</router-link></h6>
                  <p>Markjecno@gmail.com</p>
                </div>
              </div>
              <ul class="nav main-menu custom-scrollbar" role="tablist">
                <li class="nav-item">
                  <button class="btn-primary badge-light btn-block btn-mail" type="button" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"><vue-feather class="me-2" type="check-circle"></vue-feather>New
                    Task</button>
                  <newTask />
                </li>
                <li class="nav-item"><span class="main-title"> Views</span></li>
                <li><a id="pills-created-tab" data-bs-toggle="pill" href="#pills-created" role="tab"
                    aria-controls="pills-created" aria-selected="true"><span class="title"
                      v-on:click="say('pills_created')"> Created by me</span></a></li>
                <li><a class="show" id="pills-todaytask-tab" data-bs-toggle="pill" href="#pills-todaytask" role="tab"
                    aria-controls="pills-todaytask" aria-selected="false"><span class="title"
                      v-on:click="say('pills-todaytask')"> Today's Tasks</span></a></li>
                <li><a class="show" id="pills-delayed-tab" data-bs-toggle="pill" href="#pills-delayed" role="tab"
                    aria-controls="pills-delayed" aria-selected="false"><span class="title"
                      v-on:click="say('pills-delayed')"> Delayed Tasks</span></a></li>
                <li><a class="show" id="pills-upcoming-tab" data-bs-toggle="pill" href="#pills-upcoming" role="tab"
                    aria-controls="pills-upcoming" aria-selected="false"><span class="title"
                      v-on:click="say('pills-upcoming')">Upcoming Tasks</span></a></li>
                <li><a class="show" id="pills-weekly-tab" data-bs-toggle="pill" href="#pills-weekly" role="tab"
                    aria-controls="pills-weekly" aria-selected="false"><span class="title"
                      v-on:click="say('pills-weekly')">This week tasks</span></a></li>
                <li><a class="show" id="pills-monthly-tab" data-bs-toggle="pill" href="#pills-monthly" role="tab"
                    aria-controls="pills-monthly" aria-selected="false"><span class="title"
                      v-on:click="say('ppills-monthly')">This month tasks</span></a></li>
                <li><a class="show" id="pills-assigned-tab" data-bs-toggle="pill" href="#pills-assigned" role="tab"
                    aria-controls="pills-assigned" aria-selected="false"><span class="title"
                      v-on:click="say('pills-assigned')">Assigned to me</span></a></li>
                <li><a class="show" id="pills-tasks-tab" data-bs-toggle="pill" href="#pills-tasks" role="tab"
                    aria-controls="pills-tasks" aria-selected="false"><span class="title"
                      v-on:click="say('pills-tasks')">My tasks</span></a></li>
                <li>
                  <hr>
                </li>
                <li><span class="main-title"> Tags<span class="pull-right"><a href="javascript:void(0)"
                        data-bs-toggle="modal" data-bs-target="#createtag"><i data-feather=""><vue-feather
                            type="plus-circle"></vue-feather></i></a></span></span></li>
                <li><a class="show" id="pills-notification-tab" data-bs-toggle="pill" href="#pills-notification"
                    role="tab" aria-controls="pills-notification" aria-selected="false"><span class="title"
                      v-on:click="say('pills-notification')"> Notification</span></a></li>
                <li><a class="show" id="pills-newsletter-tab" data-bs-toggle="pill" href="#pills-newsletter" role="tab"
                    aria-controls="pills-newsletter" aria-selected="false"><span class="title"
                      v-on:click="say('pills-newsletter')"> Newsletter</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-9 col-md-12 box-col-8 xl-70 box-col-70">
    <div class="email-right-aside bookmark-tabcontent">
      <div class="card email-body radius-left">
        <div class="ps-0">
          <div class="tab-content">
            <div class="tab-pane fade" id="pills-created"
              v-bind:class="(activeclass === 'pills_created') ? 'active show' : 'none'" role="tabpanel"
              aria-labelledby="pills-created-tab">
              <createdView />
            </div>
            <div class="fade tab-pane" id="pills-todaytask" role="tabpanel"
              v-bind:class="(activeclass === 'pills-todaytask') ? 'active show' : ''"
              aria-labelledby="pills-todaytask-tab">
              <todayTask />
            </div>
            <div class="fade tab-pane" id="pills-delayed"
              v-bind:class="(activeclass === 'pills-delayed') ? 'active show' : ''" role="tabpanel"
              aria-labelledby="pills-delayed-tab">
              <delayedTasks />
            </div>
            <div class="fade tab-pane" id="pills-upcoming"
              v-bind:class="(activeclass === 'pills-upcoming') ? 'active show' : ''" role="tabpanel"
              aria-labelledby="pills-upcoming-tab">
              <upcomingTasks />
            </div>
            <div class="fade tab-pane" id="pills-weekly"
              v-bind:class="(activeclass === 'pills-weekly') ? 'active show' : ''" role="tabpanel"
              aria-labelledby="pills-weekly-tab">
              <weekTasks />
            </div>
            <div class="fade tab-pane" id="pills-monthly"
              v-bind:class="(activeclass === 'pills-monthly') ? 'active show' : ''" role="tabpanel"
              aria-labelledby="pills-monthly-tab">
              <monthTasks />
            </div>
            <div class="fade tab-pane" id="pills-assigned"
              v-bind:class="(activeclass === 'pills-assigned') ? 'active show' : ''" role="tabpanel"
              aria-labelledby="pills-assigned-tab">
              <assignedView />
            </div>
            <div class="fade tab-pane" id="pills-tasks"
              v-bind:class="(activeclass === 'pills-tasks') ? 'active show' : ''" role="tabpanel"
              aria-labelledby="pills-tasks-tab">
              <myTasks />
            </div>
            <div class="fade tab-pane" id="pills-notification"
              v-bind:class="(activeclass === 'pills-notification') ? 'active show' : ''" role="tabpanel"
              aria-labelledby="pills-notification-tab">
              <notificationView />
            </div>
            <div class="fade tab-pane" id="pills-newsletter"
              v-bind:class="(activeclass === 'pills-newsletter') ? 'active show' : ''" role="tabpanel"
              aria-labelledby="pills-newsletter-tab">
              <newsLetter />
            </div>
            <careateTag />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import newTask from "./newTask.vue"
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
  components: {
    newTask,
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
  data() {
    return {
      activeclass: 'pills_created',
      filtered: false,
    };
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path);
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