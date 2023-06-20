<template>
    <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon2" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon2" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Job Title</button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="card-body animate-chk">
                                <label class="d-block" for="chk-ani11">
                                  <input class="checkbox_animated" id="chk-ani11" type="checkbox">                          UI/Ux designer(25)
                                </label>
                                <label class="d-block" for="chk-ani12">
                                  <input class="checkbox_animated" id="chk-ani12" type="checkbox">                          Graphic designer(10)
                                </label>
                                <label class="d-block" for="chk-ani13">
                                  <input class="checkbox_animated" id="chk-ani13" type="checkbox">                          Front end designer(15)
                                </label>
                                <label class="d-block" for="chk-ani14">
                                  <input class="checkbox_animated" id="chk-ani14" type="checkbox">                          PHP developer(42)
                                </label>
                                <label class="d-block mb-0" for="chk-ani15">
                                  <input class="checkbox_animated" id="chk-ani15" type="checkbox">                         React Developer(5)
                                </label>
                              </div>
                              <button class="btn btn-block btn-primary text-center" type="button">All Job Title</button>
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