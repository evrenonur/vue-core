<template>
        <Breadcrumbs main="Tabs" title="Lists"/>
        <div class="container-fluid">
            <div class="row">
                <defultList/>
                <linkButton/>
                <flushList/>
                <contextualClasses/>
                <badgesList/>
                <customContent/>
                <javaScriptList/>
                <iconList/>
                <imageList/>
            </div>
        </div>
</template>
<script>
import defultList from "@/components/uikit/lists/defultList.vue"
import linkButton from "@/components/uikit/lists/linkButton.vue"
import flushList from "@/components/uikit/lists/flushList.vue"
import contextualClasses from "@/components/uikit/lists/contextualClasses.vue"
import badgesList from "@/components/uikit/lists/badgesList.vue"
import customContent from "@/components/uikit/lists/customContent.vue"
import javaScriptList from "@/components/uikit/lists/javaScriptList.vue"
import iconList from "@/components/uikit/lists/iconList.vue"
import imageList from "@/components/uikit/lists/imageList.vue"
export default {
    components:{
        defultList,
        linkButton,
        flushList,
        contextualClasses,
        badgesList,
        customContent,
        javaScriptList,
        iconList,
        imageList
    }
}
</script>