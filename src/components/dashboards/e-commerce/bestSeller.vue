<template>
  <div class="col-lg-12 col-md-12 box-col-12">
    <div class="card best-seller">
      <div class="card-header pb-0">
        <div class="d-flex justify-content-between">
          <div class="flex-grow-1">
            <p class="square-after f-w-600">Our Total Sold<i class="fa fa-circle"> </i></p>
          </div>

        </div>
      </div>
      <div class="card-body pt-0">
        <div class="table-responsive theme-scrollbar">
          <table class="table table-bordernone">
            <thead>
              <tr>
                <th class="f-26">Best Seller</th>
                <th>Date</th>
                <th>Product</th>
                <th>Country</th>
                <th>Total</th>
                <th>Status</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dashbord" :key="item">
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0"><img class="img-fluid" :src="getImgUrl(item.img)" alt=""></div>
                    <div class="flex-grow-1"><span class="f-14 f-w-600"> <router-link
                          to="/users/profile">{{item.name}}</router-link></span>
                      <p class="mb-0">{{item.year}}</p>
                    </div>
                    <div class="active-status active-online"></div>
                  </div>
                </td>
                <td>{{item.date}}</td>
                <td>{{item.product}}</td>
                <td> <i :class="item.icon"></i></td>
                <td> <span>{{item.total}}</span></td>
                <td> <span>{{item.status}}</span><i class="fa fa-check-circle f-14"></i></td>
                <td><span> <router-link to="/users/edit">Edit</router-link></span></td>
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
import { mapState } from 'vuex';
export default {
  mixins:[imageMixin],
    computed: {
        ...mapState({
          dashbord: state => state.dashbord.seller,
        })
      },
     
}
</script>