<template>
     <div class="col-sm-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Striped Row with Inverse Table</h4><span>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code></code>. This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported.</span>
                  </div>
                  <div class="card-block row">
                    <div class="col-sm-12 col-lg-12 col-xl-12">
                      <div class="table-responsive theme-scrollbar">
                        <table class="table table-inverse table-striped">
                          <thead>
                            <tr>
                             <th scope="col">Id</th>
                              <th scope="col">Dessert</th>
                              <th scope="col">Calories</th>
                              <th scope="col">Fat</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in bootstraplist" :key="item">
                             <th scope="row">{{item.id}}</th>
                              <td>{{item.dessert}}</td>
                              <td>{{item.calories}}</td>
                              <td>{{item.fat}}</td>
                              <td>{{item.price}}</td>
                            </tr>
                           
                          </tbody>
                        </table>
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
          bootstraplist: state => state.bootstrap.table2,
        })
      },
    
}
</script>