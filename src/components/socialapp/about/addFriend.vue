<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5>Pepole You May Know</h5>
      </div>
      <div class="card-body avatar-showcase pt-0">
        <div class="pepole-knows">
          <ul>
            <li v-for="item in post" :key="item">
              <div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt=""
                  :src="getImgUrl(item.image)"><span class="d-block f-w-600">{{item.name}}</span>
                <button class="btn btn-primary btn-xs">Add Friend</button>
              </div>
            </li>

          </ul>
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
    data(){
      return {
            isActive: true,
      };
    },
    computed: {
      ...mapState({
         post: state => state.social.addfriend

      })
    },
    methods:{
      
       toggle() {
      this.isActive = !this.isActive
    },
    }
}
</script>