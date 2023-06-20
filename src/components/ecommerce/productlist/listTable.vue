<template>
      <div class="table-responsive theme-scrollbar product-table">
              <form class="dataTables_wrapper no-footer">
              <div class="mb-3 row justify-content-start">
               <label for="table-complete-search" class="col-xs-3 col-sm-auto col-form-label">Search:</label>
               <div class="col-xs-3 col-sm-auto">
                 <input id="table-complete-search" type="text" class="form-control" name="searchTerm" v-model="filterQuery">
               </div>
             </div>
             <table class="display table-striped table-hover table-bordered table" id="basic-1">
               <thead>
                 <tr>
                   <th class="sorting_asc" scope="col" >Image</th>
                   <th class="sorting_asc" scope="col" >Details</th>
                   <th class="sorting_asc" scope="col" >Amount</th>
                   <th class="sorting_asc" scope="col" >Stock</th>
                   <th class="sorting_asc" scope="col" >Start date</th>
                   <th class="sorting_asc" scope="col" >Action</th>
                 </tr>
               </thead>
               <tbody>
                  <tr class="odd" v-for="row in get_rows" :key="row">
                    <td class="sorting_1"><router-link to="/ecommerce/details/1"><img   :src="getImgUrl(row.productImg)" :alt="row.productName"></router-link></td>
                    <td class="sorting_1"><router-link to="/ecommerce/details/1"> <h6>{{row.productName}}</h6></router-link><span>{{row.productSubName}}</span></td>
                    <td class="sorting_1">${{row.amount}}</td>
                    <td class="sorting_1" :Class="row.status">{{row.stock}}</td>
                    <td class="sorting_1">{{row.startData}}</td>
                    <td> <button class="btn btn-danger btn-xs me-2" type="button" data-original-title="btn btn-danger btn-xs" @click='removeProduct(row)' title="">Delete</button></td>
                  </tr>
               </tbody>
             </table>
             <ul class="pagination pagination-primary p-2 justify-content-end" >
                     <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                     <li  class="page-item" v-for="i in num_pages()" :key="i" v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">
                       <a class="page-link">{{ i }}</a>
                     </li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
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
      var filteredData = this.productlist.filter((row) => {
        return (
          row.productName.toLowerCase().includes(search.toLowerCase()) ||
          row.productSubName.toLowerCase().includes(search.toLowerCase()) ||
          row.startData.toLowerCase().includes(search.toLowerCase())
        );
      });
      search=="" ? this.allData = this.productlist :this.allData = filteredData
    },
  },
    computed: {
    ...mapState({
      productlist:(state)=>state.productlist.list,    
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
    this.allData = this.productlist;
  },
   methods:{
      
    removeProduct: function (index) {
     this.productlist.splice(index,1)
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