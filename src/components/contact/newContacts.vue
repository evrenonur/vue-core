<template>
     <div class="modal fade modal-bookmark" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Add Contact</h5>
                                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate="">
                                          <div class="row g-2">
                                            <div class="mb-3 col-md-12 mt-0">
                                              <label for="con-name">Name</label>
                                              <div class="row">
                                                <div class="col-sm-6">
                                                  <input class="form-control" id="con-name" type="text"  required="" placeholder="First Name" autocomplete="off">
                                                </div>
                                                <div class="col-sm-6">   
                                                  <input class="form-control" id="con-last" type="text"  required="" placeholder="Last Name" autocomplete="off">
                                                </div>
                                              </div>
                                            </div>
                                            <div class="mb-3 col-md-12 mt-0">
                                              <label for="con-mail">Email Address</label>
                                              <input class="form-control" id="con-mail" type="text" required="" autocomplete="off">
                                            </div>
                                            <div class="mb-3 col-md-12 my-0">
                                              <label for="con-phone">Phone</label>
                                              <div class="row">
                                                <div class="col-sm-6">
                                                  <input class="form-control" id="con-phone"  type="number" required="" autocomplete="off">
                                                </div>
                                                <div class="col-sm-6">
                                                  <select class="form-control" id="con-select">
                                                    <option>Mobile</option>
                                                    <option>Work</option>
                                                    <option>Others</option>
                                                  </select>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <input id="index_var" type="hidden" value="5">
                                          <button class="btn btn-secondary" type="button" >Save</button>
                                          <button class="btn btn-primary ms-2" type="button" data-bs-dismiss="modal">Cancel</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
</template>
<script>
export default {
 
}
</script>