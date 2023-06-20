<template>
    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-6">
                        <div class="card">
                          <div class="card-header">
                            <h5 class="p-0">
                              <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon4" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon4" :class="[isActive ? 'active' : '']" v-on:click="toggle">Latest Photos</button>
                            </h5>
                          </div>
                          <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
                            <div class="card-body photos filter-cards-view">
                              <ul>
                                <li>
                                  <div class="latest-post"><img class="img-fluid" alt="" src="@/assets/images/social-app/post-1.png"></div>
                                </li>
                                <li>
                                  <div class="latest-post"><img class="img-fluid" alt="" src="@/assets/images/social-app/post-2.png"></div>
                                </li>
                                <li>
                                  <div class="latest-post"><img class="img-fluid" alt="" src="@/assets/images/social-app/post-3.png"></div>
                                </li>
                                <li>
                                  <div class="latest-post"><img class="img-fluid" alt="" src="@/assets/images/social-app/post-4.png"></div>
                                </li>
                                <li>
                                  <div class="latest-post"><img class="img-fluid" alt="" src="@/assets/images/social-app/post-5.png"></div>
                                </li>
                                <li>
                                  <div class="latest-post"><img class="img-fluid" alt="" src="@/assets/images/social-app/post-6.png"></div>
                                </li>
                                <li>
                                  <div class="latest-post"><img class="img-fluid" alt="" src="@/assets/images/social-app/post-7.png"></div>
                                </li>
                                <li>
                                  <div class="latest-post"><img class="img-fluid" alt="" src="@/assets/images/social-app/post-8.png"></div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

</template>
<script>

export default {
   
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