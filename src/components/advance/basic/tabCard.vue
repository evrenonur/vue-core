<template>
    <div class="col-xl-6 xl-100 col-lg-12 box-col-12">
        <div class="card">
            <div class="card-header border-bottom-light">
                <h4 class="pull-left">Simple Tab</h4>
            </div>
            <div class="card-body">
                <div class="tabbed-card">
                    <ul class="pull-right nav nav-pills" :class="nav" id="pills-clrtab1" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="pills-clrhome-tab1" data-bs-toggle="pill"
                                href="#pills-clrhome1" role="tab" aria-controls="pills-clrhome1"
                                aria-selected="true">Home</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-clrprofile-tab1" data-bs-toggle="pill"
                                href="#pills-clrprofile1" role="tab" aria-controls="pills-clrprofile1"
                                aria-selected="false">Profile</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-clrcontact-tab1" data-bs-toggle="pill"
                                href="#pills-clrcontact1" role="tab" aria-controls="pills-clrcontact1"
                                aria-selected="false">Contact</a></li>
                    </ul>
                    <div class="tab-content" id="pills-clrtabContent1">
                        <div class="tab-pane fade show active" id="pills-clrhome1" role="tabpanel"
                            aria-labelledby="pills-clrhome-tab1">
                            <p class="mb-0">{{ lon }}</p>
                        </div>
                        <div class="tab-pane fade" id="pills-clrprofile1" role="tabpanel"
                            aria-labelledby="pills-clrprofile-tab1">
                            <p class="mb-0">{{ lon }}</p>
                        </div>
                        <div class="tab-pane fade" id="pills-clrcontact1" role="tabpanel"
                            aria-labelledby="pills-clrcontact-tab1">
                            <p class="mb-0">{{ lon }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6 xl-100 col-lg-12 box-col-12">
        <div class="card">
            <div class="card-header border-bottom-light">
                <h4 class="pull-left">Tab With Icon</h4>
            </div>
            <div class="card-body">
                <div class="tabbed-card">
                    <ul class="pull-right nav nav-pills " :class="color" id="pills-clrtab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="pills-clrhome-tab" data-bs-toggle="pill"
                                href="#pills-clrhome" role="tab" aria-controls="pills-clrhome" aria-selected="true"><i
                                    class="icofont icofont-ui-home"></i>Home</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-clrprofile-tab" data-bs-toggle="pill"
                                href="#pills-clrprofile" role="tab" aria-controls="pills-clrprofile"
                                aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-clrcontact-tab" data-bs-toggle="pill"
                                href="#pills-clrcontact" role="tab" aria-controls="pills-clrcontact"
                                aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                    </ul>
                    <div class="tab-content" id="pills-clrtabContent">
                        <div class="tab-pane fade show active" id="pills-clrhome" role="tabpanel"
                            aria-labelledby="pills-clrhome-tab">
                            <p class="mb-0">{{ lorn }}</p>
                        </div>
                        <div class="tab-pane fade" id="pills-clrprofile" role="tabpanel"
                            aria-labelledby="pills-clrprofile-tab">
                            <p class="mb-0">{{ lorn }}</p>
                        </div>
                        <div class="tab-pane fade" id="pills-clrcontact" role="tabpanel"
                            aria-labelledby="pills-clrcontact-tab">
                            <p class="mb-0">{{ lorn }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
export default {
    data() {
        return {
            nav: "nav-primary",
            color: "nav-secondary",
            lon: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            lorn: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
    }
}
</script>