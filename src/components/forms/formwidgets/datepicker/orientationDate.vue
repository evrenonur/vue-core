<template>
    <div class="mb-3 row g-3">
                          <label class="col-sm-3 col-form-label text-sm-end">Orientation</label>
                          <div class="col-xl-5 col-sm-9">
                            <div class="form-row">
                              <div class="col-md-12 mb-2">
                               
                                <datepicker class="datepicker-here  digits" v-model="date" position="left" placeholder="top left"/>
                              </div>
                              <div class="col-md-12 mb-2">
                             
                                 <datepicker class="datepicker-here  digits" v-model="date" position="right" placeholder="top right" />
                              </div>
                              
                            </div>
                          </div>
                        </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const date = ref();
        
        return {
            date,
        }
    }
}
</script>