<template>
     <div class="col-xl-12">
                    <div class="card">
                      <div class="card-header pb-0">
                        <h4>Inline Form</h4><span>Use<code>.form-inline</code>class in the form to style with inline fields.</span>
                      </div>
                      <div class="card-body">
                        <h6>Inline Form with Label</h6>
                        <form class="row theme-form mt-3">
                          <div class="col-xxl-4 mb-3 d-flex">
                            <label class="col-form-label pe-2" for="inputInlineUsername">Username</label>
                            <input class="form-control" id="inputInlineUsername" type="text" name="inputUsername" placeholder="Username" autocomplete="off">
                          </div>
                          <div class="col-xxl-4 mb-3 d-flex">
                            <label class="col-form-label pe-2" for="inputInlinePassword">Password</label>
                            <input class="form-control" id="inputInlinePassword" type="password" name="inputPassword" placeholder="Password" autocomplete="off">
                          </div>
                          <div class="col-xxl-4 mb-3 d-flex">
                            <button class="btn btn-primary" @click.prevent="_blank">Login</button>
                          </div>
                        </form>
                        <h6>Inline Form without Label</h6>
                        <form class="row row-cols-sm-3 theme-form mt-3 form-bottom">
                          <div class="mb-3 d-flex">
                            <input class="form-control" type="text" name="inputUnlabelUsername" placeholder="Username" autocomplete="off">
                          </div>
                          <div class="mb-3 d-flex">
                            <input class="form-control" id="inputUnlabelPassword" type="password" name="inputPassword" placeholder="Password" autocomplete="off">
                          </div>
                          <div class="mb-3 d-flex">
                            <button class="btn btn-secondary" @click.prevent="_blank">Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
</template>