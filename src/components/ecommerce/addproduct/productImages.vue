<template>
     <div class="col-xl-6">
                <div class="card"> 
                  <div class="card-body">
                    <div class="product-info">
                      <h5>Product Image</h5>
                      <dropZone/>
                      <h5 class="mt-4">Select Size</h5>
                      <form>
                        <div class="product-group">
                          <div class="row"> 
                            <div class="col-sm-6"> 
                              <div class="mb-3">  
                                <label class="form-label">Size</label>
                                <select class="form-select">
                                  <option>S </option>
                                  <option>M </option>
                                  <option>L </option>
                                  <option>XL </option>
                                  <option>XXL</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-sm-6"> 
                              <div class="mb-3">  
                                <label class="form-label">Date</label>
                                <input class="form-control" type="date">
                              </div>
                            </div>
                          </div>
                          <div class="row"> 
                            <div class="col-sm-12">
                              <div class="mb-3">  
                                <label class="form-label">Price</label>
                                <input class="form-control" type="number">
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="mt-4">
                      <div class="row"> 
                        <div class="col-sm-12 text-end"><router-link class="btn btn-primary me-3" to="/ecommerce/product"> ADD </router-link><a class="btn btn-secondary">Cancel</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import dropZone from "@/components/common/dropZone.vue"
export default {
    components:{
        dropZone
    }
}
</script>