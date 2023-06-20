<template>
    <Breadcrumbs main="E-Commerce" title="Product List"/>
      <div class="col-sm-12">
       <div class="card">
         <div class="card-header pb-0">
          <h4>Individual column searching (text inputs) </h4><span>The searching functionality provided by DataTables is useful for 
              quickly search through the information in the table - however the search is global, and you may wish to present controls 
              that search on specific columns.</span>
          </div>
            <div class="card-body">
                <listTable/>
            </div>
       </div>
      </div>
</template>
<script>
import listTable from "@/components/ecommerce/productlist/listTable.vue"
export default {
    components:{
        listTable
    }
}
</script>