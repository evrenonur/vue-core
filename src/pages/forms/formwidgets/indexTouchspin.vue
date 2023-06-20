<template>
     <Breadcrumbs main="Form Widgets" title="Touchspin"/>
      <div class="container-fluid state-color touchspin-se">
            <div class="bootstrap-touchspin">
              <div class="row">
                  <defaultTouchspin/>
                  <verticalTouchspin/>
                  <postfixTouchspin/>
                  <prefixTouchspin/>
                  <minMax/>
                  <initalValue/>
                  <stepsValue/>
                  <decimalValue/>
                  <changeValue/>
                  <iconValue/>
                  <iconButton/>
                  <dropdownValue/>
                  <mousewheelValue/>
                  <smallHorizontal/>
              </div>
            </div>
      </div>
</template>
<script>
import defaultTouchspin from "@/components/forms/formwidgets/touchspin/defaultTouchspin.vue"
import verticalTouchspin from "@/components/forms/formwidgets/touchspin/verticalTouchspin.vue"
import postfixTouchspin from "@/components/forms/formwidgets/touchspin/postfixTouchspin.vue"
import prefixTouchspin from "@/components/forms/formwidgets/touchspin/prefixTouchspin.vue"
import minMax from "@/components/forms/formwidgets/touchspin/minMax.vue"
import initalValue from "@/components/forms/formwidgets/touchspin/initalValue.vue"
import stepsValue from "@/components/forms/formwidgets/touchspin/stepsValue.vue"
import decimalValue from "@/components/forms/formwidgets/touchspin/decimalValue.vue"
import changeValue from "@/components/forms/formwidgets/touchspin/changeValue.vue"
import iconValue from "@/components/forms/formwidgets/touchspin/iconValue.vue"
import iconButton from "@/components/forms/formwidgets/touchspin/iconButton.vue"
import dropdownValue from "@/components/forms/formwidgets/touchspin/dropdownValue.vue"
import mousewheelValue from "@/components/forms/formwidgets/touchspin/mousewheelValue.vue"
import smallHorizontal from "@/components/forms/formwidgets/touchspin/horizontalValue.vue"
export default {
    components:{
        defaultTouchspin,
        verticalTouchspin,
        postfixTouchspin,
        prefixTouchspin,
        minMax,
        initalValue,
        stepsValue,
        decimalValue,
        changeValue,
        iconValue,
        iconButton,
        dropdownValue,
        mousewheelValue,
        smallHorizontal,
    }
}
</script>