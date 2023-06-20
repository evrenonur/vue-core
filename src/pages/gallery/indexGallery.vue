<template>
     <Breadcrumbs main="Gallery" title="Gallery"/>
      <div class="container-fluid">
            <div class="row">
                <gridGallery/>
            </div>
      </div>
</template>
<script>
import gridGallery from "@/components/gallery/gridGallery.vue"
export default {
    components:{
        gridGallery
    }
}
</script>