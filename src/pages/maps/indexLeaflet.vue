<template>
    <Breadcrumbs main="Maps" title="Vue Leaflet"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-6 ">
                    <div class="card">
                        <div class="card-header pb-0">
                          <h4>Simple Map</h4>
                      </div>
                      <div class="card-body">
                      <simpleMap/>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6 ">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h4>Multi-language support</h4><span>Display a map with labels in a foreign language</span>
                        </div>
                        <div class="card-body">
                            <multiLanguage/>
                        </div>
                    </div>
                </div>
                  <div class="col-xl-12 ">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h4>Multi-language support</h4><span>Display a map with labels in a foreign language</span>
                        </div>
                        <div class="card-body">
                           <multiLanguage2/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import simpleMap from "@/components/maps/simpleMap.vue"
import multiLanguage from "@/components/maps/multiLanguage.vue"
import multiLanguage2 from "@/components/maps/multiLanguage2.vue"
export default {
    components:{
       simpleMap,
       multiLanguage,
       multiLanguage2
    }
}
</script>