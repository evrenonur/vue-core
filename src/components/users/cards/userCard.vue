<template>
     <div class="col-md-6 col-lg-6 col-xl-4 box-col-4" v-for="item in friendItem" :key="item">
                <div class="card custom-card">
                  <div class="card-header"><img class="img-fluid"  :src="getImgUrl(item.img)" alt=""></div>
                  <div class="card-profile"><img class="rounded-circle" :src="getImage(item.img1)" alt=""></div>
                  <div class="text-center profile-details"><router-link to="/users/profile">
                       <h4>{{item.name}}</h4></router-link>
                     <h6>{{item.title}}</h6>
                  </div>
                  <ul class="card-social">
                    <li><a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://accounts.google.com" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="javascript:void(0)"><i class="fa fa-rss"></i></a></li>
                  </ul>
                  <div class="card-footer row">
                    <div class="col-4 col-sm-4">
                      <h6>Follower</h6>
                      <h3 class="counter">{{item.follower}}</h3>
                    </div>
                    <div class="col-4 col-sm-4">
                      <h6>Following</h6>
                      <h3><span class="counter">{{item.following}}</span>K</h3>
                    </div>
                    <div class="col-4 col-sm-4">
                      <h6>Total Post</h6>
                      <h3><span class="counter">{{item.total}}</span>M</h3>
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
      friendItem:(state)=>state.users.data,    
    }),
   },
   methods:{
     getImage(path) {
      return require("@/assets/images/" + path);
    },
   }
}
</script>