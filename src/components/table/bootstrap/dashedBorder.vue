<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Dashed Border</h4><span> Dashed border use class <code>.table-dashed</code>, for Dotted border use class <code>.table-dotted</code>, for Double border use class <code>.table-Double</code></span>
                  </div>
                  <div class="table-responsive theme-scrollbar">
                    <table class="table table-dashed">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Classname</th>
                          <th scope="col">Type</th>
                          <th scope="col">Hours</th>
                          <th scope="col">Trainer</th>
                          <th scope="col">Spots</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in bootstraplist" :key="item">
                          <th scope="row">{{item.id}}</th>
                          <td>{{item.className}}</td>
                          <td>{{item.type}}</td>
                          <td>{{item.hours}}</td>
                          <td>{{item.trainer}}</td>
                          <td>{{item.spot}}</td>
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
          bootstraplist: state => state.bootstrap.tableData,
        })
      },
    
}
</script>