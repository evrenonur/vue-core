<template>
     <div class="col-xl-6 col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Border Radius</h4>
                  </div>
                  <div class="card-body">
                    <pre class="helper-classes">.b-r-0 {
border-radius: 0px !important;
}
.b-r-1 {
border-radius: 1px !important;
}
.b-r-2 {
border-radius: 2px !important;
}
.b-r-3 {
border-radius: 3px !important;
}
.b-r-4 {
border-radius: 4px !important;
}
.b-r-5 {
border-radius: 5px !important;
}
.b-r-6 {
border-radius: 6px !important;
}
.b-r-7 {
border-radius: 7px !important;
}
.b-r-8 {
border-radius: 8px !important;
}
.b-r-9 {
border-radius: 9px !important;
}
.b-r-10 {
border-radius: 10px !important;
}</pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Font Weight</h4>
                  </div>
                  <div class="card-body">
                    <pre class="helper-classes">.f-w-100 {
font-weight: 100;
}
.f-w-300 {
font-weight: 300;
}
.f-w-400 {
font-weight: 400;
}
.f-w-600 {
font-weight: 600;
}
.f-w-700 {
font-weight: 700;
}
.f-w-900 {
font-weight: 900;
}</pre>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Font Style</h4>
                  </div>
                  <div class="card-body">
                    <pre class="helper-classes">.f-s-normal {
font-style: normal;
}
.f-s-italic {
font-style: italic;
}
.f-s-oblique {
font-style: oblique;
}
.f-s-initial {
font-style: initial;
}
.f-s-inherit {
font-style: inherit;
}</pre>
                  </div>
                </div>
               
                <floatOverflow/>
              </div>
</template>
<script>
import floatOverflow from "./floatOverflow.vue"
export default {
    components:{
        floatOverflow
    }
}
</script>