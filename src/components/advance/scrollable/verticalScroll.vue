<template>
    <div class="col-sm-12 col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Vertical Scroll</h4>
                  </div>
                  <div class="card-body">
                     <perfect-scrollbar class="vertical-scroll scroll-demo" v-once :settings="settings6">
                      <p v-for="item in scrollable" :key="item">{{item.desc}}</p>
                      
                  </perfect-scrollbar>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data(){
        return{
            settings6: {
          maxScrollbarLength: 60,
        }
        }
    },
    computed: {
    ...mapState({
      scrollable:(state)=>state.scrollable.verticalscroll,    
    }),
   },
}
</script>