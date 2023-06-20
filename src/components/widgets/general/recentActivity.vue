<template>
    <div class="col-xl-4 col-md-6">
                <div>
                  <div class="card activity-widget">
                    <div class="card-header pb-0">
                      <div class="d-flex"> 
                        <div class="flex-grow-1"> 
                          <h4>Recent Activity</h4>
                        </div>
                       
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="activity-media">
                        <div class="d-flex" v-for="item in dashbord" :key="item">
                          <div class="recent-circle " :class="item.color"></div>
                          <div class="flex-grow-1">
                            <h6>{{item.name}}</h6><span><i class="me-2 align-middle" data-feather="clock"></i><span class="align-middle">{{item.date}} | {{item.hour}}</span></span>
                          </div>
                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
          dashbord: state => state.widget.activity,
        })
      },
    
}
</script>