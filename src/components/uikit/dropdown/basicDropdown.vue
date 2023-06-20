<template>
  <div class="col-sm-12 col-xl-12">
    <div class="card basic-dropdown">
      <div class="card-header pb-0">
        <h4>Dropdown with link</h4>
      </div>
      <div class="card-body">
        <ul class="d-flex flex-wrap">
          <li class="onhover-dropdown"><span class="f-w-600">Dashboard</span><span><i class="middle ms-2"
                data-feather="chevron-down"><vue-feather type="chevron-down"></vue-feather></i></span>
            <ul class="onhover-show-div left-dropdown">
              <li> <a href="index.html" target="_blank">Default</a></li>
              <li> <a href="dashboard-02.html" target="_blank">Ecommerce</a></li>
            </ul>
          </li>
          <li class="onhover-dropdown"><span class="f-w-600">Job Search</span><span><i class="middle ms-2"
                data-feather="chevron-down"><vue-feather type="chevron-down"></vue-feather></i></span>
            <ul class="onhover-show-div left-dropdown">
              <li> <a href="job-cards-view.html" target="_blank">Card view</a></li>
              <li> <a href="job-apply.html" target="_blank">Job apply</a></li>
            </ul>
          </li>
          <li class="onhover-dropdown"><span class="f-w-600">Ecommerce</span><span><i class="middle ms-2"
                data-feather="chevron-down"><vue-feather type="chevron-down"></vue-feather></i></span>
            <ul class="onhover-show-div left-dropdown">
              <li> <a href="product.html" target="_blank">Product</a></li>
              <li> <a href="add-products.html" target="_blank">Add Product</a></li>
              <li> <a href="invoice-template.html" target="_blank">Invoice</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-xl-12">
    <div class="card">
      <div class="card-header pb-0">
        <h4>Basic Dropdown</h4>
      </div>
      <div class="card-body">
        <div class="dropdown-basic">
          <div class="dropdown">
            <button class="dropbtn btn-pill btn-primary" type="button">Dropdown Button <span><i
                  class="icofont icofont-arrow-down"></i></span></button>
            <div class="dropdown-content"><a href="#">Action</a><a href="#">Another Action</a><a href="#">Something Else
                Here</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>