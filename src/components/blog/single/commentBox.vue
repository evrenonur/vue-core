<template>
     <div class="card comment-box">
                    <div class="card-body"><h4>Comment</h4>
                      <ul>
                        <li >
                          <div class="d-md-flex align-self-center"><img class="align-self-center" src="@/assets/images/blog/comment.jpg" alt="Generic placeholder image">
                            <div class="flex-grow-1">
                              <div class="row">
                                <div class="col-md-4"><router-link to="/users/profile"><h6 class="mt-0">Jolio Mark<span> ( Developer )</span></h6></router-link></div>
                                <div class="col-md-8">
                                  <ul class="comment-social">
                                    <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                    <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <p>The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <ul>
                            <li>
                              <div class="d-md-flex"><img class="align-self-center" src="@/assets/images/blog/9.jpg" alt="Generic placeholder image">
                                <div class="flex-grow-1">
                                  <div class="row">
                                    <div class="col-xl-12"><router-link to="/users/profile"><h6 class="mt-0">Mark Jolio<span> ( Developer )</span></h6></router-link></div>
                                  </div>
                                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div class="d-md-flex"><img class="align-self-center" src="@/assets/images/blog/4.jpg" alt="Generic placeholder image">
                            <div class="flex-grow-1">
                              <div class="row">
                                <div class="col-md-4"><router-link to="/users/profile"> <h6 class="mt-0">Jhon Deo<span> ( Designer )</span></h6></router-link></div>
                                <div class="col-md-8">
                                  <ul class="comment-social">
                                    <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                    <li><i class="icofont icofont-ui-chat"></i>426 Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <p>From the east coast to the west, each river has its own beauty and character. Each river has its own story. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-md-flex"><img class="align-self-center" src="@/assets/images/blog/12.png" alt="Generic placeholder image">
                            <div class="flex-grow-1">
                              <div class="row">
                                <div class="col-md-4"><router-link to="/users/profile"><h6 class="mt-0">Mark Ateer<span> ( Designer )</span></h6></router-link></div>
                                <div class="col-md-8">
                                  <ul class="comment-social">
                                    <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                    <li><i class="icofont icofont-ui-chat"></i>456 Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <p>Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-md-flex"><img class="align-self-center" src="@/assets/images/blog/14.png" alt="Generic placeholder image">
                            <div class="flex-grow-1">
                              <div class="row">
                                <div class="col-md-4"><router-link to="/users/profile"><h6 class="mt-0 text-start">Greg Arias<span> ( Designer )</span></h6></router-link></div>
                                <div class="col-md-8">
                                  <ul class="comment-social">
                                    <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                    <li><i class="icofont icofont-ui-chat"></i>123 Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <p>Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County.but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
      computed: {
    ...mapState({
      blog:(state)=>state.blog.single,
         
    }),
  },
 
}
</script>