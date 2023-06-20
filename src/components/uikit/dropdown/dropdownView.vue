<template>
  <div class="col-sm-12 col-xl-6">
    <div class="card">
      <div class="card-header pb-0">
        <h4>Dropdown With Divider</h4><span>Use a class </span>
      </div>
      <div class="card-body">
        <div class="dropdown-basic">
          <div class="dropdown">
            <button class="dropbtn btn-pill btn-primary" type="button">Dropdown Button <span><i
                  class="icofont icofont-arrow-down"></i></span></button>
            <div class="dropdown-content"><a href="#">Link 1</a><a href="#">Link 2</a><a href="#">Link 3</a><a
                href="#">Another Link</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-xl-6">
    <div class="card">
      <div class="card-header pb-0">
        <h4>Dropdown With Header</h4><span>Use a class <code>.dropdown-header</code></span>
      </div>
      <div class="card-body">
        <div class="dropdown-basic">
          <div class="dropdown">
            <button class="dropbtn btn-pill btn-primary" type="button">Dropdown Button <span><i
                  class="icofont icofont-arrow-down"></i></span></button>
            <div class="dropdown-content">
              <h5 class="dropdown-header">Dropdown header</h5><a href="#">Link 1</a><a href="#">Link 2</a>
              <h5 class="dropdown-header">Dropdown header</h5><a href="#">Another Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-xl-4">
    <div class="card">
      <div class="card-header pb-0">
        <h4>Dropdown With Disable</h4><span>Use a class <code>.dropdown-disabled</code></span>
      </div>
      <div class="card-body">
        <div class="dropup-basic dropdown-basic">
          <div class="dropup dropdown">
            <button class="dropbtn btn-pill btn-dark" type="button">Dropdown Button <span><i
                  class="icofont icofont-arrow-up"></i></span></button>
            <div class="dropup-content dropdown-content"><a href="#">Normal</a><a class="active" href="#">Active</a><a
                class="disabled" href="#">Disabled</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-xl-8">
    <div class="card">
      <div class="card-header pb-0">
        <h4>Dropdown With Direction</h4><span>Use a class <code>.drop-up</code></span>
      </div>
      <div class="card-body">
        <div class="dropup-basic dropdown-basic">
          <div class="dropup dropdown me-3">
            <button class="dropbtn btn-pill btn-secondary" type="button">Drop up <span><i
                  class="icofont icofont-arrow-up"></i></span></button>
            <div class="dropup-content dropdown-content"><a href="#">Bookmark</a><a href="#">Contact</a></div>
          </div>
          <div class="dropend dropdown me-3">
            <button class="dropbtn btn-pill btn-danger" type="button" data-bs-toggle="dropdown">Drop End <span><i
                  class="icofont icofont-arrow-right"></i></span></button>
            <div class="dropend-content dropdown-content"><a href="#">Task</a><a href="#">Calendar</a></div>
          </div>
          <div class="dropdown dropdown me-3">
            <button class="dropbtn btn-pill btn-info" type="button">Drop down <span><i
                  class="icofont icofont-arrow-down"></i></span></button>
            <div class="dropdown-content"><a href="#">To-do</a><a href="#">Editor</a></div>
          </div>
          <div class="dropstart dropdown me-3">
            <button class="dropbtn btn-pill btn-success" type="button">Drop Start <span><i
                  class="icofont icofont-arrow-left"></i></span></button>
            <div class="dropstart-content dropdown-content"><a href="#">Map</a><a href="#">Chart</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>