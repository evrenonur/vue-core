<template>
     <div class="col-sm-12 col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Checkbox Tree</h4>
                  </div>
                  <div class="card-body">
                    <div id="treecheckbox">
                      <Tree :nodes="menu" :use-icon="false"  :use-checkbox="true" @nodeExpanded="onNodeExpanded" @update="onUpdate" />
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