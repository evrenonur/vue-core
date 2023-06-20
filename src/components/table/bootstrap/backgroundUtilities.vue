<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Text or background utilities</h5><span>Regular table background variants are not available with the inverse table, however, you may use Classes <code>bg-dark</code>,<code>bg-warning</code>,<code>bg-success</code>,<code>bg-info</code>,<code>bg-danger</code>,<code>bg-primary</code>,<code>bg-secondary</code>,<code>bg-light</code> in<code>td</code></span>
                  </div>
                  <div class="table-responsive theme-scrollbar">
                    <table class="table table-borderedfor">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr :class="data.status" v-for="data in textOrBgUtilities" :key="data">
                          <td  :class="data.color">{{data.id}}</td>
                          <td :class="data.color">{{data.color1}}</td>
                          <td :class="data.color">{{data.color1}}</td>
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
      data(){
        return{
            textOrBgUtilities:[
                {id:1,color:"bg-primary",color1:"primary",status:"table-active"},
                {id:2,color:"bg-secondary",color1:"secondary",status:"table-active"},
                {id:3,color:"bg-success",color1:"success"},
                {id:4,color:"bg-info",color1:"info"},
                {id:5,color:"bg-warning",color1:"warning"},
                {id:6,color:"bg-danger",color1:"danger"},
                {id:7,color:"bg-light",color1:"light",status:"table-active"},
               
            ]
        }
    }
}
</script>