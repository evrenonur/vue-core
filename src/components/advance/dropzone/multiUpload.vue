<template>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-header pb-0">
        <h4>Multi File Upload</h4>
      </div>
      <div class="card-body">
        <DropZone :maxFileSize="Number(7000000)" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="1" />
      </div>
    </div>
  </div>
</template>
<script>
import DropZone from "dropzone-vue";
export default {
  components: {
    DropZone
  },
}
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>
