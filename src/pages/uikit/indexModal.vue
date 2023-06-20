<template>
     <Breadcrumbs main="Ui Kits" title="Modal"/>
       <div class="container-fluid ui-modal">
            <div class="row">
                <staticModal/>
                <basicModal/>
                <varyingModal/>
                <sizesModel/>
            </div>
       </div>
</template>
<script>
import staticModal from "@/components/uikit/modal/staticModal.vue"
import basicModal from "@/components/uikit/modal/basicModal.vue"
import varyingModal from "@/components/uikit/modal/varyingModal.vue"
import sizesModel from "@/components/uikit/modal/sizesModel.vue"
export default {
    components:{
        staticModal,
        basicModal,
        varyingModal,
        sizesModel
    }
}
</script>