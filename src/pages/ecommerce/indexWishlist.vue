<template>
     <Breadcrumbs main="Ecommerce" title="Wishlist" />
     <div class="container-fluid">
            <div class="row">
                <wishList/>
            </div>
     </div>
</template>
<script>
import wishList from "@/components/ecommerce/wishlist/wishList.vue"
export default {
    components:{
        wishList
    }
}
</script>