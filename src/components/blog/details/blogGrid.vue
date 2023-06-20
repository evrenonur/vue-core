<template>
     <div class="col-sm-6 col-xl-3 box-col-3" v-for="item in blog" :key="item">
                <div class="card">
                  <div class="blog-box blog-grid">
                    <div class="blog-wrraper"><router-link to="/blog/single"> <img class="img-fluid top-radius-blog"  :src="getImgUrl(item.imge)" alt=""></router-link></div>
                    <div class="blog-details-second">
                      <div class="blog-post-date"><span class="blg-month">apr</span><span class="blg-date">10</span></div><router-link to="/blog/single">
                        <h6 class="blog-bottom-details">{{item.title}}</h6></router-link>
                      <p>{{item.desc}}</p>
                      <div class="detail-footer"> 
                        <ul class="sociyal-list">
                          <li><i class="fa fa-user-o"></i>admin</li>
                          <li><i class="fa fa-comments-o"></i>5</li>
                          <li><i class="fa fa-thumbs-o-up"></i>2 like</li>
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
     data(){
        return{
           
        }
    },
      computed: {
    ...mapState({
      blog:(state)=>state.blog.details,
         
    }),
  },
 
}
</script>