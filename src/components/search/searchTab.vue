<template>
     <div class="card-body">
          <ul class="nav nav-tabs search-list" id="top-tab" role="tablist">
                      <li class="nav-item"><a class="nav-link active" id="all-link" data-bs-toggle="tab" href="#all-links" role="tab" aria-selected="true"><i class="icon-target"></i>All</a>
                        <div class="material-border"></div>
                      </li>
                      <li class="nav-item"><a class="nav-link" id="image-link" data-bs-toggle="tab" href="#image-links" role="tab" aria-selected="false"><i class="icon-image"></i>Images</a>
                        <div class="material-border"></div>
                      </li>
                      <li class="nav-item"><a class="nav-link" id="video-link" data-bs-toggle="tab" href="#video-links" role="tab" aria-selected="false"><i class="icon-video-clapper"></i>Videos</a>
                        <div class="material-border"></div>
                      </li>
                      <li class="nav-item"><a class="nav-link" id="map-link" data-bs-toggle="tab" href="#map-links" role="tab" aria-selected="false"><i class="icon-map-alt"></i>Maps</a>
                        <div class="material-border"></div>
                      </li>
                      <li class="nav-item"><a class="nav-link" id="setting-link" data-bs-toggle="tab" href="#setting-links" role="tab" aria-selected="false"><i class="icon-settings"></i>Settings</a>
                        <div class="material-border"></div>
                      </li>
                    </ul>
                <div class="tab-content" id="top-tabContent">
                     <div class="search-links tab-pane fade show active" id="all-links" role="tabpanel" aria-labelledby="all-link">
                         <allLinks/>
                         <paginationView/>
                     </div>
                     <div class="tab-pane fade" id="image-links" role="tabpanel" aria-labelledby="image-link">
                         <imageLink/>
                     </div>
                     <div class="tab-pane fade" id="video-links" role="tabpanel" aria-labelledby="video-link">
                         <videoLink/>
                     </div>
                      <div class="tab-pane fade" id="map-links" role="tabpanel" aria-labelledby="video-link">
                        <videoLink/>
                     </div>
                      <div class="tab-pane fade" id="setting-links" role="tabpanel" aria-labelledby="video-link">
                        <videoLink/>
                     </div>
                </div>
     </div>
</template>
<script>
import paginationView from "./paginationView.vue"
import allLinks from "./allLinks.vue"
import imageLink from "./imageLink.vue"
import videoLink from "./videoLink.vue"
export default {
    components:{
        allLinks,
        imageLink,
        paginationView,
        videoLink
    }
}
</script>