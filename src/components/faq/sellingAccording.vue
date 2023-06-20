<template>
      <div class="faq-title"><h5>Selling And Buying</h5></div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon9" :aria-expanded="isActive?'true':'false'" v-on:click="open()"><vue-feather type="help-circle"></vue-feather> WordPress Site Maintenance ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon9" aria-labelledby="collapseicon9" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                          <div class="card-body">
                            <p>{{ lorem}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon10" :aria-expanded="isActive1?'true':'false'" aria-controls="collapseicon2" v-on:click="open1()"><vue-feather type="help-circle"></vue-feather>Meta Tags in WordPress ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon10" data-parent="#accordionoc" :class="[isActive1 ? 'block' : 'none', 'content']" v-show="isActive1">
                          <div class="card-body">
                            <p>{{ lorem1}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon11" :aria-expanded="isActive2?'true':'false'" aria-controls="collapseicon2" v-on:click="open2()"><vue-feather type="help-circle"></vue-feather>Validating a Website ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon11" data-parent="#accordionoc" :class="[isActive2 ? 'block' : 'none', 'content']" v-show="isActive2">
                          <div class="card-body"> <p>{{ lorem2}}</p> </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon12" :aria-expanded="isActive3?'true':'false'" aria-controls="collapseicon2" v-on:click="open3()"><vue-feather type="help-circle"></vue-feather>Know Your Sources ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon12" data-parent="#accordionoc" :class="[isActive3 ? 'block' : 'none', 'content']" v-show="isActive3">
                          <div class="card-body"> <p>{{ lorem3}}</p> </div>
                        </div>
                      </div>
                <userAccounts/>
</template>
<script>
import userAccounts from "./userAccounts.vue"
export default {
  components:{
     userAccounts
  },
  data(){
    return{
       isActive: false,
       isActive1: false,
          isActive2: false,
          isActive3: false,
       lorem:"We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
       lorem1:"Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
       lorem2:"Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.",
       lorem3:"A book or set of books giving information on many subjects or on many aspects of one subject. Some are intended as an entry point into research for a general audience, some provide detailed information."
      }
  },
   methods: {
open() {
      this.isActive = !this.isActive
    },
      open1(){
       this.isActive1 = !this.isActive1
    },
      open2(){
       this.isActive2 = !this.isActive2
    },
     open3(){
       this.isActive3 = !this.isActive3
    }
   }
}
</script>