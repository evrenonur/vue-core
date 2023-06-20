<template>
     <div class="col-sm-12 col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Both Side Scroll</h4>
                  </div>
                  <div class="card-body">
                    <div class="scroll-bar-wrap">
                      <perfect-scrollbar class="both-side-scroll scroll-demo p-0" v-once :settings="settings3">
                          <img src="@/assets/images/banner/1.jpg" alt="girl" width="800" height="600">
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
             settings3: {
          maxScrollbarLength: 60
        },
        }
    }
}
</script>