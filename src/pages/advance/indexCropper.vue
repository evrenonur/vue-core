<template>
     <Breadcrumbs main="Bonus Ui" title="Image Cropper"/>
     <div class="container-fluid img-crop">
            <div class="img-cropper">
              <div class="row">
                   <div class="col-sm-12">
                  <imageCropper/>
                   </div>
              </div>
            </div>
     </div>
</template>
<script>
import imageCropper from "@/components/advance/cropper/imageCropper.vue"
export default {
    components:{
        imageCropper
    }
}
</script>