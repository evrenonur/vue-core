<template>
      <div class="col-xxl-6 box-col-50 xl-60">
                <div class="row">
                  <div class="col-xl-12 col-md-6">
                    <div class="card">
                      <div class="blog-box blog-list row">
                        <div class="col-xl-6 col-12">
                          <div class="blog-wrraper"><router-link to="/blog/single"> <img class="img-fluid sm-100-wp p-0" src="@/assets/images/blog/blog-2.jpg"  alt=""></router-link></div>
                        </div>
                        <div class="col-xl-6 col-12">
                          <div class="blog-details">
                            <div class="blog-date"><span>02</span> January 2023</div><router-link to="/learning/details/1"> 
                              <h6>Encounter every day.</h6></router-link>
                            <div class="blog-bottom-content">
                              <ul class="blog-social">
                                <li>by: Admin</li>
                                <li>12 Hits</li>
                              </ul>
                              <hr>
                              <p class="mt-0">A huge part of it is the incomparable beauty you can encounter every day.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-12 col-md-6">
                    <div class="card">
                      <div class="blog-box blog-list row">
                        <div class="col-xl-6 col-12">
                          <div class="blog-wrraper"><router-link to="/blog/single"> <img class="img-fluid sm-100-w p-0" src="@/assets/images/blog/blog-3.jpg" alt=""></router-link></div>
                        </div>
                        <div class="col-xl-6 col-12">
                          <div class="blog-details">
                            <div class="blog-date"><span>03</span> January 2023</div><router-link to="/learning/details/1">
                              <h6>White color is important.</h6></router-link>
                            <div class="blog-bottom-content">
                              <ul class="blog-social">
                                <li>by: Admin</li>
                                <li>5 Hits</li>
                              </ul>
                              <hr>
                              <p class="mt-0">The simplest things are the most profound. People just don't do it anymore.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import imageMixin from "@/mixins/commen/imageMixin"
export default {
  mixins:[imageMixin],
}
</script>