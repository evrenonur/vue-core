<template>
  <div class="toggle-sidebar" @click="toggle_sidebar">
    <vue-feather class="status_toggle middle sidebar-toggle" type="grid"></vue-feather> 
  </div>
  <div class="logo-header-main">
     <router-link to="/">
     <img
        class="img-fluid for-light"
        src="@/assets/images/logo/logo2.png"
        alt="" /><img
        class="img-fluid for-dark"
        src="@/assets/images/logo/logo.png"
        alt=""
    /></router-link>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {   
    components: { 
    },
    data(){
        return{
        }
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
  };
</script>
