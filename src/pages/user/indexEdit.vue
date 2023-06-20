<template>
     <Breadcrumbs main="User" title="Edit Profile"/>
     <div class="container-fluid">
            <div class="edit-profile">
              <div class="row">
                  <userProfile/>
                  <editProfile/>
              </div>
            </div>
     </div>
</template>
<script>
import userProfile from "@/components/users/edit/userProfile.vue"
import editProfile from "@/components/users/edit/editProfile.vue"
export default {
    components:{
        userProfile,
        editProfile
    }
}
</script>