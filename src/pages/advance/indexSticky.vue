<template>
     <Breadcrumbs main="Bonus Ui" title="sticky"/>
     <div class="container-fluid">
            <div class="row sticky-header-main">
                <stickyNote/>
            </div>
     </div>
</template>
<script>
import stickyNote from "@/components/advance/sticky/stickyNote.vue"
export default {
    components:{
        stickyNote
    }
}
</script>