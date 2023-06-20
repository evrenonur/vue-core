<template>
     <Breadcrumbs main="Bonus Ui" title="Animated Modal"/>
        <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card animation-modal">
                  <div class="card-header pb-0">
                    <h4>Modal with animate.js</h4>
                  </div>
                  <animationBox/>
                </div>
              </div>
            </div>
        </div>
</template>
<script>
import animationBox from "@/components/advance/animation/animationBox.vue"
export default {
    components:{
        animationBox
    }
}
</script>