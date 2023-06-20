<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>IMAGE GALLERY</h4>
                  </div>
                  <div class="card-body">
                  <div class="my-gallery gallery  row" itemscope=" ">
                       <figure
                         v-for="(src, index) in masonryItems"
                        :key="index"
                         class="col-xl-3 col-md-4 col-sm-6 xl-33 box-col-33 "
                         @click="() => showImg(index)"
                         >
                         <a  itemprop="contentUrl" data-size="1600x950">
                        <img :src="getImgUrl(src.image)" alt="Image description" class="img-thumbnail" />
                         </a>
                        <div class="caption">
                        <h4> {{src.title}}</h4>
                        <p>{{src.descr}}</p>
                        </div>
                       </figure>
                 </div></div>
                  <vue-easy-lightbox
                  :index="index"
                  :visible="visible"
                  :imgs="lightBoxImages" 
                  @hide="handleHide"
                    >
                  </vue-easy-lightbox>
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
      masonryItems:(state)=>state.masonry.imags,
         
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