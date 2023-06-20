import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/scss/app.scss"
import 'sweetalert2/dist/sweetalert2.min.css';
import "vue-multiselect/dist/vue-multiselect.css"
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import 'vue3-tour/dist/vue3-tour.css'
import '@vuepic/vue-datepicker/dist/main.css'
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
import 'vue-rate/dist/vue-rate.css'
import 'vue3-openlayers/dist/vue3-openlayers.css'
import 'v-calendar/dist/style.css';

import OpenLayersMap from 'vue3-openlayers'
import VueFeather from "vue-feather";
import VueApexCharts from "vue3-apexcharts";
import VueNumber from "vue-number-animation";
import Lightbox from 'vue-easy-lightbox'
import VueSweetalert2 from 'vue-sweetalert2';
import Toaster from "@meforma/vue-toaster";
import Multiselect from 'vue-multiselect'
import feather from 'feather-icons'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import Notifications from '@kyvg/vue3-notification'
import AosVue from "aos-vue";
import {VueMasonryPlugin} from 'vue-masonry';
import vueChartist from "vue-chartist"
import VueCountdown from '@chenfengyuan/vue-countdown';
import { quillEditor } from "vue3-quill";
import Datepicker from '@vuepic/vue-datepicker';
import SimpleTypeahead from 'vue3-simple-typeahead';
import rate from 'vue-rate'
import VCalendar from 'v-calendar';

import { createI18n } from 'vue-i18n'
import English from "./locales/en.json"

const i18n = createI18n({ legacy: false, // you must specify 'legacy: false' option
  locale: 'en',
  messages: {
   English: English,
    }
  })


createApp(App)
.use(store)
.use(router)
.use(Notifications)
.use(Lightbox)
.use(VueApexCharts)
.use(VueSweetalert2)
.use(Toaster)
.use(feather)
.use(AosVue)
.use(VCalendar, {})
.use(rate)
.use(i18n)
.use(VueNumber)
.use(OpenLayersMap)
.use(vueChartist)
.use(PerfectScrollbar)
.use(quillEditor)
.use(SimpleTypeahead)
.use(VueMasonryPlugin)
.component('multiselect', Multiselect)
.component(VueFeather.name, VueFeather)
.component(VueCountdown.name, VueCountdown)
.component('Datepicker', Datepicker)
.mount('#app')
