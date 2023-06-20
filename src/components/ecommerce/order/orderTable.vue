<template>
     <div class="order-history table-responsive theme-scrollbar">
            <form>
              <div class="mb-3 row justify-content-end">
                <label for="table-complete-search" class="col-xs-3 col-sm-auto col-form-label">Search:</label>
                <div class="col-xs-3 col-sm-auto">
                  <input id="table-complete-search" type="text" class="form-control" v-model="filterQuery">
                </div>
              </div>
              <table class="table  display" id="basic-1">
                <thead>
                  <tr>
                    <th scope="col" sortable="img" >Product</th>
                    <th scope="col" sortable="product" >Product name</th>
                    <th scope="col" sortable="size" >Size</th>
                    <th scope="col" sortable="color" >Color</th>
                    <th scope="col" sortable="articleNumber" >Article number</th>
                    <th scope="col" sortable="units" >Qty</th>
                    <th scope="col" sortable="price" >Price</th>
                    <th scope="col" ><i class="fa fa-angle-down"></i></th>
                  </tr>
                </thead>
                <tbody>
                   <tr v-for="row in get_rows" :key="row">
                     <td><router-link to="/ecommerce/details/1"><img class="img-fluid img-30"  :src="getImgUrl(row.img)" :alt="row.product"></router-link></td>
                     <td>
                       <div class="product-name"><a href="#">{{row.product}}</a>
                         <div class="order-process"><span class="order-process-circle" :class="getStatusClass(row.status)"></span>{{row.status}}</div>
                       </div>
                     </td>
                     <td>{{row.size}}</td>
                     <td>{{row.color}}</td>
                     <td>{{row.articleNumber}}</td>
                     <td>{{row.units}}</td>
                     <td>${{row.price}}</td>
                     <td><vue-feather type="more-vertical"></vue-feather></td> 
                   </tr>
                </tbody>
              </table>
              <ul class="pagination pagination-primary mt-2 justify-content-end" >
                     <li class="page-item"> <a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                     <li  class="page-item" v-for="i in num_pages()" :key="i" v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">
                       <a class="page-link">{{ i }}</a>
                     </li>
                    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </form>
         </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from "vuex";
export default {
  mixins:[imageMixin],
    data(){
        return{
      elementsPerPage: 10,
      currentPage: 1,
      ascending: false,
      sortColumn: "",
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filterQuery: "",
      allData: [],
        }
    },
     watch: {
    filterQuery(search) {
      var filteredData = this.orderItems.filter((row) => {
        return (
          row.product.toLowerCase().includes(search.toLowerCase()) ||
          row.size.toLowerCase().includes(search.toLowerCase()) ||
          row.color.toLowerCase().includes(search.toLowerCase()) 
        );
      });
      search=="" ? this.allData = this.orderItems :this.allData = filteredData
    },
  },
    computed: {
    ...mapState({
      orderItems:(state)=>state.order.orderHistory,    
    }),
     columns() {
      if (this.allData.length == 0) {
        return [];
      }
      return Object.keys(this.allData[0]);
    },
    get_rows() {
      var start = (this.currentPage - 1) * this.elementsPerPage;
      var end = start + this.elementsPerPage;
      return this.allData.slice(start, end);
    },
    },
    created() {
    this.allData = this.orderItems;
  },
   methods:{
        getStatusClass(status){
         if(status==='Shipped'){
           return 'shipped-order'
         }else if(status=='Processing')
         return ''
         else if(status ==='Cancelled')
         return 'cancel-order'
         else return ''
       },
     removeProduct: function (index) {
      this.tableItems.splice(index,1)
    },
     num_pages() {
      return Math.ceil(this.allData.length / this.elementsPerPage);
    },
    change_page(page) {
      this.currentPage = page;
    },
    },
}
</script>