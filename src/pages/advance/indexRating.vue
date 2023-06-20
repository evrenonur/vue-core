<template>
     <Breadcrumbs main="Bonus Ui" title="Rating"/>
       <div class="container-fluid">
            <div class="row">
                <ratingView/>
            </div>
       </div>
</template>
<script>
import ratingView from "@/components/advance/rating/ratingView.vue"
export default {
    components:{
        ratingView
    }
}
</script>