<template>
     <div class="col-xl-6 xl-100 col-lg-12 box-col-12">
                <div class="card">
                  <div class="card-header border-bottom-light">
                    <h4 class="pull-left">Material tab with color</h4>
                  </div>
                  <div class="card-body">
                    <div class="tabbed-card">
                      <ul class="pull-right nav nav-tabs border-tab nav-secondary" id="top-tabsecondary" role="tablist">
                        <li class="nav-item"><a class="nav-link" id="top-home-secondary" data-bs-toggle="tab" href="#top-homesecondary" role="tab" aria-controls="top-home" aria-selected="false"><i class="icofont icofont-ui-home"></i>Home</a></li>
                        <li class="nav-item"><a class="nav-link active" id="profile-top-secondary" data-bs-toggle="tab" href="#top-profilesecondary" role="tab" aria-controls="top-profilesecondary" aria-selected="true"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                        <li class="nav-item"><a class="nav-link" id="contact-top-secondary" data-bs-toggle="tab" href="#top-contactsecondary" role="tab" aria-controls="top-contactsecondary" aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                      </ul>
                      <div class="tab-content" id="top-tabContentsecondary">
                        <div class="tab-pane fade" id="top-homesecondary" role="tabpanel" aria-labelledby="top-home-tab">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                        <div class="tab-pane fade active show" id="top-profilesecondary" role="tabpanel" aria-labelledby="profile-top-tab">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                        <div class="tab-pane fade" id="top-contactsecondary" role="tabpanel" aria-labelledby="contact-top-tab">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 xl-100 col-lg-12 box-col-12">
                <div class="card">
                  <div class="card-header border-bottom-light">
                    <h4 class="pull-left">Material tab with color</h4>
                  </div>
                  <div class="card-body">
                    <div class="tabbed-card">
                      <ul class="pull-right nav nav-tabs border-tab nav-success" id="top-tabdanger" role="tablist">
                        <li class="nav-item"><a class="nav-link" id="top-home-danger" data-bs-toggle="tab" href="#top-homedanger" role="tab" aria-controls="top-homedanger" aria-selected="false"><i class="icofont icofont-ui-home"></i>Home</a></li>
                        <li class="nav-item"><a class="nav-link active" id="profile-top-danger" data-bs-toggle="tab" href="#top-profiledanger" role="tab" aria-controls="top-profiledanger" aria-selected="true"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                        <li class="nav-item"><a class="nav-link" id="contact-top-danger" data-bs-toggle="tab" href="#top-contactdanger" role="tab" aria-controls="top-contactdanger" aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                      </ul>
                      <div class="tab-content" id="top-tabContentdanger">
                        <div class="tab-pane fade" id="top-homedanger" role="tabpanel" aria-labelledby="top-home-tab">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                        <div class="tab-pane fade active show" id="top-profiledanger" role="tabpanel" aria-labelledby="profile-top-tab">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                        <div class="tab-pane fade" id="top-contactdanger" role="tabpanel" aria-labelledby="contact-top-tab">
                          <p class="mb-0">{{desc}}</p>
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