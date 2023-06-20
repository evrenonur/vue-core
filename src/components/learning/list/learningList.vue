<template>
     <div class="col-xxl-9 col-xl-8 box-col-8">
					<div class="row">
						<div class="col-xl-12 col-sm-6" v-for="(course,index) in specialcourses" :key="'special'+index">
							<div class="card">
								<div class="blog-box blog-list row">
									<div class="col-xl-5 col-12"><img class="img-fluid sm-100-w" :src="getImgUrl(course.image)" alt=""></div>
									<div class="col-sm-7 col-12">
										<div class="blog-details">
											<div class="blog-date digits"><span v-text="course.dd"></span> {{ course.mm }} {{ course.yy }}</div>
											<h6 v-text="course.title"></h6>
											<div class="blog-bottom-content">
												<ul class="blog-social">
													<li v-text="' by: '+course.author"></li>
													<li class="digits" v-text="course.hits+' Hits'"></li>
												</ul>
												<hr>
												<p class="mt-0" v-text="course.descr"></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-4 xl-50 col-sm-6 box-col-6" v-for="(course,index) in normalcourses" :key="'normal'+index">
							<div class="card">
								<div class="product-box learning-box">
									<div class="product-img"><img class="img-fluid top-radius-blog" :src="getImgUrl(course.image)" alt="">
										<div class="product-hover">
											<ul>
												<li>
												<router-link :to="{ name: 'coursedetailed', params:{ id: course.id } }" ><i class="icon-link"></i> </router-link>									
												</li>
												<li><i class="icon-import"></i></li>
											</ul>
										</div>
									</div>
							<div class="details-main"><router-link  to="/learning/details/1">                                       
                            <div class="bottom-details"> 
                              <h6 v-text="course.title"></h6>
                            </div></router-link>
                          <p v-text="course.descr"></p>
                        </div>
								</div>
							</div>
						</div>

					</div>
				</div>
</template>
<script>

 import { mapGetters } from 'vuex';
export default {
	components:{
		
	},
     computed: {
      ...mapGetters({
        specialcourses:'courses/specialcourses',
        normalcourses:'courses/normalcourses'
      })
    },
    methods:{
      getImgUrl(filename) {
        var images = require.context('@/assets/images/faq/', false, /\.jpg$/);
        return images('./' + filename);
      }
    }
}
</script>