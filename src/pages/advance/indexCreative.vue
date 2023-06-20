<template>
    <Breadcrumbs main="Bonus Ui" title="Creative Card"/>
     <div class="container-fluid basic-card">
            <div class="row">
                <creativeCard/>
            </div>
     </div>
</template>
<script>
import creativeCard from "@/components/advance/creative/creativeCard.vue"
export default {
    components:{
        creativeCard
    }
}
</script>