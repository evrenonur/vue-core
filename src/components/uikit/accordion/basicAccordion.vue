<template>
    <div class="col-sm-12 col-xl-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Basic Accordion</h4><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                  </div>
                  <div class="card-body">
                    <div class="default-according" id="accordion">
                      <div class="card">
                        <div class="card-header" id="headingOne">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #<span>1</span></button>
                          </h5>
                        </div>
                        <div class="collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordion">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingTwo">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Collapsible Group Item #<span>2</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                          <div class="card-body">{{desc}}</div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingThree">
                          <h5 class="mb-0">
                            <button class="btn btn-link ps-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Collapsible Group Item #<span>3</span></button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordion">
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
           desc:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
        }
    },
    

}
</script>