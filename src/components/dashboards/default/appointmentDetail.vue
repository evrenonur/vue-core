<template>
  <div class="col-xl-4 col-md-6 box-col-40 xl-40">
    <div class="card appointment-detail">
      <div class="card-header pb-0">
        <div class="d-flex justify-content-between">
          <div class="flex-grow-1">
            <p class="square-after f-w-600 header-text-primary">total appointment<i class="fa fa-circle"> </i></p>
            <h4>12 meet</h4>
          </div>

        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive theme-scrollbar">
          <table class="table">
            <tbody>
              <tr v-for="item in dashbord" :key="item">
                <td>
                  <div class="d-flex"><img class="img-fluid align-top circle" :src="getImgUrl(item.img)" alt="">
                    <div class="flex-grow-1"><router-link to="/users/profile"><span>{{item.name}}</span></router-link>
                      <p class="mb-0">{{item.hour}}</p>
                    </div>
                    <div class="active-status" :class="item.status"></div>
                  </div>
                </td>
                <td>{{item.date}}</td>
                <td class="text-end">
                  <button class="btn " :class="item.class" type="button"
                    onclick="document.location='/users/cards'">{{item.location}}<i :class="item.icon"></i></button>

                </td>
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
          dashbord: state => state.dashbord.appointment,
        })
      },
     
}
</script>