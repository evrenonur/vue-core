<template>
    <Breadcrumbs main="Bonus Ui" title="Steps"/>
     <div class="container-fluid">
            <div class="row">
                <defaultStep/>
                <stepIcon/>
            </div>
     </div>
</template>
<script>
import defaultStep from "@/components/advance/step/defaultStep.vue"
import stepIcon from "@/components/advance/step/stepIcon.vue"
export default {
    components:{
        defaultStep,
        stepIcon
    }
}
</script>