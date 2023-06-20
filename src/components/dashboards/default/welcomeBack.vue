<template>
     <div class="col-xxl-6 col-xl-5 col-lg-6 dash-45 box-col-40">
                <div class="card profile-greeting">               
                  <div class="card-body">
                    <div class="d-sm-flex d-block justify-content-between">
                      <div class="flex-grow-1"> 
                        <div class="weather d-flex">
                          <h2 class="f-w-400"> <span>28<sup><i class="fa fa-circle-o f-10"></i></sup>C </span></h2>
                          <div class="span sun-bg"><i class="icofont icofont-sun font-primary"></i></div>
                        </div><span class="font-primary f-w-700">Sunny Day</span>
                        <p>Beautiful Sunny Day Walk</p>
                      </div>
                      <div class="badge-group">
                        <div class="badge badge-light-primary f-12"><i class="fa fa-clock-o"></i><span id="txt" v-show="time">{{time}} PM</span></div>
                      </div>
                    </div>
                    <div class="greeting-user"> 
                      <div class="profile-vector">
                        <ul class="dots-images">
                          <li class="dot-small bg-info dot-1"></li>
                          <li class="dot-medium bg-primary dot-2"></li>
                          <li class="dot-medium bg-info dot-3"></li>
                          <li class="semi-medium bg-primary dot-4"></li>
                          <li class="dot-small bg-info dot-5"></li>
                          <li class="dot-big bg-info dot-6"></li>
                          <li class="dot-small bg-primary dot-7"></li>
                          <li class="semi-medium bg-primary dot-8"></li>
                          <li class="dot-big bg-info dot-9"></li>
                        </ul><img class="img-fluid" src="@/assets/images/dashboard/default/profile.png" alt="">
                        <ul class="vector-image"> 
                          <li> <img src="@/assets/images/dashboard/default/ribbon1.png" alt=""></li>
                          <li> <img src="@/assets/images/dashboard/default/ribbon3.png" alt=""></li>
                          <li> <img src="@/assets/images/dashboard/default/ribbon4.png" alt=""></li>
                          <li> <img src="@/assets/images/dashboard/default/ribbon5.png" alt=""></li>
                          <li> <img src="@/assets/images/dashboard/default/ribbon6.png" alt=""></li>
                          <li> <img src="@/assets/images/dashboard/default/ribbon7.png" alt=""></li>
                        </ul>
                      </div>
                      <h4><router-link to="/users/profile"><span>Welcome Back</span> John </router-link> <span class="right-circle"><i class="fa fa-check-circle font-primary f-14 middle"></i></span></h4>
                      <div><span class="badge badge-primary">Your 5</span><span class="font-primary f-12 middle f-w-500 ms-2"> Task Is Pending</span></div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
  data(){
    return{
      time: '',
    }
  },
  methods:{
    printTime: function () {
            return new Date().toLocaleTimeString();
          },
  },
  mounted(){
     this.time = this.printTime();
  }
}
</script>