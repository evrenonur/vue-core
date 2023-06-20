<template>
    <Breadcrumbs main="Bonus Ui" title="Timeline 1"/>
       <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Example</h4>
                  </div>
                  <timeLine/>
                </div>
              </div>
            </div>
       </div>
       
</template>
<script>
import timeLine from "@/components/advance/timeline/timeLine.vue"
export default {
    components:{
        timeLine
    }
}
</script>