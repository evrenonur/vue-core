<template>
     <Breadcrumbs main="Gallery" title="Masonry Gallery" />
      <div class="container-fluid">
            <div class="row">
                <masonryGallery/>
            </div>
      </div>
</template>
<script>
import masonryGallery from "@/components/gallery/masonryGallery.vue"
export default {
    components:{
        masonryGallery
    }
}
</script>