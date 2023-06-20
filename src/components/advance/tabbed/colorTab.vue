<template>
      <div class="col-xl-6 xl-100 col-lg-12 box-col-12">
                <div class="card">
                  <div class="card-header border-bottom-light">
                    <h4 class="pull-left">Color Tab</h4>
                  </div>
                  <div class="card-body">
                    <div class="tabbed-card">
                      <ul class="pull-right nav nav-pills nav-success" id="pills-clrtabinfo" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="pills-clrhome-tabinfo" data-bs-toggle="pill" href="#pills-clrhomeinfo" role="tab" aria-controls="pills-clrhome" aria-selected="true">Home</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-clrprofile-tabinfo" data-bs-toggle="pill" href="#pills-clrprofileinfo" role="tab" aria-controls="pills-clrprofile" aria-selected="false">Profile</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-clrcontact-tabinfo" data-bs-toggle="pill" href="#pills-clrcontactinfo" role="tab" aria-controls="pills-clrcontact" aria-selected="false">Contact</a></li>
                      </ul>
                      <div class="tab-content" id="pills-clrtabContentinfo">
                        <div class="tab-pane fade show active" id="pills-clrhomeinfo" role="tabpanel" aria-labelledby="pills-clrhome-tabinfo">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                        <div class="tab-pane fade" id="pills-clrprofileinfo" role="tabpanel" aria-labelledby="pills-clrprofile-tabinfo">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                        <div class="tab-pane fade" id="pills-clrcontactinfo" role="tabpanel" aria-labelledby="pills-clrcontact-tabinfo">
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
                    <h4 class="pull-left">Color Option</h4>
                  </div>
                  <div class="card-body">
                    <div class="tabbed-card">
                      <ul class="pull-right nav nav-pills nav-info" id="pills-clrtabsuccess" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="pills-clrhome-tabsuccess" data-bs-toggle="pill" href="#pills-clrhomesuccess" role="tab" aria-controls="pills-clrhome" aria-selected="true"><i class="icofont icofont-ui-home"></i>Home</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-clrprofile-tabsuccess" data-bs-toggle="pill" href="#pills-clrprofilesuccess" role="tab" aria-controls="pills-clrprofile" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-clrcontact-tabsuccess" data-bs-toggle="pill" href="#pills-clrcontactsuccess" role="tab" aria-controls="pills-clrcontact" aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                      </ul>
                      <div class="tab-content" id="pills-clrtabContentsuccess">
                        <div class="tab-pane fade show active" id="pills-clrhomesuccess" role="tabpanel" aria-labelledby="pills-clrhome-tabsuccess">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                        <div class="tab-pane fade" id="pills-clrprofilesuccess" role="tabpanel" aria-labelledby="pills-clrprofile-tabsuccess">
                          <p class="mb-0">{{desc}}</p>
                        </div>
                        <div class="tab-pane fade" id="pills-clrcontactsuccess" role="tabpanel" aria-labelledby="pills-clrcontact-tabsuccess">
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