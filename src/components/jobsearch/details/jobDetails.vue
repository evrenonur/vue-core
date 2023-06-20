<template>
     <div class="col-xxl-9 col-xl-8 box-col-8">
                <div class="card" >
                  <div class="job-search">
                    <div class="card-body">
                      <div class="d-sm-flex align-items-start"><img class="img-40 img-fluid m-r-20" :src="getImgUrl(jobs.image)" alt="">
                        <div class="flex-grow-1">
                          <h6 class="f-w-600"><router-link :to="{ name: 'jobdetails', params: { id: jobs.id }}">{{ jobs.title }}</router-link></h6>
                        <p>{{ jobs.company }} <span>{{ jobs.city }}, {{ jobs.country }} </span>  <ul><li v-html="stars(jobs.stars)"></li></ul></p>
                        <router-link :to="{ name: 'jobapply', params: { id: jobs.id }}"  class="btn btn-primary btn-sm job-apply-btn" >Apply for this job</router-link>
                        </div>
                      </div>
                      <div class="job-description">
                        <h6>Job Description</h6>
                        <p class="text-start" v-html="jobs.description"></p>
                      </div>
                      <div class="job-description">
                        <h6>Qualifications </h6>
                        <ul>
                        <li v-for="(r,index) in jobs.resp" :key="index" v-text="r.title"></li>
                        </ul>
                      </div>
                      <div class="job-description">
                        <h6>Agency experience</h6>
                        <ul>
                         <li v-for="(rq,index) in jobs.reqs" :key="index" v-text="rq.title"></li>
                        </ul>
                      </div>
                      <div class="job-description">
                        <h6>Perks</h6>
                        <ul>
                         <li v-for="(ski,index) in jobs.skills" :key="index" v-text="ski.title"></li>
                        </ul>
                      </div>
                      <div class="job-description">
                        <button class="btn btn-primary" type="button"><span><i class="fa fa-check"></i></span> Save this job</button>
                        <button class="btn btn-primary ms-1" type="button"><span><i class="fa fa-share-alt"></i></span> Share</button>
                      </div>
                    </div>
                  </div>
                </div>
               <similarJobs/>
              </div>
</template>
<script>
 import { mapState } from 'vuex';
  import router from '@/router';
  import similarJobs from "./similarJobs.vue"
export default {
   components:{
     similarJobs
   },
   props: ['id'],
    computed:{
      ...mapState({
        jobs: state => state.job.job.find(job => {
          if(parseInt(router.currentRoute._rawValue.params.id) === job.id)
            return job;
        }),
        jobslist: state => state.job.job,
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