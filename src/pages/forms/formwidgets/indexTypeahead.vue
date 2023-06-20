<template>
    <Breadcrumbs main="Form Widgets" title="Typeahead" />
     <div class="container-fluid">
            <div class="typeahead">
              <div class="row">
                  <basicTypeahead/>
                  <prefetchTypeahead/>
                  <bloodhoundTyeahead/>
                  <remoteTypeahead/>
                  <customTemplates/>
                  <multipleSections/>
                  <defaultView/>
                  <scrollableMenu/>
                  <rtlSupport/>
              </div>
            </div>
     </div>
</template>
<script>
import basicTypeahead from "@/components/forms/formwidgets/typeahead/basicTypeahead.vue"
import prefetchTypeahead from "@/components/forms/formwidgets/typeahead/prefetchTypeahead.vue"
import bloodhoundTyeahead from "@/components/forms/formwidgets/typeahead/bloodhoundTyeahead.vue"
import remoteTypeahead from "@/components/forms/formwidgets/typeahead/remoteTypeahead.vue"
import customTemplates from "@/components/forms/formwidgets/typeahead/customTemplates.vue"
import multipleSections from "@/components/forms/formwidgets/typeahead/multipleSections.vue"
import defaultView from "@/components/forms/formwidgets/typeahead/defaultView.vue"
import scrollableMenu from "@/components/forms/formwidgets/typeahead/scrollableMenu.vue"
import rtlSupport from "@/components/forms/formwidgets/typeahead/rtlSupport.vue"
export default {
    components:{
        basicTypeahead,
        prefetchTypeahead,
        bloodhoundTyeahead,
        remoteTypeahead,
        customTemplates,
        multipleSections,
        defaultView,
        scrollableMenu,
        rtlSupport
    }
}
</script>