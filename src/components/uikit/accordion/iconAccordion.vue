<template>
     <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Accordion With Icon on Title</h4><span>Add <code>&lt;i&gt;&lt;/i&gt;</code> tag Along with icon class before title text.</span>
                  </div>
                  <div class="card-body">
                    <div class="default-according" id="accordionicon">
                      <div class="card">
                        <div class="card-header bg-primary" id="heading11">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 text-white" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11"><i class="icofont icofont-briefcase-alt-2"></i>Collapsible Group Item #<span>1</span></button>
                          </h5>
                        </div>
                        <div class="collapse show" id="collapse11" aria-labelledby="headingOne" data-bs-parent="#accordionicon">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header bg-primary" id="heading22">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22"><i class="icofont icofont-support"></i>Collapsible Group Item #<span>2</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapse22" aria-labelledby="headingeight" data-bs-parent="#accordionicon">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header bg-primary" id="heading33">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#collapse44" aria-expanded="false" aria-controls="collapse44"><i class="icofont icofont-tasks-alt"></i>Collapsible Group Item #<span>3</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapse44" data-bs-parent="#accordionicon">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Accordion open close icon</h4><span>Add <code>&lt;i&gt;&lt;/i&gt;</code> tag Along with icon class before title text.</span>
                  </div>
                  <div class="card-body">
                    <div class="default-according style-1" id="accordionoc">
                      <div class="card">
                        <div class="card-header bg-primary">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 text-white" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="true" aria-controls="collapse11"><i class="icofont icofont-briefcase-alt-2"></i> Collapsible Group Item #<span>1</span></button>
                          </h5>
                        </div>
                        <div class="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-bs-parent="#accordionoc">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header bg-primary">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#collapseicon1" aria-expanded="false"><i class="icofont icofont-support"></i> Collapsible Group Item #<span>2</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon1" aria-labelledby="headingeight" data-bs-parent="#accordionoc">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header bg-primary">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#collapseicon2" aria-expanded="false" aria-controls="collapseicon2"><i class="icofont icofont-tasks-alt"></i> Collapsible Group Item #<span>3</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon2" data-bs-parent="#accordionoc">
                          <div class="card-body">{{desc}}</div>
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
            desc:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        }
    }
}
</script>