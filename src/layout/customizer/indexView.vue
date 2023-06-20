<template>
    <div class="customizer-links" :class="{ open: customizer }">
        <div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical">
            <customizerColor/>
            <customizerSetting/>
        </div>
        </div> 
          <div class="customizer-contain" :class="{ open: customizer }">
               <div class="tab-content" id="c-pills-tabContent">
                   <customizerconfiguration/>
               <div class="customizer-body custom-scrollbar">
                    <customColor/>
                    <customSetting/>
                </div>
               </div>
          </div>
</template>
<script>
 import { mapState } from 'vuex';
 import customizerColor from "./customizerColor.vue"
 import customizerconfiguration from "./configurationView.vue"
 import customColor from "./customColor.vue"
 import customizerSetting from "./customizerSetting.vue"
 import customSetting from "./customSetting.vue"
export default {
    components:{
      customizerColor,
      customizerconfiguration,
      customColor,
      customizerSetting,
      customSetting
    },
     computed: {
      ...mapState({
        customizer: (state) => state.menu.customizer,
      }),
    },
}
</script>