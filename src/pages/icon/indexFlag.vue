<template>
  <Breadcrumbs main="Icons" title="Flag Icons" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header pb-0">
            <h4 class="m-b-0">Flag Icons</h4>
          </div>
          <div class="card-body">
            <div class="row icon-lists flag-icons">
              <div class="col-12 col-sm-6 col-xl-4" v-for="(fi, index) in flag_icons" :key="index"
                v-on:click="icon_bar(fi.abbrivation)">
                <div class="d-flex">
                  <i class="flag-icon" :class="'flag-icon-' + fi.abbrivation"></i>
                  <div class="flex-grow-1  align-self-center">
                    <h5 v-text="fi.abbrivation"></h5>
                    <h6 class="mt-0" v-text="fi.name"></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="icon-hover-bottom p-fixed fa-fa-icon-show-div" :class="{ 'opecity-0': !icon_bar_status }"
    :style="[icon_bar_status ? { 'display': 'block' } : { 'display': 'none' }]">
    <div class="container-fluid">
      <div class="row">
        <div class="icon-popup">
          <div class="close-icon" v-on:click="close_icon_bar">
            <i class="icofont icofont-close"></i>
          </div>
          <div class="icon-first">
            <i class="fa-2x" :class="[select_icon.class]"></i>
          </div>
          <div class="icon-class">
            <label class="icon-title">Class</label>
            <span>icon-drupal</span>
          </div>
          <div class="icon-last icon-last">
            <label class="icon-title">Markup</label>
            <div class="form-inline">
              <div class="form-group mb-0">
                <input class="inp-val form-control m-r-10" type="text" ref="copy_text" :value="select_icon.tag"
                  readonly="readonly" />
                <button class="btn btn-primary notification" @click="copy_icon">Copy text</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toast } from 'vue3-toastify';
import flagIcons from "@/mixins/flagIcons";
export default {
  mixins: [flagIcons],

  methods: {
    icon_bar(icon) {

      this.select_icon.class = 'flag-icon flag-icon-' + icon;
      this.select_icon.tag = '<i class="flag-icon flag-icon-' + icon + '"></i>';

      this.icon_bar_status = true;
    },
    close_icon_bar() {
      this.icon_bar_status = false;
    },
    copy_icon() {
      toast.success("Code Copied to clipboard!", {
        theme: 'colored',
        icon: false,
        hideProgressBar: true,
        transition: this.customAnimation,
        autoClose: 1000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      this.$refs.copy_text.select();
      document.execCommand('copy');

    }
  }
};
</script>