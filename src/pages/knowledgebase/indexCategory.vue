<template>
     <Breadcrumbs main="Knowledgebase" title="Knowledgebase" />
      <div class="container-fluid faq-section">
            <div class="row">
                 <knowledgebaseSearch/>
                <faqWidgets/>
                <browseArticles/>
            </div>
      </div>
</template>
<script>
import knowledgebaseSearch from "@/components/common/knowledgebaseSearch.vue"
import faqWidgets from "@/components/common/faqWidgets.vue"
import browseArticles from "@/components/knowledgebase/category/browseArticles.vue"
export default {
    components:{
        knowledgebaseSearch,
        faqWidgets,
        browseArticles
    }
}
</script>