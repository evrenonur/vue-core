<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Contextual classes</h5><span>Use contextual classes to color table rows or individual cells. you may use Classes <code>table-primary</code>,<code>table-secondary</code>,<code>table-success</code>,<code>table-info</code>,<code>table-warning</code>,<code>table-danger</code>,<code>table-light</code>,<code>table-active</code> in<code>tr</code></span>
                  </div>
                  <div class="table-responsive theme-scrollbar">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Class</th>
                          <th scope="col">Heading</th>
                          <th scope="col">Heading</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr :class="data.status" v-for="data in contextual" :key="data">
                          <th scope="row">{{data.color}}</th>
                          <td>Cell</td>
                          <td>Cell</td>
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
            contextual:[
                {color:"Primary",status:"table-primary"},
                {color:"Secondary",status:"table-secondary"},
                {color:"Success",status:"table-success"},
                {color:"Info",status:"table-info"},
                {color:"Warning",status:"table-warning"},
                {color:"Danger",status:"table-danger"},
                {color:"Light",status:"table-light"},
                {color:"Active",status:"table-active"},
            ]
        }
    }
}
</script>