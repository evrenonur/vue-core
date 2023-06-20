<template>
     <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Material color tab</h4><span>Add <code>.nav-primary</code> class with nav class</span>
                  </div>
                  <div class="card-body">
                    <ul class="nav nav-tabs border-tab nav-primary" id="info-tab" role="tablist">
                      <li class="nav-item"><a class="nav-link active" id="info-home-tab" data-bs-toggle="tab" href="#info-home" role="tab" aria-controls="info-home" aria-selected="true"><i class="icofont icofont-ui-home"></i>Home</a></li>
                      <li class="nav-item"><a class="nav-link" id="profile-info-tab" data-bs-toggle="tab" href="#info-profile" role="tab" aria-controls="info-profile" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                      <li class="nav-item"><a class="nav-link" id="contact-info-tab" data-bs-toggle="tab" href="#info-contact" role="tab" aria-controls="info-contact" aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                    </ul>
                    <div class="tab-content" id="info-tabContent">
                      <div class="tab-pane fade show active" id="info-home" role="tabpanel" aria-labelledby="info-home-tab">
                        <p class="mb-0">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="info-profile" role="tabpanel" aria-labelledby="profile-info-tab">
                        <p class="mb-0">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="info-contact" role="tabpanel" aria-labelledby="contact-info-tab">
                        <p class="mb-0">{{desc}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Material color tab</h4><span>Add <code>.nav-secondary</code> class with nav class</span>
                  </div>
                  <div class="card-body">
                    <ul class="nav nav-tabs border-tab nav-secondary nav-left" id="danger-tab" role="tablist">
                      <li class="nav-item"><a class="nav-link active" id="danger-home-tab" data-bs-toggle="tab" href="#danger-home" role="tab" aria-controls="danger-home" aria-selected="true"><i class="icofont icofont-ui-home"></i>Home</a></li>
                      <li class="nav-item"><a class="nav-link" id="profile-danger-tab" data-bs-toggle="tab" href="#danger-profile" role="tab" aria-controls="danger-profile" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                      <li class="nav-item"><a class="nav-link" id="contact-danger-tab" data-bs-toggle="tab" href="#danger-contact" role="tab" aria-controls="danger-contact" aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                    </ul>
                    <div class="tab-content" id="danger-tabContent">
                      <div class="tab-pane fade show active" id="danger-home" role="tabpanel" aria-labelledby="danger-home-tab">
                        <p class="mb-0">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="danger-profile" role="tabpanel" aria-labelledby="profile-danger-tab">
                        <p class="mb-0">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="danger-contact" role="tabpanel" aria-labelledby="contact-danger-tab">
                        <p class="mb-0">{{desc}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Material style left tab</h4><span>Add <code>.nav-success</code> class with nav class</span>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3 tabs-responsive-side">
                        <div class="nav flex-column nav-success border-tab nav-left" id="v-pills-success-tab" role="tablist" aria-orientation="vertical"><a class="nav-link active" id="v-pills-success-home-tab" data-bs-toggle="pill" href="#v-pills-success-home" role="tab" aria-controls="v-pills-success-home" aria-selected="true">Home</a><a class="nav-link" id="v-pills-success-profile-tab" data-bs-toggle="pill" href="#v-pills-success-profile" role="tab" aria-controls="v-pills-success-profile" aria-selected="false">Profile</a><a class="nav-link" id="v-pills-success-messages-tab" data-bs-toggle="pill" href="#v-pills-success-messages" role="tab" aria-controls="v-pills-success-messages" aria-selected="false">Inbox</a><a class="nav-link" id="v-pills-success-settings-tab" data-bs-toggle="pill" href="#v-pills-success-settings" role="tab" aria-controls="v-pills-success-settings" aria-selected="false">Settings</a></div>
                      </div>
                      <div class="col-sm-9">
                        <div class="tab-content" id="v-pills-success-tabContent">
                          <div class="tab-pane fade show active" id="v-pills-success-home" role="tabpanel" aria-labelledby="v-pills-success-home-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-success-profile" role="tabpanel" aria-labelledby="v-pills-success-profile-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-success-messages" role="tabpanel" aria-labelledby="v-pills-success-messages-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-success-settings" role="tabpanel" aria-labelledby="v-pills-success-settings-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
</template>
<script>
export default {
    data(){
        return{
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
    }
}
</script>