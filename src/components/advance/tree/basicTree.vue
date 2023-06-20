<template>
     <div class="col-sm-12 col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                     <h4>Basic Tree</h4>
                  </div>
                  <div class="card-body">
                    <div id="treecheckbox">
                      <Tree :nodes="menu" :use-icon="true" @nodeExpanded="onNodeExpanded" @update="onUpdate" />
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import treeMixin from "@/mixins/commen/treeMixin"

export default {
  
  mixins:[treeMixin],
};
</script>