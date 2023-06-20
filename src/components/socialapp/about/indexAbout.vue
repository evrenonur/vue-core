<template>
     <div class="row">
         <sociallAccording/>
          <div class="col-xl-6 col-md-7 box-col-40 xl-40">
                      <div class="row">
                          <addFriend/>
                          <hobbiesView/>
                          <educationView/>
                          <yourProfile/>
                          <activityLog/>
                      </div>
          </div>
          <profileIntro/>
     </div>
</template>
<script>
import sociallAccording from "@/components/common/sociallAccording.vue"
import addFriend from "./addFriend.vue"
import hobbiesView from './hobbiesView.vue'
import educationView from "./educationView.vue"
import yourProfile from "./yourProfile.vue"
import activityLog from "./activityLog.vue"
import profileIntro from "../profileIntro.vue"
export default {
    components:{
        sociallAccording,
        addFriend,
        hobbiesView,
        educationView,
        yourProfile,
        activityLog,
        profileIntro
    }
}
</script>