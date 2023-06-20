<template>
     <div class="col-xl-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Pagination sizing</h4>
                  </div>
                  <div class="card-body"> 
                    <nav class="m-b-25" aria-label="Page navigation example">
                      <ul class="pagination pagination-lg pagination-primary">
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
                      </ul>
                    </nav>
                    <!-- medium size pagination-->
                    <nav class="m-b-25" aria-label="Page navigation example">
                      <ul class="pagination pagination-md pagination-danger">
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
                      </ul>
                    </nav>
                    <!-- small size pagination-->
                    <nav aria-label="Page navigation example">
                      <ul class="pagination pagination-sm pagination-info">
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
      pagination:(state)=>state. pagination.size,    
    }),
   },
}
</script>