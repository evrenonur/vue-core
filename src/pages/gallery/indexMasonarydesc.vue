<template>
    <Breadcrumbs main="Gallery" title="Masonry Gallery With Description"/>
       <div class="container-fluid">
            <div class="row">
                <masonaryDesc/>
            </div>
       </div>
</template>
<script>
import masonaryDesc from "@/components/gallery/masonaryDesc.vue"
export default {
    components:{
        masonaryDesc
    }
}
</script>