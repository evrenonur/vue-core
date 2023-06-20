<template>
     <Breadcrumbs main="Animation" title="AOS Animation"/>
      <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                  <aosExample/>
                  <initAOS/>
                  <animationView/>
              </div>
            </div>
      </div>
</template>
<script>
import aosExample from "@/components/animation/aos/aosExample.vue"
import initAOS from "@/components/animation/aos/initAOS.vue"
import animationView from "@/components/animation/aos/animationView.vue"
export default {
    components:{
        aosExample,
        initAOS,
        animationView
    }
}
</script>