<template>
     <div class="col-xl-6">
                <div class="card employee-status">
                  <div class="card-header pb-0">
                    <div class="d-flex"> 
                      <div class="flex-grow-1"> 
                        <h4>Employee Status</h4>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive theme-scrollbar">
                      <table class="table table-bordernone">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Skill Level</th>
                            <th scope="col">Experience</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in general" :key="item">
                            <td>
                              <div class="d-flex"><img :src="getImgUrl(item.img)" alt="">
                                <div class="flex-grow-1">
                                  <h5> <router-link to="/users/cards"> {{item.name}}</router-link><span class="text-muted">({{item.online}})</span></h5>
                                </div>
                              </div>
                            </td>
                            <td>{{item.position}}</td>
                            <td>
                              <div class="progress-showcase">
                                <div class="progress" style="height: 8px;">
                                  <div :class="item.skill" role="progressbar" :style="{'width':item.progress}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </td>
                            <td>{{item.exp}}</td>
                          </tr>
                        </tbody>
                      </table>
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
      general:(state)=>state.widget.employee,    
    }),
   },
}
</script>