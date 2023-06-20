<template>
     <div class="col-lg-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Default:</h4>
                  </div>
                  <div class="card-body">
                    <form class="theme-form">
                      <div>
                        <div class="clockpicker">
                           <datepicker  v-model="time" timePicker />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const time = ref({ 
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        });
        
        return {
            time,
        }
    }
}
</script>