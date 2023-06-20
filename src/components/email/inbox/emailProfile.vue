<template>
     <div class="col-xl-9 col-md-12 xl-70 box-col-70">
                  <div class="email-right-aside">
                    <div class="card email-body">
                      <div class="email-profile">
                        <div>
                          <div class="pe-0 b-r-light"></div>
                          <div class="email-top">
                            <div class="row">
                              <div class="col-12">
                                <div class="d-flex">
                                  <label class="email-chek d-block">
                                    <input class="checkbox_animated" type="checkbox" checked="">
                                  </label>
                                  <div class="flex-grow-1">                                                                       
                                    <div class="dropdown">
                                      <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="javascript:void(0)">Refresh</a><a class="dropdown-item" href="javascript:void(0)">Mark as important</a><a class="dropdown-item" href="javascript:void(0)">Move to span</a><a class="dropdown-item" href="javascript:void(0)">Move to trush                                   </a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="inbox">
                            <div class="d-flex" v-for="email in emails" :key="email">
                              <div class="flex-shrink-0">                                       
                                <label class="d-block mb-0">
                                  <input class="checkbox_animated" type="checkbox" email.box>
                                </label><vue-feather type="star"  :class="email.star"></vue-feather><img class="me-3 rounded-circle" :src="getImgUrl(email.image)" alt="">
                              </div>
                              <div class="flex-grow-1">
                                <h6>{{email.name}}</h6>
                                <p>{{email.desc}}</p><span>{{email.time}}</span>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from "vuex";
export default {
  mixins:[imageMixin],
     computed: {
    ...mapState({
      emails:(state)=>state.email.data,
         
    }),
  },
 
}
</script>
