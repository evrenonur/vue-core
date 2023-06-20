<template>
    <Breadcrumbs main="Ui Kits" title="Typography"/>
    <div class="container-fluid typo-graphy">
            <div class="row">
                <headingsHTML/>
                <thinHeading/>
                <boldHeading/>
                <secondaryHeading/>
                <displayHeadings/>
                <textElements/>
                <listingTypography/>
                <blockquotesFooter/>
            </div>
    </div>
</template>
<script>
import headingsHTML from "@/components/uikit/typography/headingsHTML.vue"
import thinHeading from "@/components/uikit/typography/thinHeading.vue"
import boldHeading from "@/components/uikit/typography/boldHeading.vue"
import secondaryHeading from "@/components/uikit/typography/secondaryHeading.vue"
import displayHeadings from "@/components/uikit/typography/displayHeadings.vue"
import textElements from "@/components/uikit/typography/textElements.vue"
import listingTypography from "@/components/uikit/typography/listingTypography.vue"
import blockquotesFooter from "@/components/uikit/typography/blockquotesFooter.vue"
export default {
    components:{
        headingsHTML,
        thinHeading,
        boldHeading,
        secondaryHeading,
        displayHeadings,
        textElements,
        listingTypography,
        blockquotesFooter
    }
}
</script>