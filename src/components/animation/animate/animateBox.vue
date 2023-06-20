<template>
    <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-xl-6 col-md-8">
                        <div id="animation-box">
                        <transition appear :enter-active-class="enterClass">
                          <div class="box" :key="show">
                          <div class="card">
                            <div class="animate-widget">
                              <div><img class="img-fluid" src="@/assets/images/banner/3.jpg" alt=""></div>
                              <div class="text-center p-25">
                                <p class="text-muted mb-0">We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat consumers wherever they are on their shopping journey. Our mission is to become India’s value lifestyle omni-channel leader.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                         </transition>
                      </div>
                       <form class="theme-form text-center">
                          <div class="mb-3">
                               <select v-model="animation" @change="selectAnimate" class="form-select input input--dropdown js-animations text-center text-md-start">
                              <option v-for="(anim, index) in animationList" :value="anim" :key="index">{{ anim }}</option>
                              </select>
                          </div>
                           <button class="js-triggeraNimation btn btn-primary" @click.prevent="selectAnimated(animation)">Animate it</button>
                        </form>
                    </div>
                  </div>
                </div>
    </div>
    </div>
</template>
<script>
import animationMixin from "@/mixins/commen/animationMixin";
export default {
     mixins: [animationMixin],
       methods: {
        selectAnimate() {
          this.show = !this.show;
        },
        selectAnimated(animation) {
        this.show = animation;
        }
    
      },
      computed: {
        enterClass() {
          return `animated ${this.animation}`;
        }
      }
}
</script>