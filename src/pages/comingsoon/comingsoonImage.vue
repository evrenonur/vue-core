<template>
     <div class="container-fluid p-0 m-0">
        <div class="comingsoon comingsoon-bgimg">
          <div class="comingsoon-inner text-center"><img src="@/assets/images/logo/logo2.png" alt="">
            <h5>WE ARE COMING SOON</h5>
            <div class="countdown" id="clockdiv">
              <comingsoonTimer/>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import comingsoonTimer from "@/components/common/comingsoonTimer.vue"
export default {
    components:{
        comingsoonTimer
    }
}
</script>