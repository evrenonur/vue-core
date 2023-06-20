<template>
    <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Hover Effect <span>12</span></h4>
                  </div>
                  <div class="card-body">
                    <div class="row gallery my-gallery" id="aniimated-thumbnials11" itemscope="">
                      <figure class="col-md-3 col-6 img-hover hover-12"  
                              v-for="(n,index) in masonryItems"  :key="index" 
                               @click="() => showImg(index)"
                              itemprop="associatedMedia" itemscope="">
                              <a>
                          <div >
                              <img  :src="getImgUrl(n.image)" itemprop="thumbnail" alt="Image description" class="img-fluid"></div>
                              </a>
                      </figure>
                    </div>
                      <vue-easy-lightbox
                      :index="index"
                  :visible="visible"
                  :imgs="lightBoxImages" 
                  @hide="handleHide"
                    >
                  </vue-easy-lightbox>
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from "vuex";
export default {
  mixins:[imageMixin],
     data(){
        return{
             lightBoxImages:[],
            visible: false,
        }
    },
      computed: {
    ...mapState({
      masonryItems:(state)=>state.masonry.hover,
         
    }),
  },
      methods: {
      showImg (index) {
        this.index = index
        this.visible = true
      },
      handleHide () {
        this.visible = false
      },
    },
    mounted(){
        this.masonryItems.forEach(item=>{
            this.lightBoxImages.push(require('@/assets/images/'+item.image))
        })
    }
}
</script>