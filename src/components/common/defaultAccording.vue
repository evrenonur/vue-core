<template>
  <div class="col-xl-12">
    <div class="card">
      <div class="card-header" id="info-bar-tour">
        <h5 class="p-0">
          <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon2"
            :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon2" :class="[isActive ? 'active' : '']"
            v-on:click="toggle">About Me</button>
        </h5>
      </div>
      <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
        <div class="card-body post-about">
          <ul>
            <li>
              <div class="icon"><vue-feather type="briefcase"></vue-feather></div>
              <div>
                <h5>UX desginer at Pixelstrap</h5>
                <p class="mb-0">banglore - 2022</p>
              </div>
            </li>
            <li>
              <div class="icon"><vue-feather type="book"></vue-feather></div>
              <div>
                <h5>studied computer science</h5>
                <p class="mb-0">at london univercity - 2022</p>
              </div>
            </li>
            <li>
              <div class="icon"><vue-feather type="heart"></vue-feather></div>
              <div>
                <h5>relationship status</h5>
                <p class="mb-0">single</p>
              </div>
            </li>
            <li>
              <div class="icon"><vue-feather type="map-pin"></vue-feather></div>
              <div>
                <h5>lived in london</h5>
                <p class="mb-0">last 5 year</p>
              </div>
            </li>
            <li>
              <div class="icon"><vue-feather type="droplet"></vue-feather></div>
              <div>
                <h5>blood group</h5>
                <p class="mb-0">O+ positive</p>
              </div>
            </li>
          </ul>
          <div class="social-network theme-form"><span class="f-w-600">Social Networks</span><a
              class="btn social-btn btn-fb mb-2 text-center" href="https://www.facebook.com/"><i
                class="fa fa-facebook m-r-5"></i>Facebook</a><a class="btn social-btn btn-twitter mb-2 text-center"
              href="https://twitter.com/"><i class="fa fa-twitter m-r-5"></i>Twitter</a><a
              class="btn social-btn btn-google text-center" href="https://dribbble.com/"><i
                class="fa fa-dribbble m-r-5"></i>Dribbble</a></div>
        </div>
      </div>
    </div>
  </div>
  <followersView />
  <followingView />
  <latestPhotos />
  <friendsView />
</template>
<script>
import followersView from "@/components/users/profile/followersView.vue"
import followingView from "@/components/users/profile/followingView.vue"
import latestPhotos from "@/components/users/profile/latestPhotos.vue"
import friendsView from "@/components/users/profile/friendsView.vue"
export default {
  components: {
    followersView,
    followingView,
    latestPhotos,
    friendsView
  },
  data() {
    return {
      isActive: true,
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
  }
}
</script>