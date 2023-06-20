<template>
     <div class="card">
                  <div class="card-header pb-0">
                    <h4>Basic form control</h4>
                  </div>
                  <form class="form theme-form">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput1">Email address</label>
                            <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="name@example.com">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleInputPassword2">Password</label>
                            <input class="form-control" id="exampleInputPassword2" type="password" placeholder="Password">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlSelect9">Example select</label>
                            <select class="form-select digits" id="exampleFormControlSelect9">
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
                            <label class="form-label" for="exampleFormControlSelect3">Example multiple select</label>
                            <select class="form-select digits" id="exampleFormControlSelect3" multiple="">
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
                            <label class="form-label" for="exampleFormControlTextarea4">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
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
45 Sales
</template>