<template>
     <div class="col-xl-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Pagination alignment</h4>
                  </div>
                  <div class="card-body" v-for="item in pagination" :key="item">
                    <nav class="" :class="class1" aria-label="Page navigation example">
                      <ul class="pagination" :class="item.class">
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from "vuex";
export default {
 
    computed: {
    ...mapState({
      pagination:(state)=>state.pagination.alignment,    
    }),
   },
}
</script>