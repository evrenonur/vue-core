<template>
     <Breadcrumbs main="Tabs" title="Line Tabs"/>
      <div class="container-fluid">
            <div class="row">
              <materialStyle/>
              <rightTab/>  
              <materialColor/>
              <navInfo/>
            </div>
      </div>
</template>
<script>
import materialStyle from "@/components/uikit/tabs/line/materialStyle.vue"
import rightTab from "@/components/uikit/tabs/line/rightTab.vue"
import materialColor from "@/components/uikit/tabs/line/materialColor.vue"
import navInfo from "@/components/uikit/tabs/line/navInfo.vue"
export default {
    components:{
        materialStyle,
        rightTab,
        materialColor,
        navInfo
    }
}
</script>