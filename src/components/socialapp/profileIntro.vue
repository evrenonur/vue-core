<template>
     <div class="col-xl-3 box-col-30 xl-30">
                      <div class="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
                        <div class="row">
                             <div class="col-xl-12 col-md-6 box-col-12">
                            <div class="card">
                              <div class="card-header">
                                <h5 class="p-0">
                                  <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon2" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon2"  :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Profile Intro</button>
                                </h5>
                              </div>
                              <div :class="[isActive ? 'block' : ' show']"  v-show="isActive">
                                <div class="card-body filter-cards-view">
                                  <div class="filter-view-group"><span class="f-w-600">About Me :</span>
                                    <p class="mb-0">
                                      Hi, I’m elana, I’m 30 and I work as a 
                                      web Designer for the “Daydreams” 
                                      Agency in Pier 56.
                                    </p>
                                  </div>
                                  <div class="filter-view-group"><span class="f-w-600">Favourite TV shows :</span>
                                    <p class="mb-0">
                                      Breaking Good, RedDevil, People of
                                      Interest, The Running Dead, 
                                      Found, American Guy.
                                    </p>
                                  </div>
                                  <div class="filter-view-group"><span class="f-w-600">Favourite Music Bands :</span>
                                    <p class="mb-0">
                                      Breaking Good, RedDevil, People of
                                      Interest, The Running Dead, 
                                      Found, American Guy.
                                    </p>
                                  </div>
                                  <div class="social-network theme-form"><span class="f-w-600">Social Networks</span><a class="btn social-btn btn-fb mb-2 text-center" href="https://www.facebook.com/"><i class="fa fa-facebook m-r-5"></i>Facebook</a><a class="btn social-btn btn-twitter mb-2 text-center" href="https://twitter.com/"><i class="fa fa-twitter m-r-5"></i>Twitter</a><a class="btn social-btn btn-google text-center" href="https://dribbble.com/"><i class="fa fa-dribbble m-r-5"></i>Dribbble</a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                      <followersView/>
                      <followingView/>
                      <latestPhotos/>
                      <friendsView/>
                      <div class="col-xl-12 col-md-6 box-col-12">
                            <div class="card"><img class="img-fluid" src="@/assets/images/social-app/timeline-4.png" alt=""></div>
                          </div>
                        </div>
                      </div>
     </div>
</template>
<script>
import followersView from "@/components/users/profile/followersView.vue"
import followingView from "@/components/users/profile/followingView.vue"
import latestPhotos from "@/components/users/profile/latestPhotos.vue"
import friendsView from "@/components/users/profile/friendsView.vue"
export default {
    components:{
    followersView,
    followingView,
    latestPhotos,
    friendsView
    },
    data(){
        return{
            show:true,
            isActive: true,
        }
    },
    methods:{
       toggle() {
      this.isActive = !this.isActive
    },
    }
}
</script>