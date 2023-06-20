<template>
  <nav>
    
  </nav>
  <router-view/>
   <div class="loader-wrapper" v-if='showLoader'>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"> </div>
      <div class="dot"></div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      showLoader:false
    }
  },
  watch:{
    $route(){
      this.showLoader = true;
      setTimeout(() => {
        this.showLoader = false
      }, 2000);
    }
  }
}
</script>

<style lang="scss">

</style>
