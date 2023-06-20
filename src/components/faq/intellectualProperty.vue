<template>
     <div class="faq-title"> 
         <h5>Intellectual Property</h5> 
         </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link " data-bs-toggle="collapse" data-bs-target="#collapseicon5" :aria-expanded="isActive?'true':'false'"  v-on:click="open()"><vue-feather type="help-circle"></vue-feather> WordPress Site Maintenance ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon5" aria-labelledby="collapseicon5" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                          <div class="card-body"><p>{{lorem}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link " data-bs-toggle="collapse" data-bs-target="#collapseicon7" :aria-expanded="isActive1?'true':'false'" aria-controls="collapseicon7" v-on:click="open1()"><vue-feather type="help-circle"></vue-feather>  WordPress in Your Language ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon7" data-parent="#accordionoc" :class="[isActive1 ? 'block' : 'none', 'content']" v-show="isActive1">
                          <div class="card-body"><p>{{lorem1}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link " data-bs-toggle="collapse" data-bs-target="#collapseicon8" :aria-expanded="isActive2?'true':'false'" aria-controls="collapseicon8" v-on:click="open2()"><vue-feather type="help-circle"></vue-feather>Integrating WordPress with Your Website ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon8" data-parent="#accordionoc" :class="[isActive2 ? 'block' : 'none', 'content']" v-show="isActive2">
                          <div class="card-body"><p>{{lorem2}}</p>
                          </div>
                        </div>
                      </div>
</template>
<script>
export default {
  data(){
    return{
        isActive: false,
         isActive1: false,
          isActive2: false,
       lorem:"We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
       lorem1:"As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
       lorem2:"How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks."
      }
  },
  methods: {
     open(){
       this.isActive = !this.isActive
    },
      open1(){
       this.isActive1 = !this.isActive1
    },
      open2(){
       this.isActive2 = !this.isActive2
    }
}
}
</script>