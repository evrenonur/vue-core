<template>
     <Breadcrumbs main="Bonus Ui" title="Scrollable"/>
      <div class="container-fluid">
            <div class="row">
                <clickDrag/>
                <smallScroll/>
                <bothSide/>
                <horizontalScroll/>
                <alwaysVisible/>
                <verticalScroll/>
            </div>
      </div>
</template>
<script>
import clickDrag from "@/components/advance/scrollable/clickDrag.vue"
import smallScroll from "@/components/advance/scrollable/smallScroll.vue"
import bothSide from "@/components/advance/scrollable/bothSide.vue"
import horizontalScroll from "@/components/advance/scrollable/horizontalScroll.vue"
import alwaysVisible from "@/components/advance/scrollable/alwaysVisible.vue"
import verticalScroll from "@/components/advance/scrollable/verticalScroll.vue"
export default {
    components:{
        clickDrag,
        smallScroll,
        bothSide,
        horizontalScroll,
        alwaysVisible,
        verticalScroll
    }
}
</script>