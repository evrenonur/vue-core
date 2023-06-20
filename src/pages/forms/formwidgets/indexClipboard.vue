<template>
      <Breadcrumbs main="Form Widgets" title="clipboard"/>
       <div class="container-fluid">
            <div class="row">
                <textInput/>
                <textArea/>
                <paragraphCopy/>
                <portionCopy/>
            </div>
       </div>
</template>
<script>
import textInput from "@/components/forms/formwidgets/clipboard/textInput.vue"
import textArea from "@/components/forms/formwidgets/clipboard/textArea.vue"
import paragraphCopy from "@/components/forms/formwidgets/clipboard/paraGraph.vue"
import portionCopy from "@/components/forms/formwidgets/clipboard/portionCopy.vue"
export default {
    components:{
        textInput,
        textArea,
        paragraphCopy,
        portionCopy
    }
}
</script>