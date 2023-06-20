<template>
    <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>File Type Validation</h4>
                  </div>
                  <div class="card-body">
                    <DropZone
                :maxFileSize="Number(60000000)"
                :uploadOnDrop="true"
                :multipleUpload="true"
                :parallelUpload="2"
              />
                  </div>
                </div>
              </div>
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
