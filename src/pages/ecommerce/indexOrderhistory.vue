<template>
     <Breadcrumbs main="Ecommerce" title="Recent Orders"/>
 <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Order history</h4>
                  </div>
                  <div class="card-body">
                      <orderTable/>
                  </div>
                </div>
              </div>
            </div>
 </div>
</template>
<script>
import orderTable from "@/components/ecommerce/order/orderTable.vue"
export default {
    components:{
        orderTable
    }
}
</script>