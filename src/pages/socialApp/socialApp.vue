<template>
 <Breadcrumbs main="Apps" title="Social App"/>
    <div class="container-fluid">
            <div class="user-profile social-app-profile">
              <div class="row"> 
             <socialHeader/>
              </div>
            </div>
    </div>
</template>
<script>
import socialHeader from "@/components/socialapp/socialHeader.vue"
export default {
    components:{
        socialHeader
    }
}
</script>