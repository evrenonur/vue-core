<template>
    <div class="col-sm-12">
          <div class="card">
            <div class="card-header pb-0">
              <h4>MASONRY GALLERY WITH DESCRIPTION</h4>
            </div>
            <div class="card-body">
                <div v-masonry class="my-gallery row grid gallery-with-description" id="aniimated-thumbnials" itemscope="">
                  <figure 
                  v-masonry-tile 
                  class="grid-item col-xl-3 col-sm-6"  
                  :key="index"  
                  v-for="(item, index) in masonry" 
                   @click="() => showImg(index)"
                  >
                  <a>
                    <img  :src="getImgUrl(item.image)" class="img-fluid" />
                    <div class="caption description">
                     <h4>{{ item.title }}</h4>
                     <p>{{ item.descr }}</p>
                    </div>
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
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from "vuex";
export default {
  mixins:[imageMixin],
     data() {
      return {
        lightBoxImages:[],
            visible: false,
     
      };
    },
     computed: {
    ...mapState({
      masonry:(state)=>state.masonry.imagearray,
         
    }),
  },
    mounted() {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry();
      }
       this.masonry.forEach(item=>{
            this.lightBoxImages.push(require('@/assets/images/'+item.image))
        })
    },
    methods:{
 showImg (index) {
        this.index = index
        this.visible = true
      },
      handleHide () {
        this.visible = false
      },
    }
      
}
</script>