<template>
  <div>
    <div class="row invo-header">
      <div class="col-sm-6">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <router-link to="/">
            <img
                class="d-flex-object img-60"
                src="@/assets/images/favicon/favicon.png"
                alt=""
            /></router-link>
          </div>
          <div class="flex-grow-1 m-l-20">
            <h4 class="d-flex-heading f-w-600">Tivo</h4>
            <p class="mb-0">
              hello@Tivo.in<br /><span class="digits">289-335-6503</span>
            </p>
          </div>
        </div>
        <!-- End Info-->
      </div>
      <div class="col-sm-6">
        <div class="text-md-end text-xs-center">
          <h3>Invoice #<span class="digits counter"><number
                                  class="bold counter"
                                  ref="number1"
                                  :from="0"
                                  :to="1069"
                                  :duration="5"
                                  :delay="0"
                                  easing="Power1.easeOut"
                                 /></span></h3>
          <p class="mb-0">
            Issued: May<span class="digits"> 27, 2023</span><br />Payment Due:
            June <span class="digits">15, 2023</span>
          </p>
        </div>
        <!-- End Title                                 -->
      </div>
    </div>
  </div>
</template>