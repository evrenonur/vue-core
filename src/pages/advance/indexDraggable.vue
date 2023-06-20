<template>
    <Breadcrumbs main="Bonus Ui" title="Draggable Card"/>
    <div class="container-fluid">
            <div class="row ui-sortable" id="draggableMultiple">
                <draggableCard/>
            </div>
    </div>
</template>
<script>
import draggableCard from "@/components/advance/draggable/draggableCard.vue"
export default {
    components:{
        draggableCard
    }
}
</script>