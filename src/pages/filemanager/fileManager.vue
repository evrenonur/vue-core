<template>
    <Breadcrumbs main="Apps" title="File Manager" />
    <div class="container-fluid">
            <div class="row">
                <fileSidebar/>
                <fileContent/>
            </div>
    </div>
</template>
<script>
import fileSidebar from "@/components/fileManager/fileSidebar.vue"
import fileContent from "@/components/fileManager/fileContent.vue"
export default {
    components:{
        fileSidebar,
        fileContent
    }
}
</script>