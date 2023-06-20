<template>
     <div class="col-md-6">      
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Flat input style</h4>
                  </div>
                  <form class="form theme-form">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlInput10">Email address</label>
                            <input class="form-control btn-square" id="exampleFormControlInput10" type="email" placeholder="name@example.com">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleInputPassword11">Password</label>
                            <input class="form-control btn-square" id="exampleInputPassword11" type="password" placeholder="Password">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label class="form-label" for="exampleFormControlSelect12">Example select</label>
                            <select class="form-select btn-square digits" id="exampleFormControlSelect12">
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
                            <label class="form-label" for="exampleFormControlSelect13">Example multiple select</label>
                            <select class="form-select btn-square digits" id="exampleFormControlSelect13" multiple="">
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
                            <label class="form-label" for="exampleFormControlTextarea14">Example textarea</label>
                            <textarea class="form-control btn-square" id="exampleFormControlTextarea14" rows="3"></textarea>
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