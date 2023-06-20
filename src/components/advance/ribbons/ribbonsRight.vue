<template>
  <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in ribbon" :key="item">
                <div class="ribbon-wrapper card">
                  <div class="card-body">
                    <div class="ribbon " :class="item.class">Ribbon</div>
                    <p>{{item.lorn}}</p>
                  </div>
                </div>
              </div>
            </div>
             <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in vertical" :key="item">
                <div class=" card" :class="item.card">
                  <div class="card-body">
                    <div class="ribbon " :class="item.class"><i :class="item.icon"></i></div>
                    <p>{{item.lorn}}</p>
                  </div>
                </div>
              </div>
             
            </div>
             <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in bookmark" :key="item">
                <div class="ribbon-wrapper card">
                  <div class="card-body">
                    <div class="ribbon " :class="item.class">Ribbon</div>
                   <p>{{item.lorn}}</p>
                  </div>
                </div>
              </div>
            </div>
              <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in verticalright" :key="item">
                <div class=" card" :class="item.card">
                  <div class="card-body">
                    <div class="ribbon " :class="item.class"><i :class="item.icon"></i></div>
                     <p>{{item.lorn}}</p>
                  </div>
                </div>
              </div>
            </div>
             <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in  clip" :key="item">
                <div class=" card" :class="item.card">
                  <div class="card-body">
                    <div class="ribbon " :class="item.class">Ribbon</div>
                   <p>{{item.lorn}}</p>
                  </div>
                </div>
              </div>
             
            </div>
             <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in ribbonItem" :key="item">
                <div class=" card" :class="item.card">
                  <div class="card-body">
                    <div class="ribbon " :class="item.class">Ribbon</div>
                     <p>{{item.lorn}}</p>
                  </div>
                </div>
              </div>
             
            </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      ribbon:(state)=>state.ribbon.right, 
      vertical:(state)=>state.ribbon.verticalleft,
      bookmark:(state)=>state.ribbon.bookmark,
      verticalright:(state)=>state.ribbon.verticalright,
       clip:(state)=>state.ribbon.clip,
        ribbonItem:(state)=>state.ribbon.ribbon,
    }),
   },
}
</script>