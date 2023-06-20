<template>
  <div class="translate_wrapper" :class="filtered ? 'active' : ''">
    <div class="current_lang">
      <div class="lang"><i data-feather="globe"><vue-feather type="globe" @click="collapseFilter()"></vue-feather></i>
      </div>
    </div>
    <div class="more_lang" :class="filtered ? 'active' : ''">
      <div class="lang" v-for="(lang, index) in langs" :key="index" @click.prevent="setLanguage(lang.lan)"><i
          class="flag-icon " :class="lang.icon"></i><span class="lang-txt">{{ lang.lan }}<span>
            {{ lang.span}}</span></span></div>

    </div>

  </div>
</template>
<script>
import { mapState } from "vuex";
export default {

  data() {
    return {
      filtered: false,
    }
  },
  computed: {
    ...mapState({
      langs: (state) => state.language.langs,
    }),
  },
  methods: {
    setLanguage(language) {
      this.$i18n.locale = language
      this.collapseFilter()
    },
    collapseFilter(params) {
      params ? this.filtered = params.value : this.filtered = !this.filtered;
    },
  }
}
</script>