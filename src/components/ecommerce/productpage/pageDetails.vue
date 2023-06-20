<template>
      <div class="col-xl-5 box-col-12 proorder-xl-3 xl-100">
                  <div class="card">
                    <div class="card-body">
                      <div class="pro-group pt-0 border-0">
                        <div class="product-page-details mt-0">
                          <h3>{{ products.name }}</h3>
                          <div class="pro-review">
                            <div class="d-flex">
                              <select id="u-rating-fontawesome" name="rating" autocomplete="off">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select><span>(250 review)</span>
                            </div>
                          </div>
                        </div>
                        <div class="product-price"> ${{ products.price}}
                          <del>${{ products.salePrice}}</del>
                        </div>
                        <div class="color-selector">
                          <ul>
                            <li class="bg-primary"></li>
                            <li class="bg-secondary ms-1"></li>
                            <li class="bg-success ms-1"></li>
                            <li class="bg-danger ms-1"></li>
                            <li class="bg-info ms-1"></li>
                            <li class="bg-warning ms-1"></li>
                          </ul>
                        </div>
                        <router-link class="btn btn-secondary mt-0"  to='/ecommerce/cart' @click="addToCart(products)"><i class="fa fa-shopping-cart me-2"></i>Buy Now</router-link>
                      </div>
                      <div class="pro-group">
                        <p>{{ products.description }}</p>
                      </div>
                      <div class="pro-group">
                        <div class="row">
                          <div class="col-md-6">
                            <table>
                              <tbody>
                                <tr>
                                  <td> <b>Availability &nbsp;: &nbsp;</b></td>
                                  <td class="txt-success">In stock</td>
                                </tr>
                                <tr>
                                  <td> <b>Brand &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b></td>
                                  <td>Pixelstrap</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="col-md-6">
                            <table>
                              <tbody>
                                <tr>
                                  <td> <b>Seller &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                                  <td>ABC</td>
                                </tr>
                                <tr>
                                  <td> <b>Fabric &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                                  <td>Cotton                                </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="pro-group">
                        <div class="row">
                          <div class="col-md-4 xl-50">
                            <h6 class="product-title">share it</h6>
                          </div>
                          <div class="col-md-7 xl-50">
                            <div class="product-icon">
                              <ul class="product-social">
                                <li class="d-inline-block"><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                                <li class="d-inline-block"><a href="javascript:void(0)"><i class="fa fa-google-plus"></i></a></li>
                                <li class="d-inline-block"><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                                <li class="d-inline-block"><a href="javascript:void(0)"><i class="fa fa-instagram"></i></a></li>
                                <li class="d-inline-block"><a href="javascript:void(0)"><i class="fa fa-rss"></i></a></li>
                              </ul>
                              <form class="d-inline-block f-right">                            </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pro-group pb-0">
                        <div class="pro-shop"> <router-link :to="'/ecommerce/cart'" class="btn btn-primary m-r-10" @click="addToCart(products)" > <i class="fa fa-shopping-basket me-2"></i>Add To Cart</router-link>
                      <router-link :to="'/ecommerce/wishList'" class="btn btn-danger"><i class="fa fa-heart me-2"></i>Add To WishList</router-link></div>
                      </div>
                    </div>
                  </div>
                </div>
</template>
<script>

 import productPage from "@/mixins/commen/productPage"
export default {
     mixins:[productPage],
}
</script>