<template>
    <div class="col-sm-12">
                      <div class="card">
                        <div class="profile-post">
                          <div class="post-header">
                            <div class="d-flex"><img class="img-thumbnail rounded-circle me-3" src="@/assets/images/user/7.jpg" alt="Generic placeholder image">
                              <div class="flex-grow-1 align-self-center"><router-link to="/pages/social-app">
                                  <h5 class="user-name">Emay Walter</h5></router-link>
                                <h6>2 Hours ago</h6>
                              </div>
                            </div>
                            <div class="post-setting"><i class="fa fa-ellipsis-h"></i></div>
                          </div>
                          <div class="post-body">
                            <div class="img-container">
                              <div class="my-gallery" itemscope="">
                                  <figure itemprop="associatedMedia" itemscope=""  v-for="(src, index) in imgs"
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
                              <h6 class="f-w-500">+20 people react this post</h6>
                            </div>
                            <p>Comfort is very important to me. I think people live better in big houses and in big clothes. Design and style should work toward making you look good and feel good without a lot of effort so you can get on with the things that matter. My shows are about the complete woman who swallows it all. Its a question of survival. Those fashion designers are just crazy; but arent we all? You can only go forward by making mistakes.</p>
                            <ul class="post-comment">
                              <li>
                                <label><a href="#"><i data-feather="heart"><vue-feather type="heart"></vue-feather></i>&nbsp;&nbsp;Like<number
                               class="bold counter"
                               ref="number1"
                               :from="0"
                               :to="407"
                               :duration="5"
                               :delay="0"
                               easing="Power1.easeOut" /></a></label>
                              </li>
                              <li>
                                <label><a href="#"><i data-feather="message-square"><vue-feather type="message-square"></vue-feather></i>&nbsp;&nbsp;Comment<number
                                class="bold counter"
                                ref="number1"
                               :from="0"
                               :to="302"
                               :duration="5"
                               :delay="0"
                                easing="Power1.easeOut" /></a></label>
                              </li>
                              <li>
                                <label><a href="#"><i data-feather="share"><vue-feather type="share"></vue-feather></i>&nbsp;&nbsp;share<number
                                class="bold counter"
                                ref="number1"
                                :from="0"
                                :to="180"
                                :duration="5"
                                :delay="0"
                                easing="Power1.easeOut" /></a></label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
export default {
  mixins:[imageMixin],
    data(){
      return{
         lightBoxImages:[],
            visible: false,
             imgs: [ {image:'user-profile/post4.jpg'},]
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