<template>
    <Breadcrumbs main="FAQ" title="FAQ" />
     <div class="container-fluid">
            <div class="faq-wrap">
              <div class="row">
                  <faqWidgets/>
                  <quickQuestions/>
                  <featuredTutorial/>
                  <latestArticles/>
              </div>
            </div>
     </div>
</template>
<script>
import faqWidgets from "@/components/faq/faqWidgets.vue"
import quickQuestions from "@/components/faq/quickQuestions.vue"
import featuredTutorial from "@/components/faq/featuredTutorial.vue"
import latestArticles from "@/components/faq/latestArticles.vue"
export default {
    components:{
        faqWidgets,
        quickQuestions,
        featuredTutorial,
        latestArticles
    }
}
</script>