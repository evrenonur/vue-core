<template>
       <div class="card">
                 <div class="card-header pb-0">
                    <h4>AOS Example animation</h4>
                  </div>
                   <div class="card-body">
                      <div class="row gallery grid my-gallery" id="aniimated-thumbnials" v-masonry>
                        <figure class="grid-item col-sm-4 col-md-3" data-aos="fade-down" v-masonry-tile v-for="(src, index) in masonryItems" :key="index" @click="() => showImg(index)">
                           <aos-vue :animation="src.animation">
                          <a>
                          <img :src="getImgUrl(src.image)" alt="Image description" class="img-thumbnail" />
                          </a>
                        </aos-vue>
                        </figure>
                      </div>
                       <vue-easy-lightbox
                       :index="index"
                    :visible="visible"
                    :imgs="lightBoxImages" 
                    @hide="handleHide">
                   </vue-easy-lightbox>
                  
                   </div>
       </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from "vuex";
export default {
     mixins: [imageMixin],
            data(){
              return{
            lightBoxImages:[],
            lightBoxTitle:[],
            visible: false,
              }
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
    computed: {
    ...mapState({
      masonryItems:(state)=>state.masonry.aos,
    }),
  },
    mounted(){
        this.masonryItems.forEach(item=>{
            this.lightBoxImages.push(require('@/assets/images/'+item.image))
            this.lightBoxTitle.push(item.title)
        })
    }
};
</script>