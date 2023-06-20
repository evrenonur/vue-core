<template>
     <Breadcrumbs main="Blog" title="Blog Details" />
     <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="blog-single">
                    <blogDetails/>
                    <commentBox/>
                </div>
              </div>
            </div>
     </div>
</template>
<script>
import blogDetails from "@/components/blog/single/blogDetails.vue"
import commentBox from "@/components/blog/single/commentBox.vue"
export default {
    components:{
        blogDetails,
        commentBox
    }
}
</script>