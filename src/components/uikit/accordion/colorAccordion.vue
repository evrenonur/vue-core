<template>
     <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Color Accordion</h4><span>Add <code>.bg-*</code> class to add background color with card-header.</span>
                  </div>
                  <div class="card-body">
                    <div class="default-according" id="accordion1">
                      <div class="card">
                        <div class="card-header bg-primary" id="headingFour">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 text-white" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">Collapsible Group Item #<span>1</span></button>
                          </h5>
                        </div>
                        <div class="collapse show" id="collapseFour" aria-labelledby="headingOne" data-bs-parent="#accordion1">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header bg-primary" id="headingFive">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Collapsible Group Item #<span>2</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordion1">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header bg-primary" id="headingSix">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Collapsible Group Item #<span>3</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseSix" aria-labelledby="headingSix" data-bs-parent="#accordion1">
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
                    <h4>Color Accordion</h4><span>Add <code>.bg-*</code> class to add background color with card-header.</span>
                  </div>
                  <div class="card-body">
                    <div class="default-according" id="accordion2">
                      <div class="card">
                        <div class="card-header bg-secondary" id="headingseven">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 text-white" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="true">Collapsible Group Item #<span>1</span></button>
                          </h5>
                        </div>
                        <div class="collapse show" id="collapseseven" aria-labelledby="headingOne" data-bs-parent="#accordion2">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header bg-secondary" id="headingeight">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">Collapsible Group Item #<span>2</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseeight" aria-labelledby="headingeight" data-bs-parent="#accordion2">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header bg-secondary" id="headingnine">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">Collapsible Group Item #<span>3</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapsenine" aria-labelledby="headingnine" data-bs-parent="#accordion2">
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