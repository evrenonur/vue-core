<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Blockquotes</h4><span>Add a <code>&lt;footer class="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the source work in <code>&lt;cite&gt;</code>.</span>
                  </div>
                  <div class="card-body">
                    <p class="sub-title">Naming a source</p>
                    <div class="figure d-block">
                      <blockquote class="blockquote mb-0">
                        <p class="mb-0">{{desc}}</p>
                      </blockquote>
                      <div class="blockquote-footer mt-0">{{footer}} 
                        <cite title="Source Title">{{footer1}}</cite>
                      </div>
                    </div>
                    <p class="sub-title">Alignment Center</p>
                    <div class="figure text-center d-block">
                      <blockquote class="blockquote mb-0">
                        <p class="mb-0">{{desc}}</p>
                      </blockquote>
                      <div class="blockquote-footer mt-0">{{footer}} 
                        <cite title="Source Title">{{footer1}}</cite>
                      </div>
                    </div>
                    <p class="sub-title">Alignment Right</p>
                    <div class="figure text-end d-block">
                      <blockquote class="blockquote mb-0">
                        <p class="mb-0">{{desc}}</p>
                      </blockquote>
                      <div class="blockquote-footer mt-0">{{footer}} 
                        <cite title="Source Title">{{footer1}}</cite>
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
           desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
           footer:"Someone famous in",
           footer1:"Source Title"
        }
    },
    

}
</script>