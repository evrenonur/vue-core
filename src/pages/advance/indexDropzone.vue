<template>
     <Breadcrumbs main="Bonus Ui" title="Dropzone"/>
     <div class="container-fluid">
            <div class="row">
                <singleUpload/>
                <multiUpload/>
                <fileType/>
            </div>
     </div>
</template>
<script>
import singleUpload from "@/components/advance/dropzone/singleUpload.vue"
import multiUpload from "@/components/advance/dropzone/multiUpload.vue"
import fileType from "@/components/advance/dropzone/fileType.vue"
export default {
    components:{
        singleUpload,
        multiUpload,
        fileType
    }
}
</script>