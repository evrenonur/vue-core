<template>
     <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon4" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon4"  :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Specific skills</button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="card-body animate-chk">
                                <label class="d-block" for="chk-ani21">
                                  <input class="checkbox_animated" id="chk-ani21" type="checkbox">                          HTML,scss & sass
                                </label>
                                <label class="d-block" for="chk-ani22">
                                  <input class="checkbox_animated" id="chk-ani22" type="checkbox">                          Javascript
                                </label>
                                <label class="d-block" for="chk-ani23">
                                  <input class="checkbox_animated" id="chk-ani23" type="checkbox">                          Node.js
                                </label>
                                <label class="d-block" for="chk-ani24">
                                  <input class="checkbox_animated" id="chk-ani24" type="checkbox">                          Gulp & Pug
                                </label>
                                <label class="d-block mb-0" for="chk-ani25">
                                  <input class="checkbox_animated" id="chk-ani25" type="checkbox">                          Angular.js
                                </label>
                              </div>
                              <button class="btn btn-block btn-primary text-center" type="button">All Skills</button>
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