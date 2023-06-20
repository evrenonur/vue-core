<template>
      <div class="col-sm-12 col-md-6 col-xl-6" v-for="card in creativelist" :key="card">
                <div class="card" :class="card.card" >
                  <div class="card-header " :class="card.header">
                    <h4 :class="card.class">{{card.title}}</h4>
                  </div>
                  <div class="card-body">
                    <p>{{card.desc}}</p>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from "vuex";
export default {
   computed: {
    ...mapState({
      creativelist:(state)=>state.card.creative    
    }),
   },
}
</script>