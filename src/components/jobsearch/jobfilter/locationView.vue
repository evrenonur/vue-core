<template>
     <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon1" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon1" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Location  </button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="card-body animate-chk">
                                <div class="location-checkbox">
                                  <label class="d-block" for="chk-ani6">
                                    <input class="checkbox_animated" id="chk-ani6" type="checkbox">New York<span class="d-block">NY (399)</span>
                                  </label>
                                  <label class="d-block" for="chk-ani7">
                                    <input class="checkbox_animated" id="chk-ani7" type="checkbox">San Francisco<span class="d-block">CA (252)</span>
                                  </label>
                                  <label class="d-block" for="chk-ani8">
                                    <input class="checkbox_animated" id="chk-ani8" type="checkbox">Washington<span class="d-block">DC (226)</span>
                                  </label>
                                  <label class="d-block" for="chk-ani9">
                                    <input class="checkbox_animated" id="chk-ani9" type="checkbox">Seattle<span class="d-block">WA (242)</span>
                                  </label>
                                  <label class="d-block mb-0" for="chk-ani10">
                                    <input class="checkbox_animated" id="chk-ani10" type="checkbox">Chicago<span class="d-block">IL (187)</span>
                                  </label>
                                </div>
                              </div>
                              <button class="btn btn-block btn-primary text-center" type="button">All Locations</button>
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