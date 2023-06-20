<template>
     <div class="col-md-6">      
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Raise input style</h4>
                  </div>
                  <form class="form theme-form">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput15">Email address</label>
                            <input class="form-control input-air-primary" id="exampleFormControlInput15" type="email" placeholder="name@example.com">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleInputPassword16">Password</label>
                            <input class="form-control input-air-primary" id="exampleInputPassword16" type="password" placeholder="Password">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleInputPassword22">Disabled</label>
                            <input class="form-control input-air-primary" id="exampleInputPassword16" type="text" disabled="" placeholder="Disabled">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlSelect17">Example select</label>
                            <select class="form-select input-air-primary digits" id="exampleFormControlSelect17">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlSelect18">Example multiple select</label>
                            <select class="form-select input-air-primary digits" id="exampleFormControlSelect18" multiple="">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div>
                            <label class="form-label" for="exampleFormControlTextarea19">Example textarea</label>
                            <textarea class="form-control input-air-primary" id="exampleFormControlTextarea19" rows="3"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-end">
                      <button class="btn btn-primary" type="submit" @click.prevent="_blank">Submit</button>
                      <input class="btn btn-light ms-2" type="reset" value="Cancel">
                    </div>
                  </form>
                </div>
              </div>
</template>