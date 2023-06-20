<template>
     <div class="row">
         <sociallAccording/>
         <socialPost/>
         <profileIntro/>
     </div>
</template>
<script>
import sociallAccording from "@/components/common/sociallAccording.vue"
import socialPost from "./socialPost.vue"
import profileIntro from "./profileIntro.vue"
export default {
    components:{
         sociallAccording,
         socialPost,
         profileIntro
    }
}
</script>