<template>
     <div class="row">
                          <div class="col-lg-4 col-md-6" v-for="(project,index) in allprojects" :key="index" :class="index < 3 ? 'mb-1' : ''">
                            <div class="project-box"><span class="badge " :class="'badge-'+project.font">{{ project.badge }}</span>
                              <h6>{{ project.title }}</h6>
                              <div class="d-flex"><img class="img-20 me-2 rounded-circle" :src='getImgUrl(project.img)' alt="" data-original-title="" title="">
                                <div class="flex-grow-1">
                                  <p class="mb-0">{{ project.sites }}</p>
                                </div>
                              </div>
                              <p>{{ project.desc }}</p>
                              <div class="row details">
                                <div class="col-6"><span>Issues </span></div>
                                <div class="col-6 " :class="'font-'+project.font">12 </div>
                                <div class="col-6"> <span>Resolved</span></div>
                                <div class="col-6 " :class="'font-'+project.font">5</div>
                                <div class="col-6"> <span>Comment</span></div>
                                <div class="col-6 " :class="'font-'+project.font">7</div>
                              </div>
                              <div class="customers">
                                <ul>
                                  <li class="d-inline-block"><img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img1)' alt="" data-original-title="" title=""></li>
                                  <li class="d-inline-block"><img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img2)' alt="" data-original-title="" title=""></li>
                                  <li class="d-inline-block"><img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img3)' alt="" data-original-title="" title=""></li>
                                  <li class="d-inline-block ms-2">
                                    <p class="f-12">{{project.like}} More</p>
                                  </li>
                                </ul>
                              </div>
                              <div class="project-status mt-4">
                                <div class="d-flex mb-0">
                                  <p>{{project.progress}}% </p>
                                  <div class="flex-grow-1 text-end"><span>Done</span></div>
                                </div>
                                <div class="progress" style="height: 5px">
                                  <div class="progress-bar-animated " :class="'bg-'+project.type" role="progressbar"  :style= "{'width': project.progress + '%'}" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                          </div>
     </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
      return {
      };
    },
    computed: {
      ...mapState({
        allprojects: state => state.common.allprojects,
      })
    },
    methods:{
      getImgUrl(path) {
        return require('@/assets/images/'+path);
      },
    }
}
</script>