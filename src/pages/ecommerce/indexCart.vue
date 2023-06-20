<template>
     <Breadcrumbs main="Ecommerce" title="Cart" />
      <div class="container-fluid">
            <div class="row">
                <productCart/>
            </div>
      </div>
</template>
<script>
import productCart from "@/components/ecommerce/cart/productCart.vue"
export default {
    components:{
        productCart
    }
}
</script>