<template>
     <div class="col-xl-12 col-lg-6 col-md-12 col-sm-6">
                        <div class="card">
                          <div class="card-header">
                            <h5 class="p-0">
                              <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon13" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon13" :class="[isActive ? 'active' : '']" v-on:click="toggle">Friends</button>
                            </h5>
                          </div>
                          <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
                            <div class="card-body avatar-showcase filter-cards-view">
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/3.jpg" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/5.jpg" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/1.jpg" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/2.png" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/3.png" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/6.jpg" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/10.jpg" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/14.png" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/1.jpg" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/4.jpg" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/11.png" alt="#"></div>
                              <div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="@/assets/images/user/8.jpg" alt="#"></div>
                            </div>
                          </div>
                        </div>
                      </div>
</template>
<script>

export default {
    components:{
       
    },
    data(){
        return{
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