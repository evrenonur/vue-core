<template>
    <Breadcrumbs main="Ecommerce" title="Add Product" />
     <div class="container-fluid add-product">
            <div class="row"> 
                <productDescription/>
                <productImages/>
            </div>
     </div>
</template>
<script>
import productDescription from "@/components/ecommerce/addproduct/productDescription.vue"
import productImages from "@/components/ecommerce/addproduct/productImages.vue"
export default {
    components:{
        productDescription,
        productImages
    }
}
</script>