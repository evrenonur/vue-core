<template>
      <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                      <h4>Image Gallery With Description</h4>
                  </div>
                 <div class="my-gallery card-body row gallery-with-description" itemscope="">
    <figure 
      v-for="(src, index) in masonryItems"
      :key="index"
      class="col-xl-3 col-sm-6 xl-33 box-col-33 "
      @click="() => showImg(index)" >
      <a>
      <img  :src="getImgUrl(src.image)" alt="Image description"  class="img-fluid" />
      <div class="caption description">
        <h4>{{ src.title }}</h4>
        <p>{{ src.descr }}</p>
      </div>
      </a>
    </figure >
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
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from "vuex";
export default {
  mixins:[imageMixin],
  data() {
    return {
      lightBoxImages: [],
      visible: false,
      
    };
  },
  computed: {
    ...mapState({
      masonryItems:(state)=>state.masonry.imgs,
         
    }),
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  mounted() {
    this.masonryItems.forEach((item) => {
      this.lightBoxImages.push(
        require("@/assets/images/" + item.image)
      );
    });
   
  },
};
</script>>