<template>
  <div class="col-xl-4 col-md-6 box-col-30 xl-30">
    <div class="card use-country">
      <div class="card-header pb-0">
        <div class="d-flex justify-content-between">
          <div class="flex-grow-1">
            <p class="square-after f-w-600 header-text-primary">User By Country<i class="fa fa-circle"> </i></p>
            <h4>96.564%</h4>
          </div>

        </div>
      </div>
      <div class="card-body">
        <div class="jvector-map-height" id="asia">
          <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:300px">
            <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />
            <ol-tile-layer>
              <ol-source-bingmaps apiKey="AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI"
                :imagerySet="selected" />
            </ol-tile-layer>
          </ol-map>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  ref
} from 'vue'
export default {
  setup() {
    const center = ref([40, 40])
    const projection = ref('EPSG:4326')
    const zoom = ref(6)
    const rotation = ref(0)
    const selected = ref('AerialWithLabels')
    return {
      center,
      projection,
      zoom,
      rotation,
      selected
    }
  },
}

</script>