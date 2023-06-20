<template>
     <Breadcrumbs main="Learning" title="Detailed Course" />
      <div class="container-fluid">
            <div class="row learning-block">
                <courseDetail/>
                <learningFilter/>
            </div>
      </div>
</template>
<script>
import courseDetail from "@/components/learning/Course/courseDetail.vue"
import learningFilter from "@/components/common/learningFilter.vue"
export default {
    components:{
        courseDetail,
         learningFilter
    }
}
</script>