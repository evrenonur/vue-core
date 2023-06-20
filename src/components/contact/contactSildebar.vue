<template>
      <div class="col-xl-3 xl-30 box-col-30">
                  <div class="md-sidebar email-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"  @click="collapseFilter()">contact filter    </a>
                    <div class="md-sidebar-aside email-left-aside" :class="filtered?'open':''">
                      <div class="card">
                        <div class="card-body">
                          <div class="email-app-sidebar left-bookmark">
                            <div class="d-flex">
                              <div class="flex-shrink-0"><img class="me-3 rounded-circle" src="@/assets/images/user/user.png" alt=""></div>
                              <div class="flex-grow-1"><router-link to="/users/profile">
                                  <h6 class="f-w-700">MARK JENCO</h6></router-link>
                                <p>Markjecno@gmail.com</p>
                              </div>
                            </div>
                             <ul class="nav main-menu contact-options" role="tablist">
                              <li class="nav-item">
                                <button class="btn-primary badge-light btn-block btn-mail w-100" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><vue-feather class="me-2" type="users"></vue-feather> New Contacts</button>
                                <newContacts/>
                              </li>
                              <li class="nav-item"><span class="main-title"> Views</span></li>
                              <li><a id="pills-personal-tab" data-bs-toggle="pill" href="#pills-personal" role="tab" aria-controls="pills-personal" aria-selected="true"><span class="title" v-on:click="say('pills_personal')"> Personal</span></a></li>
                              <li>
                                <button class="btn btn-category" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1"><span class="title"> + Add Category</span></button>
                                <addCategory/>
                              </li>
                              <li><a class="show" id="pills-organization-tab" data-bs-toggle="pill" href="#pills-organization" role="tab" aria-controls="pills-organization" aria-selected="false"><span class="title" v-on:click="say('pills_organization')"> Organization</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title">Follow up</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title">Favorites</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title">Ideas</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title">Important</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title">Business</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title">Holidays</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <div class="col-xl-9 col-md-12 box-col-8 xl-70 box-col-70">
                  <div class="email-right-aside bookmark-tabcontent contacts-tabs">
                    <div class="card email-body radius-left">
                      <div class="ps-0">
                        <div class="tab-content">
                             <div class="tab-pane fade " id="pills-personal" v-bind:class="(activeclass==='pills_personal') ? 'active show': ''" role="tabpanel" aria-labelledby="pills-personal-tab">
                                 <personalView/>
                             </div>
                              <div class="fade tab-pane" v-bind:class="(activeclass==='pills_organization') ? 'active show': ''" id="pills-organization" role="tabpanel" aria-labelledby="pills-organization">
                                  <organizationView/>
                              </div>
                               <printView/>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
</template>
<script>
import personalView from "./personalView.vue"
import addCategory from "./addCategory.vue"
import newContacts from "./newContacts.vue"
import printView from "./printView.vue"
import organizationView from "./organizationView.vue"
export default {
    components:{
        newContacts,
        addCategory,
        personalView,
        printView,
        organizationView
    },
       data(){
     return{
           activeclass : 'pills_personal',
             filtered: false,
     }
    },
    methods:{
         say: function (message) {
        this.activeclass = message;
      },
        collapseFilter() {
        this.filtered = !this.filtered;
      },
    }
}
</script>