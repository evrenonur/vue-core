<template>
  <div class="header-wrapper row m-0">
    <div class="header-logo-wrapper col-auto p-0">
      <sidebar/>
    </div>
    <div class="left-header col horizontal-wrapper ps-0">
      <leftMenu/>
    </div>
    <div class="nav-right col-6 pull-right right-header p-0">
      <ul class="nav-menus">

        <li class="serchinput">

        </li>
        <li>
          <modeView/>
        </li>

        <li class="profile-nav onhover-dropdown">
          <profileView/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import searchInput from "./searchInput.vue"
import sidebar from "./sidebarView.vue"
import leftMenu from "./leftMenu.vue"
import searchView from "./searchView.vue"
import modeView from "./modeView.vue"
import messagesView from "./messagesView.vue"
import languageView from "./languageView.vue"
import notificationView from "./notificationView.vue"
import maximizeView from "./maximizeView.vue"
import profileView from "./profileView.vue"

export default {
  components: {
    sidebar,
    leftMenu,
    modeView,
    maximizeView,
    profileView,
    searchInput
  },
  data() {
    return {
      filtered: false,
    };
  },
  methods: {
    collapseFilter() {
      this.filtered = !this.filtered;
    },
  }
}
</script>
