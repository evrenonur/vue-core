<template>
    <div class="col-xxl-6 col-xl-12 xl-100 col-sm-12 box-col-12">
                <div class="card o-hidden">
                  <div class="weather-widget-two">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-xl-5 col-md-6">
                          <div class="mobile-clock-widget">
                            <div>
                              <ul class="clock" id="clock">
                                <li class="hour" id="hour"></li>
                                <li class="min" id="min"></li>
                                <li class="sec" id="sec"></li>
                              </ul>
                              <div class="date f-24 mb-2" id="date"><span id="monthDay">{{ clockset.month }} {{ clockset.date }}</span>, <span id="year" v-text="clockset.year"></span></div>
                              <div>
                                <p class="m-0 f-14 text-light">kolkata, India</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    <whetherGeneral/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import whetherGeneral from "./whetherGeneral.vue"
export default {
    components:{
whetherGeneral
    },
    data(){
        return{
           clockset:{
          sec:0,
          min:0,
          hour:0,
          date:null,
          month:null,
          year:null,
        },
        months:['January','February','March','April','May','June','July','August','September','October','November','December'],
        }
    },
     mounted(){
      this.clock();
    },
    methods:{
         clock:function(){
        var cd = new Date();

        this.clockset.hour = 30 * (cd.getHours() % 12 + cd.getMinutes() / 60);
        this.clockset.min = 6 * cd.getMinutes();
        this.clockset.sec = 6 * cd.getSeconds();
      
        this.clockset.date = cd.getDate();
        this.clockset.month = this.months[cd.getMonth()];
        this.clockset.year = cd.getFullYear();

        if(document.getElementById('sec')!== null && document.getElementById('min')!== null && document.getElementById('hour')!== null) {
          document.getElementById('sec').style.cssText='-webkit-transform:rotate('+this.clockset.sec+'deg);';
          document.getElementById('min').style.cssText='-webkit-transform:rotate('+this.clockset.min+'deg);';
          document.getElementById('hour').style.cssText='-webkit-transform:rotate('+this.clockset.hour+'deg);';
        }
        setTimeout(this.clock, 10);
      }
    }
}
</script>