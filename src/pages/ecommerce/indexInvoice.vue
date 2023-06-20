<template>
     <Breadcrumbs main="ECommerce" title="Invoice" />
     <div class="container invoice">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body"> 
                    <div> 
                      <invoiceHeader/>
                      <invoiceProfile/>
                      <invoiceTable/>
                    </div>
                     <div class="col-sm-12 text-center mt-3">
                      <button class="btn btn btn-primary me-2" type="button" @click="printWindow()">Print</button>
                      <button class="btn btn-secondary" type="button">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     </div>
     
</template>
<script>
import invoiceHeader from "@/components/ecommerce/invoice/invoiceHeader.vue"
import invoiceProfile from "@/components/ecommerce/invoice/invoiceProfile.vue"
import invoiceTable from "@/components/ecommerce/invoice/invoiceTable.vue"
export default {
    components:{
        invoiceHeader,
        invoiceProfile,
        invoiceTable
    },
     methods: {
      printWindow() {
        window.print();
      }
    }
}
</script>