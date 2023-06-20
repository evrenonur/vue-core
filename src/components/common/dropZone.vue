<template>
             <DropZone
                :maxFileSize="Number(60000000)"
                :uploadOnDrop="true"
                :dropzoneMessageClassName="customClass"
              > 
              </DropZone>
</template>
<script>
import DropZone from "dropzone-vue";
export default {
  components:{
    DropZone
  },
}
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>