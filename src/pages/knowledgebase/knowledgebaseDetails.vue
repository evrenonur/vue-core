<template>
    <Breadcrumbs main="Knowledgebase" title="Knowledgebase Details" />
     <div class="container-fluid knowledge-details">
            <div class="row">
                <knowledgeFilter/>
                <blogSingle/>
            </div>
     </div>
</template>
<script>
import knowledgeFilter from "@/components/knowledgebase/detalis/knowledgeFilter.vue"
import blogSingle from "@/components/knowledgebase/detalis/blogSingle.vue"
export default {
    components:{
        knowledgeFilter,
        blogSingle
    }
}
</script>