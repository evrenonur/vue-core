<template>
  <div class="checkout">
    <Breadcrumbs main="Ecommerce" title="Checkout" />
    <div class="container-fluid">
      <div class="card">
        <div class="card-header pb-0">
          <h4>Billing Details</h4>
        </div>
        <div class="card-body">
          <div class="row">
              <checkoutForm/>
              <checkoutDetail/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import checkoutForm from "@/components/ecommerce/checkout/checkoutForm.vue"
import checkoutDetail from "@/components/ecommerce/checkout/checkoutDetail.vue"
export default {
    components:{
        checkoutForm,
        checkoutDetail
    }
}
</script>