<template>
      <div class="col-lg-12 ">
                  <div class="header-faq">
                    <h4 class="mb-0">Quick Questions are answered</h4>
                  </div>
                  <div class="row default-according style-1 faq-accordion" id="accordionoc">
                    <div class="col-xl-8 xl-60 col-lg-6 col-md-7 box-col-60">
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" :aria-expanded="show3?'true':'false'"  aria-controls="collapseicon"  v-on:click="open3()"><vue-feather type="help-circle"></vue-feather> Integrating WordPress with Your Website?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon"  data-bs-parent="#accordionoc" :class="[show3 ? 'block' : 'none', 'content']" v-show="show3">
                          <div class="card-body"><p>{{lorem}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon2" :aria-expanded="show2?'true':'false'" aria-controls="collapseicon2" @click="open2()"><vue-feather type="help-circle"></vue-feather> WordPress Site Maintenance ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon2" data-parent="#accordionoc" :class="[ show2 ? 'block' : 'none', 'content']" v-show="show2">
                          <div class="card-body"><p>{{lorem1}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon3" :aria-expanded="show?'true':'false'" aria-controls="collapseicon3" @click="open()"><vue-feather type="help-circle"></vue-feather>Meta Tags in WordPress ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon3" data-parent="#accordionoc" :class="[show ? 'block' : 'none', 'content']" v-show="show">
                          <div class="card-body"><p>{{lorem2}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon4" :aria-expanded="show1?'true':'false'" aria-controls="collapseicon4" @click="open1()"><vue-feather type="help-circle"></vue-feather>   WordPress in Your Language ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon4" data-parent="#accordionoc" :class="[show1 ? 'block' : 'none', 'content']" v-show="show1">
                          <div class="card-body"><p>{{lorem3}}</p></div>
                        </div>
                      </div>
                     <intellectualProperty/>
                   <sellingAccording/>
                    </div>
                   <navigationView/>
                  </div>
      </div>
</template>
<script>
import intellectualProperty from "./intellectualProperty.vue"
import sellingAccording from "./sellingAccording.vue"
import navigationView from "./navigationView.vue"
export default {
  components:{
      sellingAccording,
      navigationView,
      intellectualProperty
      },
  data(){
    return{
       show :false,
       show1 :false, 
      show3: false,
       show2:false,
       lorem:"How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
       lorem1:"We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
       lorem2:"Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
       lorem3:"As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process."
      }
  },
  methods: {
open3() {
      this.show3 = !this.show3
    },
    open(){
        this.show = !this.show
      },
       open1(){
        this.show1= !this.show1
      },
         open2(){
        this.show2= !this.show2
      },
}
}
</script>