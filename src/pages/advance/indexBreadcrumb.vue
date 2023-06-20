<template>
    <Breadcrumbs main="Bonus Ui" title="Breadcrumb" />
    <div class="container-fluid">
        <div class="row">
            <defaultBreadcrumb />
            <navBreadcrumb />
            <coloredNavigation />
            <outlineColored />
        </div>
    </div>
</template>
<script>
import defaultBreadcrumb from "@/components/advance/breadcrumb/defaultBreadcrumb.vue"
import navBreadcrumb from "@/components/advance/breadcrumb/navBreadcrumb.vue"
import coloredNavigation from "@/components/advance/breadcrumb/coloredNavigation.vue"
import outlineColored from "@/components/advance/breadcrumb/outlineColored.vue"
export default {
    components: {
        defaultBreadcrumb,
        navBreadcrumb,
        coloredNavigation,
        outlineColored
    }
}
</script>