<template>
     <Breadcrumbs main="Maps" title="Google Maps"/>
      <div class="container-fluid">
          <div class="row">
               <div class="col-xl-6 ">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Map at a specified location</h4><span>Display a map at a specified location and zoom level.</span>
                  </div>
                  <div class="card-body">
                      <GoogleMap :center="{lat:20.5937, lng:78.9629}" :zoom="12" style="width: auto; height: 500px">
                     </GoogleMap>
                  </div>
                </div>
              </div>
               <div class="col-xl-6 ">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Multi-language support</h4><span>Display a map with labels in a foreign language</span>
                  </div>
                  <div class="card-body">
                    <GoogleMap :center="{lat:20.5937, lng:78.9629}" :zoom="6" style="width: auto; height: 500px"
                      :options="{
                          region: 'VI',
                          language: 'vi',
                      }"
                    >
                    </GoogleMap>
                  </div>
                </div>
              </div>
               <div class="col-xl-6 ">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Marker on the Map</h4><span>Display a map highlighting points of interest</span>
                  </div>
                  <div class="card-body">
                    <Markers></Markers>
                  </div>
                </div>
              </div> 
              <div class="col-xl-6 ">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Draggable Marker</h4><span>Display a map highlighting points of interest</span>
                  </div>
                  <div class="card-body">
                    <DraggableMarker></DraggableMarker>
                  </div>
                </div>
              </div>
               <div class="col-xl-6 ">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Polyline on the Map</h4><span>Display a map with a line showing a known route</span>
                  </div>
                  <div class="card-body">
                    <GooglePolyline></GooglePolyline>
                  </div>
                </div>
              </div>
               <div class="col-xl-6 ">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Polygon on the Map</h4><span>Display a map highlighting a region or area</span>
                  </div>
                  <div class="card-body">
                    <TrianglePolygon></TrianglePolygon>
                  </div>
                </div>
              </div>
          </div>
      </div>
</template>
<script>
import { GoogleMap, } from "vue3-google-map";
import Markers from "@/components/maps/markersMap.vue"
import DraggableMarker from "@/components/maps/draggableMarker.vue"
import GooglePolyline from "@/components/maps/googlePolyline.vue"
import TrianglePolygon from "@/components/maps/trianglePolygon.vue"
export default {
    components:{
        GoogleMap, 
        Markers,
        DraggableMarker,
        GooglePolyline,
        TrianglePolygon
    },
}
</script>