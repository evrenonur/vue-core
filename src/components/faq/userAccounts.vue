<template>
     <div class="faq-title"> <h5>User Accounts</h5></div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon13" :aria-expanded="isActive?'true':'false'" v-on:click="open()" ><vue-feather type="help-circle" ></vue-feather>Integrating WordPress with Your Website ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon13" aria-labelledby="collapseicon13" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                          <div class="card-body">  <p>{{lorem}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon14" :aria-expanded="isActive1?'true':'false'" aria-controls="collapseicon2" v-on:click="open1()"><vue-feather type="help-circle"></vue-feather>WordPress Site Maintenance ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon14" data-parent="#accordionoc" :class="[isActive1 ? 'block' : 'none', 'content']" v-show="isActive1">
                          <div class="card-body"><p>{{lorem1}}</p> </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon16" :aria-expanded="isActive2?'true':'false'" aria-controls="collapseicon2" v-on:click="open2()"><vue-feather type="help-circle"></vue-feather> WordPress in Your Language ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon16" data-parent="#accordionoc" :class="[isActive2 ? 'block' : 'none', 'content']" v-show="isActive2">
                          <div class="card-body"><p>{{lorem2}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon17" :aria-expanded="isActive3?'true':'false'" aria-controls="collapseicon2" v-on:click="open3()"><vue-feather type="help-circle"></vue-feather>  Validating a Website ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon17" data-parent="#accordionoc" :class="[isActive3 ? 'block' : 'none', 'content']" v-show="isActive3">
                          <div class="card-body"><p>{{lorem3}}</p> </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon18" :aria-expanded="isActive4?'true':'false'" aria-controls="collapseicon2" v-on:click="open4()"><vue-feather type="help-circle"></vue-feather>Meta Tags in WordPress ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon18" data-parent="#accordionoc" :class="[isActive4 ? 'block' : 'none', 'content']" v-show="isActive4">
                          <div class="card-body"><p>{{lorem4}}</p>  </div>
                        </div>
                      </div>
</template>
<script>
export default {
  components:{  
  },
  data(){
    return{
       isActive: false,
       isActive1: false,
          isActive2: false,
          isActive3: false,
           isActive4: false,
       lorem:"How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
       lorem1:"We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
       lorem2:"As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
       lorem3:"Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.",
       lorem4:"Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress."
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
    },
     open4(){
       this.isActive4 = !this.isActive4
    }
   }
}
</script>