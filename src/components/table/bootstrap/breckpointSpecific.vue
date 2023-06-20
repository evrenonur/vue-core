<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Breckpoint Specific</h5><span>Use  <code>.table-responsive{-sm|-md|-lg|-xl}</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</span>
                  </div>
                  <div class="card-block row">
                    <div class="col-sm-12 col-lg-12 col-xl-12">
                      <div class="table-responsive theme-scrollbar">
                        <table class="table table-responsive-sm">
                          <thead>
                            <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Name</th>
                              <th scope="col">Order Id</th> 
                              <th scope="col">Price</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in breckpointSpecific" :key="item">
                               <th scope="row">{{item.id}}</th>
                              <td v-for="i in item.data" :key="i">{{i}}</td>
                            </tr>
                          </tbody>
                        </table>
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
            breckpointSpecific:[
                 {
    id: 1,
    data: ["Iphone X Grey","C12345", "$12550", "1",  "$12550", ]
  },
  {
    id: 2,
    data: ["Titan Watch","A14725", "$120", "2", "$240", ]
  },
  {
    id: 3,
    data: ["Apple Airpods","B54213", "$210", "1", "$210",]
  }
            ]
        }
    }
}
</script>