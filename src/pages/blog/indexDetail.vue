<template>
     <Breadcrumbs main="Blog" title="Blog Details" />
       <div class="container-fluid blog-page">
            <div class="row">
                <blogShadow/>
                <blogList/>
                <blogGrid/>
            </div>
       </div>
</template>
<script>
import blogShadow from "@/components/blog/details/blogShadow.vue"
import blogList from "@/components/blog/details/blogList.vue"
import blogGrid from "@/components/blog/details/blogGrid.vue"
export default {
    components:{
        blogShadow,
        blogList,
        blogGrid
    }
}
</script>