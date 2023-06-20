<template>
     <div class="col-xxl-9 col-xl-8 box-col-8">
                <div class="row">
                  <div class="col-xl-6 box-col-6" v-for="(job,index) in jobslist" :key="index" >
                    <div class="card" :class="{'ribbon-vertical-left-wrapper': job.priority == 1 }">
                    <div v-if="job.priority == 1" class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"><i class="icofont icofont-love"></i></div>
                      <div class="job-search">
                        <div class="card-body">
                          <div class="d-sm-flex align-items-start"><img class="img-40 img-fluid m-r-20" :src="getImgUrl(job.image)" alt="">
                            <div class="flex-grow-1">
                              <h6 class="f-w-600">	
                      <router-link :to="{ name: 'jobdetails', params: { id: job.id }}">
                          {{ job.title }}
                          </router-link>
								<span class="pull-right" v-if="job.date" v-text="job.date"></span>
								<span class="badge badge-primary pull-right" v-else>New</span></h6>
                            <p>{{ job.company }} <span>{{ job.city }}, {{ job.country }} </span> <ul><li v-html="stars(job.stars)"></li></ul></p>
                            </div>
                          </div>
                        <p v-text="job.description"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-sm-12">
                    <div class="job-pagination">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination pagination-primary">
                          <li class="page-item disabled"><a class="page-link" href="javascript:void(0)">Previous</a></li>
                          <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
 import { mapState } from 'vuex';

export default {
   components:{
      
   } ,
    computed: {
        ...mapState({
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