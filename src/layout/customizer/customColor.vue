<template>
      <div
    class="tab-pane fade"
 :class="{ 'active show': customizer == 'colors' }"
    id="c-pills-home"
  >
    <h6 class="">Unlimited Color</h6>
    <ul class="layout-grid unlimited-color-layout">
      <input id="ColorPicker1" type="color" value="#5c61f2" name="Background" />
      <input id="ColorPicker2" type="color" value="#eeb82f" name="Background" />
      <button
        type="button"
        class="color-apply-btn btn btn-primary color-apply-btn"
        @click="customizeColor"
      >
        Apply
      </button>
    </ul>
    <h6 class="">Mix Layout</h6>
    <ul class="layout-grid customizer-mix">
      <li
        class="color-layout"
        data-attr="dark-sidebar"
        :class="{ active: mixLayout == 'dark-sidebar' }"
        @click="customizeMixLayout('dark-sidebar')"
      >
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
      <li
        class="color-layout"
        data-attr="dark-only"
        :class="{ active: mixLayout == 'dark-only' }"
        @click="customizeMixLayout('dark-only')"
      >
        <div class="header bg-dark">
           <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="body">
          <ul>
            <li class="bg-dark sidebar"></li>
            <li class="bg-dark body"></li>
          </ul>
        </div>
      </li>
    </ul>
      </div>
</template>
<script>
  import { mapState } from 'vuex';
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
      customizeColor() {
        const primary = document.getElementById('ColorPicker1').value;
        const secondary = document.getElementById('ColorPicker2').value;
        this.$store.dispatch('layout/setColorScheme', { primary, secondary });
      },
      resetColor() {
        localStorage.setItem('primary_color', '#7366ff');
        localStorage.setItem('secondary_color', '#f73164');
        window.location.reload();
      },
      customizeMixLayout(val) {
        this.mixLayout = val;
        this.$store.dispatch('layout/setLayout', val);
      },
    },
  };
</script>
