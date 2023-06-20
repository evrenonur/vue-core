<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h4>Basic Table with Border Bottom Color</h4><span>Use a class<code>.table</code> to any table, and
          <code>.border-bottom-*</code> class for Border bottom color</span>
      </div>
      <div class="table-responsive theme-scrollbar">
        <table class="table">
          <thead>
            <tr class="border-bottom-primary">
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Designation</th>
              <th scope="col">Company</th>
              <th scope="col">Language</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="data.borderColor" v-for="data in bootstraplist" :key="data">
              <th scope="row">{{data.id}}</th>
              <td><img :src="getImgUrl(data.img)" alt="" class="img-30 me-2">{{data.firstName}}</td>
              <td>{{data.lastName}}</td>
              <td>{{data.userName}}</td>
              <td>{{data.role}}</td>
              <td>{{data.company}}</td>
              <td>
                <div class="badge " :class="data.badgeClass">
                  {{data.language}}
                </div>
              </td>
              <td>{{data.country}}</td>
            </tr>
          </tbody>
        </table>
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
          bootstraplist: state => state.bootstrap.tableData1,
        })
      },
      
}
</script>

