<template>
      <Breadcrumbs main="Users" title="User Profile"/>
       <div class="container-fluid">
            <div class="user-profile">
              <div class="row">
                  <profileHeader/>
                <div class="col-xl-3 col-lg-4 col-md-5 xl-35 box-col-40">
                  <div class="default-according style-1 job-accordion">
                    <div class="row">
                        <defaultAccording/>
                    </div>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-8 col-md-7 xl-65 box-col-60">
                  <div class="row">
                      <profilePost/>
                  </div>
                </div>
              </div>
            </div>
       </div>
</template>
<script>
import profileHeader from "@/components/users/profile/profileHeader.vue"
import defaultAccording from "@/components/common/defaultAccording.vue"
import profilePost from "@/components/users/profile/profilePost.vue"
export default {
    components:{
        profileHeader,
        defaultAccording,
        profilePost
    }
}
</script>