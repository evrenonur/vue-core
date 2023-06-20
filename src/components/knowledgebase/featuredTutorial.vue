<template>
     <div class="col-lg-12 featured-tutorial">
                  <div class="header-faq">
                    <h4 class="mb-0">Featured Tutorials</h4>
                  </div>
                  <div class="row">
                    <div class="col-xxl-3 col-xl-4 col-sm-6 box-col-3" v-for="item in knowledgebase" :key="item">
                      <div class="card features-faq product-box">
                        <div class="faq-image product-img"><img class="img-fluid"  :src="getImgUrl(item.imge)" alt="">
                          <div class="product-hover">
                            <ul>
                              <li><router-link to="/knowledgebase/knowledge-detail"><i class="icon-link"></i></router-link></li>
                              <li><router-link to="/knowledgebase/knowledge-detail"><i class="icon-import"></i></router-link></li>
                            </ul>
                          </div>
                        </div>
                        <div class="card-body"><router-link to="/learning/details/1">
                            <h6>{{item.title}}</h6></router-link>
                          <p class="mb-0">{{item.desc}}</p>
                        </div>
                        <div class="card-footer"><span>{{item.date}}</span>
                          <ul class="rating pull-right">
                            <li><i class="fa fa-star font-primary"></i></li>
                            <li><i class="fa fa-star font-primary"></i></li>
                            <li><i class="fa fa-star font-primary"></i></li>
                            <li><i class="fa  font-primary" :class="item.star"></i></li>
                            <li><i class="fa  font-primary" :class="item.star1"></i></li>
                          </ul>
                        </div>
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
      computed: {
    ...mapState({
      knowledgebase:(state)=>state.knowledgebase.featured,   
    }),
  },
 
}
</script>