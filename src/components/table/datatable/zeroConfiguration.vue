<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Zero Configuration</h4><span>DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code>$().DataTable();</code>.</span><span>Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.</span>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive theme-scrollbar data-table">
                   <form>
              <div class="mb-3 row justify-content-end">
                <label for="table-complete-search" class="col-xs-3 col-sm-auto col-form-label">Search:</label>
                <div class="col-xs-3 col-sm-auto">
                  <input id="table-complete-search" type="text" class="form-control" v-model="filterQuery" >
                </div>
              </div>
              <table class="table table-striped table-bordered">
                <thead>  
                  <tr>
                    <th scope="col" sortable="name" >Name</th>
                    <th scope="col" sortable="startDate" >Date</th>
                    <th scope="col" sortable="invoice" >Invoice No.</th>
                    <th scope="col" sortable="position" >Job Designation</th>
                    <th scope="col" sortable="credit"  >Credit/Debit</th>
                    <th scope="col" sortable="office" >Company Name</th>
                    <th scope="col" sortable="salary" >Priority</th>
                    <th scope="col" sortable="Budget" >Budget</th>
                    <th scope="col" >Action</th>
                  </tr>
                </thead>

                <tbody>
                <tr v-for="row in get_rows" :key="row">
                  <td scope="row">
                    <img class="img-40 me-2"  :src="getImgUrl(row.img)" alt="">{{row.name}}</td>
                  <td>{{row.startDate}}</td>
                  <td>{{row.invoice}}</td>
                  <td>{{row.position}}</td>
                  <td>
                  <span class="f-w-700 " :class="row.iconColor">
                      <i class="icofont" :class="row.iconClass"></i>
                      {{row.credit}}
                    </span>
                  </td>
                  <td> {{row.office}}</td>
                  <td><span class="badge" :class="row.ActionClass">{{row.salary}}</span></td>
                  <td>{{row.Budget}}</td>
                  <td>
                    <span>
                      <span @click='removeProduct(row)'>
                        <i class="icofont icofont-close-circled font-danger ps-2"></i>
                      </span>
                    </span>
                  </td>
                </tr>
                </tbody>
              </table>
                  <ul class="pagination m-3 justify-content-end pagination-primary" >
                     <li class="page-item"> <a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                     <li  class="page-item" v-for="i in num_pages()" :key="i" v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">
                       <a class="page-link">{{ i }}</a>
                     </li>
                    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </form>
          </div>
                  </div>
                </div>
              </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
import { mapState } from "vuex";
export default {
  mixins:[imageMixin],
    data(){
        return{
      elementsPerPage: 6,
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
      var filteredData = this.tableItems.filter((row) => {
        return (
          row.name.toLowerCase().includes(search.toLowerCase()) ||
          row.position.toLowerCase().includes(search.toLowerCase()) ||
          row.office.toLowerCase().includes(search.toLowerCase()) ||
          row.salary.toLowerCase().includes(search.toLowerCase())||
          row.Budget.toLowerCase().includes(search.toLowerCase())
        );
      });
      search=="" ? this.allData = this.tableItems :this.allData = filteredData
    },
  },
    computed: {
    ...mapState({
      tableItems:(state)=>state.datatable.items,    
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
    methods:{
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
    created() {
    this.allData = this.tableItems;
  },
}
</script>