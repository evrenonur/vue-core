<template>
     <div class="container-fluid p-0">
        <div class="comingsoon bg-commingsoon">
          <div class="comingsoon-inner text-center">
            <div class="logo-wrraper"><img class="img-fluid" src="@/assets/images/logo/logo2.png" alt=""></div>
            <h5>WE ARE COMING <br>SOON</h5>
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