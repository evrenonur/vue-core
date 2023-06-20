<template>
                                        <div class="row g-2">
                                          <div class="mt-0 mb-3 col-md-12">
                                            <label>Name</label>
                                            <div class="row">
                                              <div class="col-sm-6">
                                                <input class="form-control" id="first_name" type="text" required="" placeholder="First Name" value="first_name">
                                              </div>
                                              <div class="col-sm-6">   
                                                <input class="form-control" id="last_name" type="text" required="" placeholder="Last Name" value="last_name">
                                              </div>
                                            </div>
                                          </div>
                                          <div class="mt-0 mb-3 col-md-12">
                                            <label>Email Address</label>
                                            <input class="form-control" id="email_add" type="text" required="" autocomplete="off">
                                          </div>
                                          <div class="mt-0 mb-3 col-md-12">
                                            <label>Phone</label>
                                            <div class="row">
                                              <div class="col-sm-6">
                                                <input class="form-control" id="mobile_num" type="text" required="" autocomplete="off">
                                              </div>
                                              <div class="col-sm-6">
                                                <select class="form-control">
                                                  <option>Mobile</option>
                                                  <option>Work</option>
                                                  <option>Others</option>
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row g-2 more-data" :style="filter?'':'display: none;'">
                                           <div class="mt-0 mb-3 col-md-12">
                                            <label>URLS</label>
                                            <div class="row">
                                              <div class="col-lg-6 col-sm-6">
                                                <input class="form-control" id="url_add" type="text" required="">
                                              </div>
                                              <div class="col-lg-4 col-sm-6">   
                                                <multiselect  v-model="value" :options="options1" :searchable="false" group-values="libs"   group-label="language" :group-select="true"  :close-on-select="false" track-by="name" label="name" placeholder="Pick a value"></multiselect>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="mt-0 mb-3 col-md-12">
                                            <label>Personal</label>
                                            <div class="d-block">
                                              <label class="me-3" for="edo-ani">
                                                <input class="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked=""><span>Male</span>
                                              </label>
                                              <label for="edo-ani1">
                                                <input class="radio_animated" id="edo-ani1" type="radio" name="rdo-ani"><span>Female</span>
                                              </label>
                                            </div>
                                          </div>
                                          
                                         <moreData/>
                                        </div><a class="ps-0 edit-information f-w-600" :style="filter?'display: none;':''" @click="collapse()" >Edit more information</a>
</template>
<script>
import moreData from "./moreData.vue"
export default {
  components:{
    moreData
  },
  data(){
    return{
      filter:false,
        options1: [
          { code: 1, name: 'Personal web address' },
          { code: 2, name: 'Company web address' },
          { code: 3, name: 'Fabebook URL' },
          { code: 4, name: 'Twitter URL' },
        ],
         value: [{ name: 'Personal web address', category: 'Front-end' },]
    }
  },
  methods:{
      collapse(){
         this.filter = !this.filter;
      },
  }
}
</script>
