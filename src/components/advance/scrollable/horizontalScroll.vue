<template>
  <div class="col-sm-12 col-md-6">
    <div class="card">
      <div class="card-header pb-0">
        <h4>Horizontal Scroll</h4>
      </div>
      <div class="card-body">
        <div class="scroll-bar-wrap">
          <perfect-scrollbar class="horizontal-scroll scroll-demo" v-once :settings="settings4">
            <div class="horz-scroll-content">
              <div class="row">
                <div class="col-sm-3" v-for="item in scrollable" :key="item">
                  <p>{{item.desc}}</p>
                </div>
              </div>
            </div>
          </perfect-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      settings4: {
        maxScrollbarLength: 60,
        suppressScrollY: true,
      },
    }
  },
  computed: {
    ...mapState({
      scrollable:(state)=>state.scrollable.horizontalscroll,    
    }),
   },
}
</script>