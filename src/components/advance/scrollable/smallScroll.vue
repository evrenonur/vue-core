<template>
     <div class="col-sm-12 col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Small Size Scroll</h4>
                  </div>
                  <div class="card-body">
                    <div class="scroll-bar-wrap">
                      <perfect-scrollbar  class="scrollbar-margins large-margin scroll-demo p-0"  v-once :settings="settings">
                          <img src="@/assets/images/banner/3.jpg" alt="girl" width="800" height="600">
                      </perfect-scrollbar>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
    data(){
        return{
         settings: {
          maxScrollbarLength: 60
        },
        }
    }
}
</script>