<template>
       <Breadcrumbs main="Ui Kits" title="Dropdown"/>
        <div class="container-fluid dropdown-page">
            <div class="row">
                <basicDropdown/>
                <colorDropdown/>
                <splitDropdown/>
                <roundedDropdown/>
                <dropdownView/>
            </div>
        </div>
</template>
<script>
import basicDropdown from "@/components/uikit/dropdown/basicDropdown.vue"
import colorDropdown from "@/components/uikit/dropdown/colorDropdown.vue"
import splitDropdown from "@/components/uikit/dropdown/splitDropdown.vue"
import roundedDropdown from "@/components/uikit/dropdown/roundedDropdown.vue"
import dropdownView from "@/components/uikit/dropdown/dropdownView.vue"
export default {
    components:{
        basicDropdown,
        colorDropdown,
        splitDropdown,
        roundedDropdown,
        dropdownView
    }
}
</script>