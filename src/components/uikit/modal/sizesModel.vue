<template>
      <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Sizes modal</h4>
                  </div>
                  <div class="card-body"> 
                    <div class="btn-showcase">
                    
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg">Large modal</button>
                      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">...</div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target=".bd-example-modal-sm">Small modal</button>
                      <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">...</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>