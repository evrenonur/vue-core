<template>
     <div class="container-fluid p-0">
        <div class="comingsoon auth-bg-video">
          <video class="bgvideo-comingsoon" id="bgvid" poster="@/assets/images/other-images/coming-soon-bg.jpg" playsinline="" autoplay="" muted="" loop="">
            <source src="@/assets/video/auth-bg.mp4" type="video/mp4">
          </video>
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