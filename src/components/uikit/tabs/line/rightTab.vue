<template>
     <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Material style right tab</h4><span>Add <code>.border-tab</code> class with nav class</span>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-9">
                        <div class="tab-content text-end" id="v-pills-right-tabContent">
                          <div class="tab-pane fade show active" id="v-pills-right-home" role="tabpanel" aria-labelledby="v-pills-right-home-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-right-profile" role="tabpanel" aria-labelledby="v-pills-right-profile-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-right-messages" role="tabpanel" aria-labelledby="v-pills-right-messages-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                          <div class="tab-pane fade" id="v-pills-right-settings" role="tabpanel" aria-labelledby="v-pills-right-settings-tab">
                            <p class="mb-0">{{desc}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3 tabs-responsive-side">
                        <div class="nav flex-column border-tab nav-right" id="v-pills-right-tab" role="tablist" aria-orientation="vertical"><a class="nav-link active" id="v-pills-right-home-tab" data-bs-toggle="pill" href="#v-pills-right-home" role="tab" aria-controls="v-pills-right-home" aria-selected="true">Home</a><a class="nav-link" id="v-pills-right-profile-tab" data-bs-toggle="pill" href="#v-pills-right-profile" role="tab" aria-controls="v-pills-right-profile" aria-selected="false">Profile</a><a class="nav-link" id="v-pills-right-messages-tab" data-bs-toggle="pill" href="#v-pills-right-messages" role="tab" aria-controls="v-pills-right-messages" aria-selected="false">Inbox</a><a class="nav-link" id="v-pills-right-settings-tab" data-bs-toggle="pill" href="#v-pills-right-settings" role="tab" aria-controls="v-pills-right-settings" aria-selected="false">Settings</a></div>
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