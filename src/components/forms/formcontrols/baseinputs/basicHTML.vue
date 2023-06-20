<template>
     <div class="card">
                  <div class="card-header pb-0"> <h4>Basic HTML input control</h4> </div>
                  <form class="form theme-form">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Simple Input</label>
                            <div class="col-sm-9"><input class="form-control" type="text"></div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Placeholder</label>
                            <div class="col-sm-9"><input class="form-control" type="text" placeholder="Type your title in Placeholder"></div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Password</label>
                            <div class="col-sm-9"><input class="form-control" type="password" placeholder="Password input"></div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Number</label>
                            <div class="col-sm-9">
                              <input class="form-control digits" type="number" placeholder="Number">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Telephone</label>
                            <div class="col-sm-9">
                              <input class="form-control m-input digits" type="tel" value="91-(999)-999-999" placeholder="91-(999)-999-999">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">URL</label>
                            <div class="col-sm-9">
                              <input class="form-control" type="url" value="https://getbootstrap.com">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Date and time</label>
                            <div class="col-sm-9">
                              <input class="form-control digits" id="example-datetime-local-input" type="datetime-local" value="2021-01-19T18:45:00">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Date</label>
                            <div class="col-sm-9">
                              <input class="form-control digits" type="date" value="2021-01-01">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Month</label>
                            <div class="col-sm-9">
                              <input class="form-control digits" type="month" value="2021-01">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Week</label>
                            <div class="col-sm-9">
                              <input class="form-control digits" type="week" value="2021-W09">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label">Time</label>
                            <div class="col-sm-9">
                              <input class="form-control digits" type="time" value="21:45:00">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label pt-0">Color picker</label>
                            <div class="col-sm-9">
                              <input class="form-control form-control-color" type="color" value="#0b5ed7">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label"> Maximum Length</label>
                            <div class="col-sm-9">
                              <input class="form-control" type="text" placeholder="Content must be in 6 characters" maxlength="6">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label class="col-sm-3 col-form-label pt-0">Static Text</label>
                            <div class="col-sm-9">
                              <div class="form-control-static"> Hello !... This is static text</div>
                            </div>
                          </div>
                          <div class="row">
                            <label class="col-sm-3 col-form-label">Textarea</label>
                            <div class="col-sm-9">
                              <textarea class="form-control" rows="5" cols="5" placeholder="Default textarea"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-end">
                      <div class="col-sm-9 offset-sm-3">
                        <button class="btn btn-primary" type="submit" @click.prevent="_blank">Submit</button>
                        <input class="btn btn-light ms-2" type="reset" value="Cancel">
                      </div>
                    </div>
                  </form>
                </div>
</template>