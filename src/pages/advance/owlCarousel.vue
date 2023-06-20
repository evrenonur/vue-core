<template>
     <Breadcrumbs main="Bonus Ui" title="Owl Carousel"/>
       <div class="container-fluid owl-carouselpage">
            <div class="row">
              <div class="col-sm-12">
                  <basicExample/>
                  <responsiveExample/>
                  <centerExample/>
                  <mergeExample/>
                  <autoWidth/>
                  <urlNavigations/>
                  <eventsExample/>
                  <stageExample/>
                  <rightLeft/>
                  <lazyExample/>
                  <animationExample/>
                  <autoPlay/>
                  <autoHeight/>
                  <mouseWheel/>
              </div>
            </div>
       </div>
</template>
<script>
import basicExample from "@/components/advance/owlcarousel/basicExample.vue"
import responsiveExample from "@/components/advance/owlcarousel/responsiveExample.vue"
import centerExample from "@/components/advance/owlcarousel/centerExample.vue"
import mergeExample from "@/components/advance/owlcarousel/mergeExample.vue"
import autoWidth from "@/components/advance/owlcarousel/autoWidth.vue"
import urlNavigations from "@/components/advance/owlcarousel/urlNavigations.vue"
import eventsExample from "@/components/advance/owlcarousel/eventsExample.vue"
import stageExample from "@/components/advance/owlcarousel/stageExample.vue"
import rightLeft from "@/components/advance/owlcarousel/rightLeft.vue"
import lazyExample from "@/components/advance/owlcarousel/lazyExample.vue"
import animationExample from "@/components/advance/owlcarousel/animationExample.vue"
import autoPlay from "@/components/advance/owlcarousel/autoPlay.vue"
import autoHeight from "@/components/advance/owlcarousel/autoHeight.vue"
import mouseWheel from "@/components/advance/owlcarousel/mouseWheel.vue"
export default {
    components:{
        basicExample,
        responsiveExample,
        centerExample,
        mergeExample,
        autoWidth,
        urlNavigations,
        eventsExample,
        stageExample,
        rightLeft,
        lazyExample,
        animationExample,
        autoPlay,
        autoHeight,
        mouseWheel
    }
}
</script>