<template>
     <div>
                        <div class="table-responsive theme-scrollbar invoice-table" id="table">
                          <table class="table table-bordered table-striped">
                            <tbody>
                              <tr>
                                <td class="item">
                                  <h6 class="py-2 mb-0">Item Description</h6>
                                </td>
                                <td class="Hours">
                                  <h6 class="py-2 mb-0">Hours</h6>
                                </td>
                                <td class="Rate">
                                  <h6 class="py-2 mb-0">Rate</h6>
                                </td>
                                <td class="subtotal">
                                  <h6 class="py-2 mb-0">Sub-total</h6>
                                </td>
                              </tr>
                              <tr v-for="items in invoice" :key="items">
                                <td>
                                  <label>{{items.title}}</label>
                                  <p class="m-0">{{items.desc}}</p>
                                </td>
                                <td>
                                  <p class="itemtext digits mb-0">{{ items.hours }}</p>
                                </td>
                                <td>
                                  <p class="itemtext digits mb-0">$75</p>
                                </td>
                                <td>
                                  <p class="itemtext digits mb-0">{{ items.Subtotal }}</p>
                                </td>
                              </tr>
                             
                              <tr>
                                <td>
                                  <p class="itemtext"></p>
                                </td>
                                <td>
                                  <p class="m-0">HST</p>
                                </td>
                                <td>
                                  <p class="m-0 digits">13%</p>
                                </td>
                                <td>
                                  <p class="m-0 digits">$419.25</p>
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td class="Rate">
                                  <h6 class="mb-0 py-2">Total</h6>
                                </td>
                                <td class="payment digits">
                                  <h6 class="mb-0 py-2">$3,644.25</h6>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- End Table-->
                        <div class="row mt-3">
                          <div class="col-md-8">
                            <div>
                              <p class="legal mb-0"><strong>Thank you for your business!</strong>Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.</p>
                            </div>
                          </div>
                        
                        </div>
                      </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  
     computed: {
    ...mapState({
      invoice:(state)=>state.ecommerce.invoice,    
    }),
   },
    
}
</script>