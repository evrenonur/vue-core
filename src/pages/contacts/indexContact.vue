<template>
    <Breadcrumbs main="Apps" title="Contacts" />
        <div class="container-fluid">
            <div class="email-wrap bookmark-wrap">
              <div class="row">
                  <contactSildebar/>
              </div>
            </div>
           </div>
</template>
<script>
import contactSildebar from "@/components/contact/contactSildebar.vue"
export default {
    components:{
        contactSildebar
    }
}
</script>