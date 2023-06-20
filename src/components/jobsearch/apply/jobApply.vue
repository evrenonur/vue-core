<template>
     <div class="col-xxl-9 col-xl-8 box-col-8">
                <div class="card">
                  <div class="job-search">
                    <div class="card-body pb-0">
                      <div class="d-sm-flex align-items-start"><img class="img-40 img-fluid m-r-20" :src="getImgUrl(jobs.image)"  alt="">
                        <div class="flex-grow-1">
                          <h5 class="f-w-700 mb-0">	<router-link :to="{ name: 'jobdetails', params: { id: jobs.id }}">{{ jobs.title }}</router-link></h5>
                        <p>{{ jobs.company }} <span>{{ jobs.city }}, {{ jobs.country }} </span> <span v-html="stars(jobs.stars)"></span></p>
                          <button class="btn btn-primary job-apply-btn" type="button"><span><i class="fa fa-check text-white"></i></span> Save this job</button>
                        </div>
                      </div>
                      <personalDetails/>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-primary" type="submit">Submit</button>
                      <input class="btn btn-light ms-1" type="reset" value="Cancel">
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
 import { mapState } from 'vuex';
  import router from '@/router';
import personalDetails from "./personal/personalDetails.vue"
export default {
    components:{
     personalDetails
    },
 computed:{
      ...mapState({
        jobs: state => state.job.job.find(job => {
          if(parseInt(router.currentRoute._rawValue.params.id) === job.id)
            return job;
        })
      })
    }, 
    methods:{
      getImgUrl(filename) {
        var images = require.context('@/assets/images/job-search/', false, /\.jpg$/);
        return images('./' + filename);
      },
      stars(count) {
        var stars = '';

        for (var i = 0; i < 5; i++) {
          if(count > i) {
            stars = stars + '<i class="fa fa-star font-warning"></i>';
          } else {
            stars = stars + '<i class="fa fa-star font-warning-o"></i>';
          }
        }

        return stars;
      }
    }
}
</script>