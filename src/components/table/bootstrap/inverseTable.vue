<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Inverse Table</h4><span>Use a class <code>table-inverse</code> inside table element.</span>
                  </div>
                  <div class="table-responsive theme-scrollbar">
                    <table class="table table-inverse">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Office</th>
                          <th scope="col">Position</th>
                          <th scope="col">Salary</th>
                          <th scope="col">Join Date</th>
                          <th scope="col">Age</th>
                        </tr>
                      </thead>
                      <tbody > 
                        <tr v-for="data in bootstraplist" :key="data">
                          <th scope="row">{{data.id}}</th>
                          <td>{{data.firstName}}</td>
                          <td>{{data.lastName}}</td>
                          <td>{{data.office}}</td>
                          <td>{{data.role}}</td>
                          <td>{{data.salary}}</td>
                          <td>{{data.join}}</td>
                          <td>{{data.age}}</td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
          bootstraplist: state => state.bootstrap.inverse,
        })
      },
      methods:{
        getImgUrl(path) {
        return require('@/assets/images/avtar/'+path);
      },
       
      }
}
</script>