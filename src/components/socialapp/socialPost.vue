<template>
  <div class="col-xl-6 col-md-7 box-col-40 xl-40">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="new-users-social">
              <div class="d-flex align-items-start"><img class="rounded-circle image-radius m-r-15"
                  src="@/assets/images/user/1.jpg" alt="">
                <div class="flex-grow-1">
                  <h6 class="mb-0 f-w-700">ELANA</h6>
                  <p>January, 12,2023</p>
                </div><span class="pull-right mt-0"><i data-feather="more-vertical"> </i></span>
              </div>
            </div><img class="img-fluid" alt="" src="@/assets/images/social-app/timeline-1.png">
            <div class="timeline-content">
              <p class="mb-0">The only way to do something in depth is to work hard. I've always thought of the T-shirt as
                the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart,
                body and soul.</p>
              <div class="like-content mt-2"><span><i class="fa fa-heart font-danger"></i></span><span
                  class="pull-right comment-number"><span>20 </span><span><i
                      class="fa fa-share-alt me-0"></i></span></span><span class="pull-right comment-number"><span>10
                  </span><span><i class="fa fa-comments-o"></i></span></span></div>
              <div class="social-chat">
                <div :class="item.class" v-for="item in post" :key="item">
                  <div class="d-flex align-items-start"><img class="img-50 img-fluid m-r-20 rounded-circle" alt=""
                      :src="getImgUrl(item.image)">
                    <div class="flex-grow-1"><span class="f-w-600">{{item.name}} <span>{{item.date}} <i
                            class="fa fa-reply font-primary"></i></span></span>
                      <p class="mb-0">{{item.msg}}</p>
                    </div>
                  </div>
                </div>
                <div class="text-center"><a class="f-w-600" href="javascript:void(0)">More Commnets</a></div>
              </div>
              <div class="comments-box">
                <div class="d-flex align-items-center"><img class="img-50 img-fluid m-r-20 rounded-circle" alt=""
                    src="@/assets/images/user/1.jpg">
                  <div class="flex-grow-1">
                    <div class="input-group text-box">
                      <input class="form-control input-txt-bx" type="text" name="message-to-send"
                        placeholder="Post Your commnets">
                      <div class="input-group-text"> <img src="@/assets/images/smiley.png" alt=""></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <socialPost1 />
    </div>
  </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import socialPost1 from "./socialPost1.vue"
import { mapState } from 'vuex';
export default {
  mixins:[imageMixin],
    components:{
    socialPost1
    },
    data(){
      return {
            isActive: true,
      };
    },
    computed: {
      ...mapState({
         post: state => state.social.post

      })
    },
    methods:{
      
       toggle() {
      this.isActive = !this.isActive
    },
    }
}
</script>