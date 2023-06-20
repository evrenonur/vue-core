<template>
      <div class="col-md-6">       
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Solid input style</h4>
                  </div>
                  <form class="form theme-form">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput20">Email address</label>
                            <input class="form-control" id="exampleFormControlInput20" type="email" placeholder="name@example.com">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleInputPassword21">Password</label>
                            <input class="form-control" id="exampleInputPassword21" type="password" placeholder="Password">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleInputPassword22">Disabled</label>
                            <input class="form-control" id="exampleInputPassword22" type="text" disabled="" placeholder="Disabled">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlSelect23">Example select</label>
                            <select class="form-select digits" id="exampleFormControlSelect23">
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
                            <label class="form-label" for="exampleFormControlSelect24">Example multiple select</label>
                            <select class="form-select digits" id="exampleFormControlSelect24" multiple="">
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
                            <label class="form-label" for="exampleFormControlTextarea25">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea25" rows="3"></textarea>
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