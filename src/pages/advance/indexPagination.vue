<template>
     <Breadcrumbs main="Bonus Ui" title="Pagination"/>
      <div class="container-fluid pagination-page">
            <div class="row">
                <simplePagination/>
                <iconPagination/>
                <paginationDisabled/>
                <paginationAlignment/>
                <paginationSizing/>
                <paginationColor/>
            </div>
      </div>
</template>
<script>
import simplePagination from "@/components/advance/pagination/simplePagination.vue"
import iconPagination from "@/components/advance/pagination/iconPagination.vue"
import paginationDisabled from "@/components/advance/pagination/paginationDisabled.vue"
import paginationAlignment from "@/components/advance/pagination/paginationAlignment.vue"
import paginationSizing from "@/components/advance/pagination/paginationSizing.vue"
import paginationColor from "@/components/advance/pagination/paginationColor.vue"
export default {
    components:{
        simplePagination,
        iconPagination,
        paginationAlignment,
        paginationDisabled,
        paginationColor,
        paginationSizing
    }
}
</script>