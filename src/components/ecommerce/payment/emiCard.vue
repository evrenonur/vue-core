<template>
    <div class="col-xl-4 col-lg-6 box-col-33">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>EMI</h4>
                  </div>
                  <div class="card-body">
                    <form class="theme-form row">
                      <div class="mb-3 col-sm-6 p-r-0">
                        <input class="form-control" type="text" placeholder="First Name">
                      </div>
                      <div class="mb-3 col-sm-6">
                        <input class="form-control" type="text" placeholder="Last name">
                      </div>
                      <div class="mb-3 col-sm-6 p-r-0">
                        <input class="form-control" type="text" placeholder="Pincode">
                      </div>
                      <div class="mb-3 col-sm-6">
                        <select class="form-select" size="1">
                          <option>Bank Name</option>
                          <option>SBI</option>
                          <option>ICICI</option>
                          <option>KOTAK</option>
                          <option>BOB</option>
                        </select>
                      </div>
                      <div class="mb-3 col-12">
                        <select class="form-select" size="1">
                          <option>Select Card</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div class="mb-3 col-12">
                        <select class="form-select" size="1">
                          <option>Select Duration</option>
                          <option>2015-2016</option>
                          <option>2016-2017</option>
                          <option>2017-2021</option>
                          <option>2021-2023</option>
                        </select>
                      </div>
                      <div class="mb-3 col-12">
                        <ul class="payment-opt">
                          <li><img src="@/assets/images/ecommerce/mastercard.png" alt=""></li>
                          <li><img src="@/assets/images/ecommerce/visa.png" alt=""></li>
                          <li><img src="@/assets/images/ecommerce/paypal.png" alt=""></li>
                        </ul>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary btn-block" type="button" title="">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
</template>