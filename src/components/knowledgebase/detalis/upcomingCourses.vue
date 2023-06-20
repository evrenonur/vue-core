<template>
      <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon2" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon2" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Upcoming Courses</button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="upcoming-course card-body">
                                <div class="d-flex">
                                  <div class="flex-grow-1"><span class="f-w-600">UX Development</span>
                                    <h6>Course By <a href="#"> Development Team</a></h6>
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
                                  <div class="flex-grow-1"><span class="f-w-600">Business Analyst</span>
                                    <h6>Course By <a href="#">Analyst Team.</a></h6>
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
                                  <div class="flex-grow-1"><span class="f-w-600">Web Development</span>
                                    <h6>Course By <a href="#">Designer</a></h6>
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