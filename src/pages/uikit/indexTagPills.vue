<template>
    <Breadcrumbs main="Ui Kits" title="Tag & Pills"/>
      <div class="container-fluid tagpills-badge">
            <div class="row">
                <contextualVariations/>
                <numberView/>
                <iconView/>
                <badgesExample/>
            </div>
      </div>
</template>
<script>
import contextualVariations from "@/components/uikit/Tag&Pills/contextualVariations.vue"
import numberView from "@/components/uikit/Tag&Pills/numberView.vue"
import iconView from "@/components/uikit/Tag&Pills/iconView.vue"
import badgesExample from "@/components/uikit/Tag&Pills/badgesExample.vue"
export default {
    components:{
        contextualVariations,
        numberView,
        iconView,
        badgesExample
    }
}
</script>