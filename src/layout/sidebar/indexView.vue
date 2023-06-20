<template>
    <div>
         <div class="logo-wrapper">
             <logoView/>
              <div class="back-btn" @click="toggle_sidebar">
                  <vue-feather type="grid"></vue-feather></div>
              <div class="toggle-sidebar icon-box-sidebar" @click="toggle_sidebar"> <vue-feather class="status_toggle middle sidebar-toggle" type="grid"></vue-feather></div>
            </div>
            <div class="logo-icon-wrapper"><router-link to="/">
                <div class="icon-box-sidebar" ><i data-feather="grid"> <vue-feather type="grid"></vue-feather></i></div></router-link></div>
                <navView/>
    </div>
</template>
<script>
 import { mapState } from 'vuex';
import logoView from "./logoView.vue"
import navView from "./navView.vue" 
export default {
    components:{
        logoView,
        navView
    },
    computed: {
      ...mapState({
        menuItems: (state) => state.menu.data,
        activeoverlay: (state) => state.menu.activeoverlay,
      }),
    },
    methods: {
      toggle_sidebar() {
        this.$store.dispatch('menu/opensidebar');
        this.$store.state.menu.activeoverlay = false;
      },
    },
}
</script>