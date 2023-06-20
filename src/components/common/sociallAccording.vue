<template>
   
    <div class="col-xl-3 col-md-5 box-col-30 xl-30">
      <div class="default-according style-1 job-accordion" id="accordionoc4">
        <div class="row">
            <myProfile/>
            <mutualFriend/>
            <activityFeed/>
        </div>
      </div>
    </div>
 
</template>
<script>
import myProfile from "@/components/socialapp/myProfile.vue"
import mutualFriend from "@/components/socialapp/mutualFriend.vue"
import activityFeed from "@/components/socialapp/activityFeed.vue"
export default {
    components:{
        myProfile,
        mutualFriend,
        activityFeed
    }
}
</script>