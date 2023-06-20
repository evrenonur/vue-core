<template>
     <div class="col-xl-8 col-lg-6 col-md-12 box-col-50 cols-xl-50">
                <div class="card order-card">
                  <div class="card-header pb-0">
                    <div class="d-flex justify-content-between">
                      <div class="flex-grow-1">
                        <p class="square-after f-w-600">Our Total Sold<i class="fa fa-circle"></i></p>
                      </div>
                     
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="table-responsive theme-scrollbar">
                      <table class="table table-bordernone">
                        <thead>
                          <tr>
                            <th class="f-26">Order List</th>
                            <th>Status</th>
                            <th>Operator</th>
                            <th>Delivery Date</th>
                            <th>Delivery Address</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in dashbord" :key="item">
                            <td> 
                              <div class="d-flex">
                                <div class="number-dot"><span class="f-w-700">{{item.id}}</span></div>
                                <div class="flex-grow-1"><span class="f-14 f-w-600">{{item.color}}</span></div>
                              </div>
                            </td>
                            <td> <span>{{item.status}}</span></td>
                            <td>{{item.operator}}</td>
                            <td>{{item.date}}</td>
                            <td>{{item.address}}</td>
                            <td>{{item.price}}</td>
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
          dashbord: state => state.dashbord.orderList,
        })
      },
      methods:{
        getImgUrl(path) {
        return require('@/assets/images/dashboard-2/dash-2/'+path);
      },
       
      }
}
</script>