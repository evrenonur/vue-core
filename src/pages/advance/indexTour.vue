<template>
     <Breadcrumbs main="Bonus Ui" title="Tour"/>
      <div class="container-fluid">
            <div class="user-profile">
              <div class="row">
                  <tourProfile/>
                   <div class="col-xl-3 col-lg-12 col-md-5 xl-35 box-col-35">
                  <div class="default-according style-1 job-accordion">
                    <div class="row">
                        <defaultAccording/>
                    </div>
                  </div>
                   </div>
                <div class="col-xl-9 col-lg-12 col-md-7 xl-65 box-col-65">
                  <div class="row">
                   <profilePost/>
                  </div>
                </div>
                 <v-tour name="myTour" :steps="steps" :options="tourOptions"></v-tour>
              </div>
            </div>
      </div>
</template>
<script>
import defaultAccording from "@/components/common/defaultAccording.vue"
import tourProfile from "@/components/advance/tour/tourProfile.vue"
import profilePost from "@/components/users/profile/profilePost.vue"
export default {
    components:{
        tourProfile,
        defaultAccording,
        profilePost
    },
       data() {
    return {
      tourOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: "Skip",
          buttonPrevious: "Back",
          buttonNext: "Next",
          buttonStop: "Done",
        },
      },
      toogle: true,
      steps: [
        {
          target: "#profile-tour",
          content: "This is Profile image",
        },
        {
          target: "#update-profile-tour",
          content: "Change Profile image here",
        },
        {
          target: "#info-bar-tour",
          content: "This is the your details",
        },
        {
          target: "#social-bar-tour",
          content: "This is your Social details",
        },
        {
          target: "#first-post-tour",
          content: "This is the your first Post",
          params: {
            placement: "top",
          },
        },
        {
          target: "#last-post-tour",
          content: "This is the your last Post",
          params: {
            placement: "top",
          },
        },
      ],
    };
  },
  mounted: function () {
    this.$tours["myTour"].start();
  },
}
</script>