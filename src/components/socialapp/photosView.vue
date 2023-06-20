<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="my-gallery card-body  gallery-with-description" itemscope="">
           <div class="row">
          <figure v-for="(src, index) in photo" :key="index" class="col-xl-3 col-sm-6 box-col-33" @click="() => showImg(index)" >
          <a>
            <img  :src="getImgUrl(src.image)" alt="Image description" class="img-fluid" />
            <div class="caption description">
           <h4> {{src.title}}</h4>
            <p>{{src.descr}}</p>
            </div>
          </a>
          </figure>
           </div>
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
    data(){
        return{
            lightBoxImages:[],
            lightBoxTitle:[],
            visible: false,
        
        }
    },
     computed: {
    ...mapState({
      photo:(state)=>state.masonry.photo,
         
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
        this.photo.forEach(item=>{
            this.lightBoxImages.push(require('@/assets/images/'+item.image))
            this.lightBoxTitle.push(item.title)
        })
    }
};
</script>
