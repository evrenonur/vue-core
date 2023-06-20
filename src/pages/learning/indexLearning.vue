<template>
     <Breadcrumbs main="Learning" title="Learning List" />
     <div class="container-fluid">
            <div class="row learning-block">
                <learningList/>
                <learningFilter/>
            </div>
     </div>
</template>
<script>
import learningList from "@/components/learning/list/learningList.vue"
import learningFilter from "@/components/common/learningFilter.vue"
export default {
    components:{
        learningList,
        learningFilter
    }
}
</script>