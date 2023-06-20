<template>
  <div class="col-xl-3 col-lg-5 col-md-6 box-col-30 xl-30">
    <div class="card product">
      <div class="card-header pb-0">
        <div class="d-flex justify-content-between">
          <div class="flex-grow-1">
            <p class="square-after f-w-600">Top Selling Product<i class="fa fa-circle"> </i></p>
            <h4>Product</h4>
          </div>

        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive theme-scrollbar">
          <table class="table">
            <tbody>
              <tr v-for="item in dashbord" :key="item">
                <td>
                  <div class="d-flex align-items-center"><img class="img-fluid circle" :src="getImgUrl(item.img)" alt="">
                    <div class="flex-grow-1"><span> <router-link
                          to="/ecommerce/product">{{item.name}}</router-link></span>
                      <p class="mb-0">{{item.item}}</p>
                    </div>
                    <div class="active-status active-online"></div>
                  </div>
                </td>
                <td>{{item.total}}</td>
                <td><span>{{item.price}}</span></td>
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
          dashbord: state => state.dashbord.selling,
        })
      },
    
}
</script>