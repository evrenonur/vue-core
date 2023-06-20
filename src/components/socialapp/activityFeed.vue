<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <h5 class="p-0">
          <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon12"
            :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon12"
            :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Activity Feed</button>
        </h5>
      </div>
      <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
        <div class="card-body social-status filter-cards-view">
          <div class="d-flex align-items-center" v-for="friend in friends" :key="friend"><img
              class="img-50 rounded-circle m-r-15" :src="getImgUrl(friend.image)" alt="">
            <div class="flex-grow-1"><router-link to="/users/profile"> <span
                  class="f-w-600 d-block">{{friend.name}}</span></router-link>
              <p>Commented on Shaun Park's <a href="javascript:void(0)">Photo</a></p><span class="light-span">20 min
                Ago</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from 'vuex';
export default {
  mixins:[imageMixin],
    data(){
      return {
            isActive: true,
      };
    },
    computed: {
      ...mapState({
         friends: state => state.social.activity

      })
    },
    methods:{
      
       toggle() {
      this.isActive = !this.isActive
    },
    }
}
</script>