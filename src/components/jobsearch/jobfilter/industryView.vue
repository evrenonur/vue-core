<template>
    <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon3" :aria-expanded="isActive?'true':'false'" aria-controls="collapseicon3" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Industry</button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="card-body animate-chk">
                                <label class="d-block" for="chk-ani16">
                                  <input class="checkbox_animated" id="chk-ani16" type="checkbox">                          Computer Software(14)
                                </label>
                                <label class="d-block" for="chk-ani17">
                                  <input class="checkbox_animated" id="chk-ani17" type="checkbox">                          IT Engineer(10)
                                </label>
                                <label class="d-block" for="chk-ani18">
                                  <input class="checkbox_animated" id="chk-ani18" type="checkbox">                          Service industry(20)
                                </label>
                                <label class="d-block" for="chk-ani19">
                                  <input class="checkbox_animated" id="chk-ani19" type="checkbox">                         Accounting(34)
                                </label>
                                <label class="d-block mb-0" for="chk-ani20">
                                  <input class="checkbox_animated" id="chk-ani20" type="checkbox">                          Financial Services(5)
                                </label>
                              </div>
                              <button class="btn btn-block btn-primary text-center" type="button">All Industries</button>
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