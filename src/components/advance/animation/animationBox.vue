<template>
  <div class="card-body">
    <div class="row">
      <div class="col-xl-6 col-md-8 ">
        <div id="animation-box">
          <div class="card">
            <div class="animate-widget">
              <div><img class="img-fluid" src="@/assets/images/banner/3.jpg" alt=""></div>
              <div class="text-center p-25">
                <p class="text-muted mb-0">Denouncing pleasure and praising pain was born and I will give you a complete
                  account of the system, and expound the actual teachings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 text-center">
        <form class="form-inline theme-form row justify-content-center animated-modal d-flex">
          <div class="mb-2 me-2 mb-0 animated-modal-md-mb w-auto">
            <label class="me-3">Entrances</label>
            <select class="form-select" id="entrance" v-model="enterAnimation">
              <option v-for="(anim, index) in animationList" :value="anim" :key="index">{{ anim }}</option>
            </select>
          </div>
          <div class="mb-2 me-2 mb-0 animated-modal-md-mb w-auto">
            <label class="me-3">Exits</label>
            <select class="form-select" id="exit" v-model="exitAnimation">

              <option v-for="(anim, index) in animationList" :value="anim" :key="index">{{ anim }}</option>
            </select>
          </div>
          <!-- Button trigger modal-->
          <div class="mb-2 mb-0 me-0 w-auto">
            <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myModal"
              @click.prevent="isActive(this.enterAnimation)">Launch demo modal</button>
          </div>
        </form>
      </div>
    </div>
    <Teleport to="body">
      <div class="modal fade" @click="close" id="myModal" role="dialog"
        :style="{ marginRight: animate == rubberBand ? '15px' : '0px' }">
        <div id="mod" class="modal-dialog" role="document">
          <div>
            <button class="btn-close theme-close" type="button" @click="close"></button>
            <div class="modal-body">
              <div class="card">
                <div class="animate-widget">
                  <div><img class="img-fluid" src="@/assets/images/banner/3.jpg" alt=""></div>
                  <div class="text-center p-25">
                    <p class="text-muted mb-0">asdasdsadsad pleasure and praising pain was born and I will give you a
                      complete account of the system, and expound the actual teachings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
<script>
import animationMixin from "@/mixins/commen/animationMixin";
export default {
  mixins: [animationMixin],

  methods: {
    isActive(path) {
      this.animate = path
      document.getElementById("mod").className = `modal-dialog ${path} animated`
    },
    close() {

      document.getElementById("mod").className = `modal-dialog ${this.exitAnimation} animated`
    },
  },
  computed: {
    enterClass() {
      return `animated ${this.enterAnimation}`;
    }
  }

};
</script>
<style scoped>
/* @import 'animate.css/source/animate.css' */
</style>