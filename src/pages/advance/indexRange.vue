<template>
    <Breadcrumbs main="Bonus Ui" title="Range Slider"/>
    <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Ion Range Slider</h4>
                  </div>
                  <rangeSlider/>
                </div>
              </div>
            </div>
    </div>
</template>
<script>
import rangeSlider from "@/components/advance/range/rangeSlider.vue"
export default {
    components:{
        rangeSlider
    }
}
</script>