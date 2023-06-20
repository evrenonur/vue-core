<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Additional content</h4><span>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</span>
                  </div>
                  <div class="card-body">
                    <div class="alert alert-primary" role="alert">
                      <h4 class="alert-heading">{{done}}</h4>
                      <p>{{desc}}</p>
                      <hr>
                      <p class="mb-0">{{content}}</p>
                    </div>
                    <div class="alert alert-secondary" role="alert">
                      <h4 class="alert-heading">{{done}}</h4>
                      <p>{{desc}}</p>
                      <hr>
                      <p class="mb-0">{{content}}</p>
                    </div>
                    <div class="alert alert-success" role="alert">
                      <h4 class="alert-heading">{{done}}</h4>
                      <p>{{desc}}</p>
                      <hr>
                      <p class="mb-0">{{content}}</p>
                    </div>
                    <div class="alert alert-danger" role="alert">
                      <h4 class="alert-heading">{{done}}</h4>
                      <p>{{desc}}</p>
                      <hr>
                      <p class="mb-0">{{content}}</p>
                    </div>
                    <div class="alert alert-info" role="alert">
                      <h4 class="alert-heading">{{done}}</h4>
                      <p>{{desc}}</p>
                      <hr>
                      <p class="mb-0">{{content}}</p>
                    </div>
                    <div class="alert alert-light" role="alert">
                      <h4 class="alert-heading">{{done}}</h4>
                      <p>{{desc}}</p>
                      <hr>
                      <p class="mb-0">{{content}}</p>
                    </div>
                    <div class="alert alert-dark" role="alert">
                      <h4 class="alert-heading">{{done}}</h4>
                      <p>{{desc}}</p>
                      <hr>
                      <p class="mb-0">{{content}}</p>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
    data(){
        return{
            done:"Well done!",
            desc:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
            content:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        }
    }
}
</script>