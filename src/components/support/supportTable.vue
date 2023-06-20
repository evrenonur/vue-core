<template>
   
    <div class="table-responsive support-table data-table theme-scrollbar">
               <form>
                  <div class="mb-3 row justify-content-end">
                   <label for="table-complete-search" class="col-xs-3 col-sm-auto col-form-label">Search:</label>
                   <div class="col-xs-3 col-sm-auto">
                     <input id="table-complete-search" type="text" class="form-control" name="searchTerm"  v-model="filterQuery">
                   </div>
                 </div>
                         <table class="table table-striped table-bordered" id="basic-6">
                           <thead>
                             <tr>
                              <th scope="col" sortable="name" >Name</th>
                              <th scope="col" sortable="position" >Position</th>
                              <th scope="col" sortable="salary" >Salary</th>
                              <th scope="col" sortable="office" >Office</th>
                              <th scope="col" sortable="skill" >Skill</th>
                              <th scope="col" sortable="extn" >Extend</th>
                              <th scope="col" sortable="email" >Email</th>
                              <th scope="col" sortable="exp" >Experience</th>
                              <th scope="col">Action</th>
                             </tr>
                           </thead>
                           <tbody>
                               <tr v-for="row in get_rows" :key="row">
                               <td>
                                 <div class="d-flex"><img class="rounded-circle img-30 me-3"  :src="getImgUrl(row.img)" alt="Generic placeholder image">
                                   <div class="flex-grow-1 align-self-center">
                                     <div>{{row.name}}</div>
                                   </div>
                                 </div>
                               </td>
                               <td>{{row.position}}</td>
                               <td>{{row.salary}}</td>
                               <td>{{row.office}}</td>
                               <td>
                                 <div class="progress-showcase">
                                   <div class="progress sm-progress-bar">
                                     <div class="progress-bar" :class="row.skill" role="progressbar" :style="{'width':row.progress}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                                 </div>
                               </td>
                               <td>{{row.extn}}</td>
                               <td>{{row.email}}</td>
                               <td>{{row.exp}}</td>
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
                          <ul class="pagination pagination-primary m-3 justify-content-end" >
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
         var filteredData = this.supportItems.filter((row) => {
           return (
             row.name.toLowerCase().includes(search.toLowerCase()) ||
             row.position.toLowerCase().includes(search.toLowerCase()) ||
             row.office.toLowerCase().includes(search.toLowerCase()) ||
             row.exp.toLowerCase().includes(search.toLowerCase())||
             row.salary.toLowerCase().includes(search.toLowerCase())||
             row.email.toLowerCase().includes(search.toLowerCase())
           );
         });
         search=="" ? this.allData = this.supportItems :this.allData = filteredData
       },
     },
       computed: {
       ...mapState({
         supportItems:(state)=>state.support.items,    
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
         this.supportItems.splice(index,1)
       },
        num_pages() {
         return Math.ceil(this.allData.length / this.elementsPerPage);
       },
       change_page(page) {
         this.currentPage = page;
       },
       },
       created() {
       this.allData = this.supportItems;
     },
   }
   </script>