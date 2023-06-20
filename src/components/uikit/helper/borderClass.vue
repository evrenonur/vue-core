<template>
     <div class="col-xl-6 col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Border Width</h4>
                  </div>
                  <div class="card-body">
                    <pre class="helper-classes">.border-1 {
border-width: 1px !important;
}
.border-2 {
border-width: 2px !important;
}
.border-3 {
border-width: 3px !important;
}
.border-4 {
border-width: 4px !important;
}
.border-5 {
border-width: 5px !important;
}
.border-6 {
border-width: 6px !important;
}
.border-7 {
border-width: 7px !important;
}
.border-8 {
border-width: 8px !important;
}
.border-9 {
border-width: 9px !important;
}
.border-10 {
border-width: 10px !important;
}</pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Position</h4>
                  </div>
                  <div class="card-body">
                    <pre class="helper-classes">.p-static {
position: static;
}
.p-absolute {
position: absolute;
}
.p-fixed {
position: fixed;
}
.p-relative {
position: relative;
}
.p-initial {
position: initial;
}
.p-inherit {
position: inherit;
}</pre>
                  </div>
                </div>
               
                <buttonOutline/>
              </div>
</template>
<script>
import buttonOutline from "./buttonOutline.vue"
export default {
    components:{
        buttonOutline
    }
}
</script>