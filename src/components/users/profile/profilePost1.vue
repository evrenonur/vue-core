<template>
     <div class="col-sm-12">
                      <div class="card">
                        <div class="profile-post">
                          <div class="post-header">
                            <div class="d-flex"><img class="img-thumbnail rounded-circle me-3" src="@/assets/images/user/7.jpg" alt="Generic placeholder image">
                              <div class="flex-grow-1 align-self-center" id="last-post-tour"><router-link to="/pages/social-app">
                                  <h5 class="user-name">Emay Walter</h5></router-link>
                                <h6 class="f-w-500">5 Hours ago</h6>
                              </div>
                            </div>
                            <div class="post-setting"><i class="fa fa-ellipsis-h"></i></div>
                          </div>
                          <div class="post-body">
                            <div class="img-container">
                              <div class="row mt-4 pictures my-gallery" itemscope="">
                                 <figure class="col-sm-6" itemprop="associatedMedia" itemscope=""  v-for="(src, index) in imgs"
                             :key="index" @click="() => showImg(index)"><img class="img-fluid rounded"  :src="getImgUrl(src.image)"  itemprop="thumbnail" alt="Image description">  
                              </figure>
                                 
                              </div>
                               <vue-easy-lightbox :index="index" :visible="visible" :imgs="lightBoxImages" @hide="handleHide"></vue-easy-lightbox>
                            </div>
                            <div class="post-react">
                              <ul>
                                <li><img class="rounded-circle" src="@/assets/images/user/3.jpg" alt=""></li>
                                <li><img class="rounded-circle" src="@/assets/images/user/5.jpg" alt=""></li>
                                <li><img class="rounded-circle" src="@/assets/images/user/1.jpg" alt=""></li>
                              </ul>
                              <h6 class="f-w-500">+25 people react this post</h6>
                            </div>
                            <p>Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.</p>
                            <ul class="post-comment">
                              <li>
                                <label><a href="#"><i data-feather="heart"><vue-feather type="heart"></vue-feather></i>&nbsp;&nbsp;Like<number
                               class="bold counter"
                               ref="number1"
                               :from="0"
                               :to="520"
                               :duration="5"
                               :delay="0"
                               easing="Power1.easeOut" /></a></label>
                              </li>
                              <li> 
                                <label><a href="#"><i data-feather="message-square"><vue-feather type="message-square"></vue-feather></i>&nbsp;&nbsp;Comment<number
                               class="bold counter"
                               ref="number1"
                               :from="0"
                               :to="85"
                               :duration="5"
                               :delay="0"
                               easing="Power1.easeOut" /></a></label>
                              </li>
                              <li>
                                <label><a href="#"><i data-feather="share"><vue-feather type="share"></vue-feather></i>&nbsp;&nbsp;share<number
                               class="bold counter"
                               ref="number1"
                               :from="0"
                               :to="30"
                               :duration="5"
                               :delay="0"
                               easing="Power1.easeOut" /></a></label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <profilePost2/>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import profilePost2 from "./profilePost2.vue"
export default {
  mixins:[imageMixin],
    components:{
        profilePost2
    },
    data(){
      return{
         lightBoxImages:[],
            visible: false,
           
             imgs: [{image:'user-profile/post2.jpg'}, {image:'user-profile/post3.jpg'},]
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
    mounted(){
        this.imgs.forEach(item=>{
            this.lightBoxImages.push(require('@/assets/images/'+item.image))
        })
    }
}
</script>