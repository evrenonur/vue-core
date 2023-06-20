<template>
  <div class="card">
    <div class="card-header pb-0">
      <h4>Image Cropper</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-xl-9 col-md-12">
          <div class="img-container">
            <vue-cropper ref="cropper" :guides="true" :view-mode="viewmodeselected" drag-mode="crop"
              :aspectRatio="aspectRatioselected" :auto-crop-area="0.5" :min-container-width="250"
              :min-container-height="180" :background="true" :rotatable="true" :movable="true" :src="getImgUrl()"
              alt="Source Image" :ready="ready" :crop="cropImage" :img-style="{ width: '800px', height: '500px' }">
            </vue-cropper>
          </div>
        </div>
        <div class="col-xl-3 col-md-12">

          <div class="docs-data">
            <div class="input-group input-group-sm">
              <span class="input-group-text">X</span>
              <input class="form-control digits" type="text" placeholder="x" :value="imageData.x">
              <span class="input-group-text">px</span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-text">Y</span>
              <input class="form-control digits" type="text" placeholder="y" :value="imageData.y">
              <span class="input-group-text">px</span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-text">Width</span>
              <input class="form-control digits" type="text" placeholder="width" :value="imageData.width">
              <span class="input-group-text">px</span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-text">Height</span>
              <input class="form-control digits" type="text" placeholder="height" :value="imageData.height">
              <span class="input-group-text">px</span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-text">Rotate</span>
              <input class="form-control digits" type="text" placeholder="rotate" :value="imageData.rotate">
              <span class="input-group-text">deg</span>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-text">ScaleX</span>
              <input class="form-control digits" type="text" placeholder="scaleX" :value="imageData.scaleX">
            </div>
            <div class="input-group input-group-sm mb-0">
              <span class="input-group-text">ScaleY</span>
              <input class="form-control digits" type="text" placeholder="scaleY" :value="imageData.scaleY">
            </div>
            <img :src="cropImg" class="img-fluid mt-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="row img-cropper">
        <div class="col-xl-9 col-md-12 docs-buttons">
          <div class="btn-group ">
            <button class="btn btn-primary" type="button" data-method="setDragMode" data-option="move"
              title="Move"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)" v-on:click="moveImage"><span
                  class="fa fa-arrows"></span></span></button>
            <button class="btn btn-primary" type="button" data-method="setDragMode" data-option="crop"
              title="Crop"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)"><span
                  class="fa fa-crop"></span></span></button>
          </div>
          <div class="btn-group">
            <button class="btn btn-primary" type="button" data-method="zoom" data-option="0.1" title="Zoom In"><span
                class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;zoom&quot;, 0.1)" v-on:click="zoominImage"><span
                  class="fa fa-search-plus"></span></span></button>
            <button class="btn btn-primary" type="button" data-method="zoom" data-option="-0.1" title="Zoom Out"><span
                class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;zoom&quot;, -0.1)" v-on:click="zoomoutImage"><span
                  class="fa fa-search-minus"></span></span></button>
          </div>
          <div class="btn-group">
            <button class="btn btn-outline-primary" type="button" data-method="move" data-option="-10"
              data-second-option="0" title="Move Left" v-on:click="moveImageLeft"><span class="docs-tooltip"
                data-bs-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, -10, 0)"><span
                  class="fa fa-arrow-left"></span></span></button>
            <button class="btn btn-outline-primary" type="button" data-method="move" data-option="10"
              data-second-option="0" title="Move Right" v-on:click="moveImageRight"><span class="docs-tooltip"
                data-bs-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 10, 0)"><span
                  class="fa fa-arrow-right"></span></span></button>
            <button class="btn btn-outline-primary" type="button" data-method="move" data-option="0"
              data-second-option="-10" title="Move Up" v-on:click="moveImageUp"><span class="docs-tooltip"
                data-bs-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 0, -10)"><span
                  class="fa fa-arrow-up"></span></span></button>
            <button class="btn btn-outline-primary" type="button" data-method="move" data-option="0"
              data-second-option="10" title="Move Down" v-on:click="moveImageDown"><span class="docs-tooltip"
                data-bs-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 0, 10)"><span
                  class="fa fa-arrow-down"></span></span></button>
          </div>
          <div class="btn-group">
            <button class="btn btn-outline-primary" type="button" data-method="rotate" v-on:click="rotateLeft"
              data-option="-45" title="Rotate Left"><span class="docs-tooltip" data-bs-toggle="tooltip"
                data-animation="false" title="$().cropper(&quot;rotate&quot;, -45)"><span
                  class="fa fa-rotate-left"></span></span></button>
            <button class="btn btn-outline-primary" type="button" data-method="rotate" v-on:click="rotateRight"
              data-option="45" title="Rotate Right"><span class="docs-tooltip" data-bs-toggle="tooltip"
                data-animation="false" title="$().cropper(&quot;rotate&quot;, 45)"><span
                  class="fa fa-rotate-right"></span></span></button>
          </div>
          <div class="btn-group">
            <button class="btn btn-outline-primary" v-on:click="fliphorizontal" type="button" data-method="scaleX"
              data-option="-1" title="Flip Horizontal"><span class="docs-tooltip" data-bs-toggle="tooltip"
                data-animation="false" title="$().cropper(&quot;scaleX&quot;, -1)"><span
                  class="fa fa-arrows-h"></span></span></button>
            <button class="btn btn-outline-primary" v-on:click="flipvertical" type="button" data-method="scaleY"
              data-option="-1" title="Flip Vertical"><span class="docs-tooltip" data-bs-toggle="tooltip"
                data-animation="false" title="$().cropper(&quot;scaleY&quot;, -1)"><span
                  class="fa fa-arrows-v"></span></span></button>
          </div>
          <div class="btn-group">
            <button class="btn btn-outline-primary" type="button" data-method="crop" title="Crop"><span
                class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;crop&quot;)"><span class="fa fa-check"></span></span></button>
            <button class="btn btn-outline-primary" type="button" data-method="clear" v-on:click="clear"
              title="Clear"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;clear&quot;)"><span class="fa fa-remove"></span></span></button>
          </div>
          <div class="btn-group">
            <button class="btn btn-outline-primary" type="button" v-on:click="disable" data-method="disable"
              title="Disable"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;disable&quot;)"><span class="fa fa-lock"></span></span></button>
            <button class="btn btn-outline-primary" type="button" v-on:click="enable" data-method="enable"
              title="Enable"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;enable&quot;)"><span class="fa fa-unlock"></span></span></button>
          </div>
          <div class="btn-group">
            <button class="btn btn-outline-primary" type="button" data-method="reset" v-on:click="reset"
              title="Reset"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;reset&quot;)"><span class="fa fa-refresh"></span></span></button>

            <button class=" btn btn-outline-primary" id="inputImage" v-on:click="imageUpload" type="file" name="file"
              accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff"><span class="docs-tooltip" data-bs-toggle="tooltip"
                data-animation="false" title="Import image with Blob URLs"><span
                  class="fa fa-upload"></span></span></button>

            <button class="btn btn-outline-primary" type="button" v-on:click="destroy" data-method="destroy"
              title="Destroy"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                title="$().cropper(&quot;destroy&quot;)"><span class="fa fa-power-off"></span></span></button>
          </div>
          <div class="btn-group btn-group-crop">
            <button class="btn btn-primary" type="button" data-method="getCroppedCanvas"
              v-on:click="getCroppedCanvas4096"><span class="docs-tooltip" data-bs-toggle="tooltip"
                data-animation="false"
                title="$().cropper(&quot;getCroppedCanvas&quot;, { maxWidth: 4096, maxHeight: 4096 })">Get Cropped
                Canvas</span></button>
            <button class="btn btn-primary" type="button" data-method="getCroppedCanvas"
              v-on:click="getCroppedCanvas16090"><span class="docs-tooltip" data-bs-toggle="tooltip"
                data-animation="false"
                title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })">160×90</span></button>
            <button class="btn btn-primary" type="button" data-method="getCroppedCanvas"
              v-on:click="getCroppedCanvas320180"><span class="docs-tooltip" data-bs-toggle="tooltip"
                data-animation="false"
                title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })">320×180</span></button>
          </div>
          <button class="btn btn-primary" type="button" data-method="getData" data-option="" data-bs-target="#putData"
            v-on:click="getCropperdata"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
              title="$().cropper(&quot;getData&quot;)">Get Data</span></button>
          <button class="btn btn-primary" type="button" data-method="setData" data-bs-target="#putData"><span
              class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
              title="$().cropper(&quot;setData&quot;, data)">Set Data</span></button>
          <button class="btn btn-primary" type="button" data-method="getContainerData" data-option=""
            data-bs-target="#putData" v-on:click="getContainerdata"><span class="docs-tooltip" data-bs-toggle="tooltip"
              data-animation="false" title="$().cropper(&quot;getContainerData&quot;)">Get Container
              Data</span></button>
          <button class="btn btn-primary" type="button" data-method="getImageData" data-option=""
            data-bs-target="#putData" v-on:click="getImagedata"><span class="docs-tooltip" data-bs-toggle="tooltip"
              data-animation="false" title="$().cropper(&quot;getImageData&quot;)">Get Image Data</span></button>
          <button class="btn btn-primary" type="button" data-method="getCanvasData" data-option=""
            data-bs-target="#putData" v-on:click="getCanvasData"><span class="docs-tooltip" data-bs-toggle="tooltip"
              data-animation="false" title="$().cropper(&quot;getCanvasData&quot;)">Get Canvas Data</span></button>
          <button class="btn btn-primary" type="button" data-method="getCropBoxData" data-option=""
            data-bs-target="#putData" v-on:click="getCropBoxData"><span class="docs-tooltip" data-bs-toggle="tooltip"
              data-animation="false" title="$().cropper(&quot;getCropBoxData&quot;)">Get Crop Box Data</span></button>
          <button class="btn btn-primary" type="button" data-method="moveTo" data-option="0"
            v-on:click="moveImageTo"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
              title="cropper.moveTo(0)">Move to [0,0]</span></button>
          <button class="btn btn-primary" type="button" data-method="zoomTo" data-option="1" v-on:click="zoom100"><span
              class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title="cropper.zoomTo(1)">Zoom to
              100%</span></button>
          <button class="btn btn-primary" type="button" data-method="rotateTo" data-option="180"
            v-on:click="rotate180"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
              title="cropper.rotateTo(180)">Rotate 180°</span></button>
          <button class="btn btn-primary" type="button" data-method="scale" data-option="-2" data-second-option="-1"
            v-on:click="scaleImage"><span class="docs-tooltip" data-bs-toggle="tooltip"
              title="cropper.scale(-2, -1)">Scale (-2, -1)</span></button>
          <textarea class="form-control" id="putData" rows="1" v-model="putData"
            placeholder="Get data to here or set data with this value"></textarea>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import imageCropperFunctions from "@/mixins/cropperMixin"
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
  components: {
    VueCropper,
  },
  mixins: [imageCropperFunctions],
  data() {
    return {
      myimgSrc: 'img-cropper.jpg',
      imgSrc: '',
      imageData: '',
      containerData: '',
      putData: '',
      viewmodeselected: 0,
      cropImg: '',
      viewmodeOptions: [
        { text: 'VM0', value: 0 },
        { text: 'VM1', value: 1 },
        { text: 'VM2', value: 2 },
        { text: 'VM3', value: 3 },
      ],
      aspectRatioselected: 1.7777777777777777,
      aspectRatioOptions: [
        { text: '16:9', value: 1.7777777777777777 },
        { text: '4:3', value: 1.3333333333333333 },
        { text: '1:1', value: 1 },
        { text: '2:3', value: 0.6666666666666666 },
        { text: 'Free', value: NaN }
      ]
    };
  },
  mounted() {
    this.imageData = this.$refs.cropper.getData();
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    }),
      new Tooltip(document.body, {
        selector: "[class='docs-tooltip']",
      })
  },

};
</script>