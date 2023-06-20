<template>
     <Breadcrumbs main="Animation" title="Animate"/>
      <div class="container-fluid animation-modal">
            <div class="row">
                <animateBox/>
                <animateOption/>
            </div>
      </div>
</template>
<script>
import animateBox from "@/components/animation/animate/animateBox.vue"
import animateOption from "@/components/animation/animate/animateOption.vue"
export default {
    components:{
        animateBox,
        animateOption
    }
}
</script>