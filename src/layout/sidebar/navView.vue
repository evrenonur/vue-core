<template>
  <nav class="sidebar-main">
    <li class="left-arrow"
      :class="{ 'disabled': layout.settings.layout_type == 'rtl' ? hideLeftArrowRTL : hideLeftArrow }"
      @click="(layoutobject.split(' ').includes('horizontal-wrapper') && layout.settings.layout_type === 'rtl') ? scrollToLeftRTL() : scrollToLeft()">
      <vue-feather type="arrow-left"></vue-feather>
    </li>
    <navMenu />
    <li class="right-arrow"
      :class="{ 'disabled': layout.settings.layout_type == 'rtl' ? hideRightArrowRTL : hideRightArrow }"
      @click="(layoutobject == 'horizontal_sidebar' && layout.settings.layout_type == 'rtl') ? scrollToRightRTL() : scrollToRight()">
      <vue-feather type="arrow-right"></vue-feather>
    </li>
  </nav>
</template>
<script>
import { mapState } from 'vuex';
import { layoutClasses } from '../../constants/layout';
import navMenu from "./navMenu.vue"
export default {
  components: { navMenu },
  data() {
    return {
      layoutobj: {},
      isVisibe: true
    };
  },
  computed: {
    ...mapState({
      layout: state => state.layout.layout,
      hideRightArrowRTL: (state) => state.menu.hideRightArrowRTL,
      hideLeftArrowRTL: (state) => state.menu.hideLeftArrowRTL,
      hideRightArrow: (state) => state.menu.hideRightArrow,
      hideLeftArrow: (state) => state.menu.hideLeftArrow,
      width: (state) => state.menu.width,
      height: (state) => state.menu.height,
      margin: (state) => state.menu.margin,
      menuWidth: (state) => state.menu.menuWidth,
    }),
    layoutobject: {
      get: function () {
        return JSON.parse(JSON.stringify(layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout)))[this.layout.settings.layout];
      },
      set: function () {
        this.layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);
        this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[this.layout.settings.layout];
        return this.layoutobj;
      }
    }
  },
  watch: {
    layoutobject() {
      setTimeout(() => {
        const elmnt = document.getElementById('myDIV');
        this.$store.state.menu.menuWidth = elmnt.offsetWidth;
      }, 500);
    }
  },
  methods: {
    scrollToRightRTL() {
      this.temp = this.$store.state.menu.width + this.$store.state.menu.margin;
      if (this.temp === 0) {
        this.$store.state.menu.margin = this.temp;
        this.$store.state.menu.hideRightArrowRTL = false;
      } else {
        this.$store.state.menu.margin += this.$store.state.menu.width;
        this.$store.state.menu.hideRightArrowRTL = false;
        this.$store.state.menu.hideLeftArrowRTL = false;
      }
    },
    scrollToLeftRTL() {
      if (this.$store.state.menu.margin <= -this.$store.state.menu.width) {
        this.$store.state.menu.margin += -this.$store.state.menu.width;
        this.$store.state.menu.hideLeftArrowRTL = true;
      } else {
        this.$store.state.menu.margin += -this.$store.state.menu.width;
        this.$store.state.menu.hideRightArrowRTL = false;
        this.$store.state.menu.activeoverlay = false;
      }
    },
    scrollToLeft() {
      if (this.$store.state.menu.margin >= -this.$store.state.menu.width) {
        this.$store.state.menu.margin = 0;
        this.$store.state.menu.hideLeftArrow = true;
      } else {
        this.$store.state.menu.margin += this.$store.state.menu.width;
        this.$store.state.menu.hideRightArrow = false;
      }
    },
    scrollToRight() {
      this.temp = this.$store.state.menu.width - this.$store.state.menu.margin;
      if (this.temp + this.$store.state.menu.width > this.$store.state.menu.menuWidth) {
        this.$store.state.menu.margin = -this.temp;
        this.$store.state.menu.hideLeftArrow = false;
        if (this.temp == 1199) {
          this.$store.state.menu.hideRightArrow = true;
        }
      } else {
        this.$store.state.menu.margin += -this.$store.state.menu.width;
        this.$store.state.menu.hideLeftArrow = false;
      }
    }
  }
}
</script>