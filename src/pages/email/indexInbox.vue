<template>
     <Breadcrumbs main="Email" title="Email Application"/>
      <div class="container-fluid">
            <div class="email-wrap">
              <div class="row">
                  <emailSidebar/>
                  <emailProfile/>
              </div>
            </div>
      </div>
</template>
<script>
import emailSidebar from "@/components/common/emailSidebar.vue"
import emailProfile from "@/components/email/inbox/emailProfile.vue"
export default {
    components:{
        emailSidebar,
        emailProfile
    }
}
</script>