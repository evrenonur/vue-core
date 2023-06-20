<template>
     <Breadcrumbs main="Gallery" title="Gallery Grid With Description" />
      <div class="container-fluid">
            <div class="row">
                <gridDesc/>
            </div>
      </div>
</template>
<script>
import gridDesc from "@/components/gallery/gridDesc.vue"
export default {
    components:{
        gridDesc
    }
}
</script>