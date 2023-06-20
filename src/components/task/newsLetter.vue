<template>
    <div class="card mb-0">
                              <div class="card-header d-flex">
                                <h6 class="mb-0">Newsletter</h6><a href="javascript:void(0)" @click="printWindow()"><vue-feather class="me-2" type="printer" ></vue-feather>Print</a>
                              </div>
                              <div class="card-body">
                                <div class="details-bookmark text-center"><span>No tasks found.</span></div>
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