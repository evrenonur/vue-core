<template>
     <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Filter</button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="card-body filter-cards-view animate-chk">
                                <div class="job-filter mb-3">
                                  <div class="faq-form">
                                    <input class="form-control" type="text" placeholder="Search.."><i  data-feather="search"><vue-feather class="search-icon" type="search"></vue-feather></i>
                                  </div>
                                </div>
                                <div class="job-filter">
                                  <div class="faq-form">
                                    <input class="form-control" type="text" placeholder="location.."><i data-feather="map-pin"><vue-feather class="search-icon"  type="map-pin"></vue-feather></i>
                                  </div>
                                </div>
                                <div class="checkbox-animated">
                                  <label class="d-block" for="chk-ani">
                                    <input class="checkbox_animated" id="chk-ani" type="checkbox"> Full-time (8688)
                                  </label>
                                  <label class="d-block" for="chk-ani1">
                                    <input class="checkbox_animated" id="chk-ani1" type="checkbox">Contract (503)
                                  </label>
                                  <label class="d-block" for="chk-ani2">
                                    <input class="checkbox_animated" id="chk-ani2" type="checkbox">Part-time (288)
                                  </label>
                                  <label class="d-block" for="chk-ani3">
                                    <input class="checkbox_animated" id="chk-ani3" type="checkbox">Internship (236)
                                  </label>
                                  <label class="d-block" for="chk-ani4">
                                    <input class="checkbox_animated" id="chk-ani4" type="checkbox">Temporary (146)
                                  </label>
                                  <label class="d-block" for="chk-ani5">
                                    <input class="checkbox_animated" id="chk-ani5" type="checkbox">Commission (25)
                                  </label>
                                </div>
                                <button class="btn btn-primary text-center" type="button">Find jobs</button>
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