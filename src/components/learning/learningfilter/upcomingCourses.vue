<template>
     <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon2" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon2"  :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Upcoming Courses</button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="upcoming-course card-body">
                                <div class="d-flex">
                                  <div class="flex-grow-1">
                                    <h5 class="f-w-600">UX Development</h5>
                                    <p class="mb-0">Course By <a href="#">Development Team</a></p>
                                    <ul class="rating">
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star-half-o font-warning"></i></li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h5 class="mb-0 p-0 font-primary">18</h5><span class="d-block">Dec</span>
                                  </div>
                                </div>
                                <div class="d-flex">
                                  <div class="flex-grow-1">
                                    <h5 class="f-w-600">Business Analyst</h5>
                                    <p class="mb-0">Course By <a href="#">Analyst Team.</a></p>
                                    <ul class="rating">
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h5 class="mb-0 p-0 font-primary">28</h5><span class="d-block">Dec</span>
                                  </div>
                                </div>
                                <div class="d-flex">
                                  <div class="flex-grow-1">
                                    <h5 class="f-w-600">Web Development</h5>
                                    <p class="mb-0">Course By <a href="#">Designer</a></p>
                                    <ul class="rating">
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star font-warning"></i></li>
                                      <li><i class="fa fa-star-half-o font-warning"></i></li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h5 class="mb-0 p-0 font-primary">5</h5><span class="d-block">Jan</span>
                                  </div>
                                </div>
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