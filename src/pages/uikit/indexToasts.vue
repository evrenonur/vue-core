<template>
       <Breadcrumbs main="Ui Kits" title="Toasts"/>
        <div class="container-fluid">
            <div class="row">
                <basicToasts/>
                <iconToasts/>
                <positionToasts/>
            </div>
        </div>
</template>
<script>
import basicToasts from "@/components/uikit/toasts/basicToasts.vue"
import iconToasts from "@/components/uikit/toasts/iconToasts.vue"
import positionToasts from "@/components/uikit/toasts/positionToasts.vue"
export default {
    components:{
        basicToasts,
        iconToasts,
        positionToasts
    }
}
</script>