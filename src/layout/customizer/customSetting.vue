<template>
  <div class="tab-pane fade " :class="{ 'active show': customizer == 'settings' }" id="c-pills-home" >
    <h6>Layout Type</h6>
    <ul class="main-layout layout-grid">
      <li data-attr="ltr" :class="{ active: layoutType == 'ltr' }" @click="customizeLayoutType('ltr')" >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-light sidebar"></li>
            <li class="bg-light body">
              <span class="badge badge-primary">LTR</span>
            </li>
          </ul>
        </div>
      </li>
      <li data-attr="rtl" :class="{ active: layoutType == 'rtl' }" @click="customizeLayoutType('rtl')" >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-light body">
              <span class="badge badge-primary">RTL</span>
            </li>
            <li class="bg-light sidebar"></li>
          </ul>
        </div>
      </li>
      <li v-bind:style="boxlayout ? '' : 'display: none;'" data-attr="box" :class="{ active: layoutType == 'box-layout' }"  @click="customizeLayoutType('box-layout')" class="box-layout px-3">
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-light sidebar"></li>
            <li class="bg-light body">
              <span class="badge badge-primary">Box</span>
            </li>
          </ul>
        </div>
      </li>
    </ul> 
   <h6>SIDEBAR TYPE</h6>
 <ul class="sidebar-type layout-grid">
     <li data-attr="normal-sidebar" @click="handlePageLayputs( 'horizontal-wrapper ','Horizontal')"  >
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body"> <ul> <li class="bg-dark sidebar "></li><li class="bg-light body"></li></ul> </div>
     </li>
     <li data-attr="compact-sidebar" @click="handlePageLayputs('compact-wrapper', 'default')">
        <div class="header bg-light">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-dark sidebar"></li>
            <li class="bg-light body"></li>
          </ul>
        </div>
      </li>
   </ul>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
 import { layoutClasses } from '../../constants/layout';
  export default {
    name: 'CustomSetting',
    data () {
      return {
        layoutType: 'ltr',
        mixLayout: 'default',
      };
    },
    computed: {
      ...mapState({
        customizer: (state) => state.menu.customizer,
        layout: (state) => state.layout.layout,
        data: (state) => JSON.stringify(state.layout.layout),
        boxlayout: (state) => state.layout.boxlayout,
        menuItems: state => state.menu.data,
        togglesidebar: (state) => state.menu.togglesidebar,
      }),
    },
    methods: {
      customizeLayoutType(val) {
        this.$store.dispatch('layout/setLayoutType', val);
        this.layoutType = val;
      },
      customizeSidebarSetting(val) {
        this.layout.settings.sidebar_setting = val;
      },
      customizeMixLayout(val) {
        this.mixLayout = val;
        this.$store.dispatch('layout/setLayout', val);
      },
       handlePageLayputs(val,layout) {
        const layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === layout);
        this.$store.dispatch('layout/setCustomizeSidebarType', {type:layout,layout:layoutobj[layout]});
        this.layout.settings.layout = layout; 
        this.$router.push({ query:{ layout: layout } }).catch(err => err);
        if(layoutobj[layout].split(' ').includes('compact-sidebar')) {
          this.$store.state.menu.activeoverlay = true;
          document.getElementById('sidebar-menu');
        } else {
          this.$store.state.menu.activeoverlay = false;
          document.getElementById('sidebar-menu');
        } 
      },
    },
  };
</script>
