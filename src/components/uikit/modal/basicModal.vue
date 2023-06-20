<template>
      <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0"><h4>Basic Modal</h4></div>
                  <div class="card-body"> 
                    <div class="btn-showcase">
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-original-title="test" data-bs-target="#exampleModal">Simple</button>
                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                              <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Close</button>
                              <button class="btn btn-secondary" type="button">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Scrolling long content</button>
                      <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header"><h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p class="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            </div>
                            <div class="modal-footer">
                              <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                              <button class="btn btn-primary" type="button">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Vertically centered</button>
                      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenter" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header"><h5 class="modal-title">Modal title</h5>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <p class="mb-0">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div>
                            <div class="modal-footer">
                              <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                              <button class="btn btn-primary" type="button">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#tooltipmodal">Tooltips and popovers</button>
                      <div class="modal fade" id="tooltipmodal" tabindex="-1" role="dialog" aria-labelledby="tooltipmodal" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header"><h5 class="modal-title">Modal title</h5>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5>Popover in a modal</h5>
                              <p class="mb-0">This <a class="btn btn-primary popover-test" href="#" role="button" title="" data-content="Popover body content is set in this attribute." data-container="#exampleModalPopovers" data-original-title="Popover title">button</a> triggers a popover on click.</p>
                              <hr>
                              <h5>Tooltips in a modal</h5>
                              <p class="mb-0"><a class="tooltip-test" href="#" title="" data-container="#exampleModalPopovers" data-original-title="Tooltip">This link</a> and <a class="tooltip-test" href="#" title="" data-container="#exampleModalPopovers" data-original-title="Tooltip">that link</a> have tooltips on hover.</p>
                            </div>
                            <div class="modal-footer">
                              <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                              <button class="btn btn-primary" type="button">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <gridModal/>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import gridModal from "./gridModal.vue"
export default {
    components:{
        gridModal
    }
}
</script>