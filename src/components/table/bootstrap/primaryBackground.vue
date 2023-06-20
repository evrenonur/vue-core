<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Inverse Table with Primary background</h4><span>Use a class <code>.bg-info, .bg-success, .bg-warning and .bg-danger classes.</code> with light text on dark backgrounds inside table element.<br>To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal</span>
                  </div>
                  <div class="table-responsive theme-scrollbar">
                    <table class="table table-striped bg-primary">
                      <thead class="tbl-strip-thad-bdr">
                        <tr>
                           <th scope="col">Id</th>
                           <th scope="col">First Name</th>
                           <th scope="col">Last Name</th>
                           <th scope="col">Company</th>
                           <th scope="col">Credit Volume</th>
                           <th scope="col">Username</th>
                           <th scope="col">Role</th>
                           <th scope="col">Country</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr v-for="data in bootstraplist" :key="data">
                          <th scope="row">{{data.id}}</th>
                          <td>{{data.firstName}}</td>
                          <td>{{data.lastName}}</td>
                          <td>{{data.company}}</td>
                          <td>{{data.credit}}</td>
                          <td>{{data.userName}}</td>
                          <td>{{data.role}}</td>
                          <td>{{data.country}}</td>
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
          bootstraplist: state => state.bootstrap.tableData1,
        })
      },
      methods:{
        getImgUrl(path) {
        return require('@/assets/images/avtar/'+path);
      },
       
      }
}
</script>