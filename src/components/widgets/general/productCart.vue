<template>
     <div class="col-xl-6">
                <div class="card user-status">
                  <div class="card-header pb-0">
                    <h4>Product cart     </h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive theme-scrollbar mb-0">
                      <table class="table table-bordernone">
                        <thead>
                          <tr>
                            <th scope="col">Details</th>
                            <th scope="col">Qty.</th>
                            <th scope="col">Price</th>
                            <th class="text-end" scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="table in dashbord" :key="table">
                            <td>{{table.name}}</td>
                            <td class="digits">{{table.date}}</td>
                            <td>{{table.price}}</td>
                            <td class="text-end"><span class="badge " :class="table.StatusClass"> {{table.badge}}</span></td>
                          </tr>
                        </tbody>
                      </table>
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
          dashbord: state => state.widget.table,
        })
      },
    
}
</script>