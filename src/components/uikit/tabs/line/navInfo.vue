<template>
      <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Material style Right tab</h4><span>Add <code>.nav-info</code> class with nav class</span>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-9">
                        <div class="tab-content text-end" id="v-pills-secondary-tabContent">
                          <div class="tab-pane fade show active" id="v-pills-secondary-home" role="tabpanel" aria-labelledby="v-pills-secondary-home-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-secondary-profile" role="tabpanel" aria-labelledby="v-pills-secondary-profile-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-secondary-messages" role="tabpanel" aria-labelledby="v-pills-secondary-messages-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-secondary-settings" role="tabpanel" aria-labelledby="v-pills-secondary-settings-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3 tabs-responsive-side">
                        <div class="nav flex-column nav-info border-tab nav-right" id="v-pills-secondary-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-secondary-home-tab" data-bs-toggle="pill" href="#v-pills-secondary-home" role="tab" aria-controls="v-pills-secondary-home" aria-selected="true">Home</a>
                            <a class="nav-link" id="v-pills-secondary-profile-tab" data-bs-toggle="pill" href="#v-pills-secondary-profile" role="tab" aria-controls="v-pills-secondary-profile" aria-selected="false">Profile</a>
                            <a class="nav-link" id="v-pills-secondary-messages-tab" data-bs-toggle="pill" href="#v-pills-secondary-messages" role="tab" aria-controls="v-pills-secondary-messages" aria-selected="false">Inbox</a>
                            <a class="nav-link" id="v-pills-secondary-settings-tab" data-bs-toggle="pill" href="#v-pills-secondary-settings" role="tab" aria-controls="v-pills-secondary-settings" aria-selected="false">Settings</a>
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