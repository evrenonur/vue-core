<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Varying modal content</h4>
                  </div>
                  <div class="card-body">
                    <div class="btn-showcase">
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalfat" data-whatever="@mdo">Open modal for @mdo</button>
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalmdo" data-whatever="@fat">Open modal for @fat</button>
                      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalgetbootstrap" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
                      <div class="modal fade" id="exampleModalfat" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel2">New message</h5>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form>
                                <div class="mb-3">
                                  <label class="col-form-label" for="recipient-name">Recipient:</label>
                                  <input class="form-control" type="text" value="@fat">
                                </div>
                                <div class="mb-3">
                                  <label class="col-form-label" for="message-text">Message:</label>
                                  <textarea class="form-control" id="message-text"></textarea>
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                              <button class="btn btn-primary" type="button">Send message</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal fade" id="exampleModalmdo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">New message</h5>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form>
                                <div class="mb-3">
                                  <label class="col-form-label" for="recipient-name">Recipient:</label>
                                  <input class="form-control" id="recipient-name" type="text" value="@Mat">
                                </div>
                                <div class="mb-3">
                                  <label class="col-form-label" for="message-text">Message:</label>
                                  <textarea class="form-control"></textarea>
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                              <button class="btn btn-primary" type="button">Send message</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal fade" id="exampleModalgetbootstrap" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">New message</h5>
                              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form>
                                <div class="mb-3">
                                  <label class="col-form-label" for="recipient-name">Recipient:</label>
                                  <input class="form-control" type="text" value="@getbootstrap">
                                </div>
                                <div class="mb-3">
                                  <label class="col-form-label" for="message-text">Message:</label>
                                  <textarea class="form-control"></textarea>
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                              <button class="btn btn-primary" type="button">Send message</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>