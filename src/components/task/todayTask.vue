<template>
     <div class="card mb-0">
                              <div class="card-header d-flex">
                                <h6 class="mb-0">Today's Tasks</h6><a href="javascript:void(0)" @click="printWindow()"><vue-feather class="me-2" type="printer" ></vue-feather>Print</a>
                              </div>
                              <div class="card-body">
                                <div class="details-bookmark text-center">
                                  <div class="row" id="favouriteData"></div>
                                  <div class="no-favourite"><span>No task due today.</span></div>
                                </div>
                              </div>
                            </div>
</template>
<script>
export default {
    methods:{
         printWindow() {
        window.print();
      }
    }
}
</script>