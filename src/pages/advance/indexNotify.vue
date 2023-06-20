<template>
     <Breadcrumbs main="Bonus Ui" title="Bootstrap Notify"/>
      <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Bootstrap Notify</h4><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                  </div>
                 <bootstrapNotify/>
                </div>
              </div>
            </div>
      </div>
      
</template>
<script>
import bootstrapNotify from "@/components/advance/notify/bootstrapNotify.vue"
export default {
    components:{
        bootstrapNotify
    }
}
</script>