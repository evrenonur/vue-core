<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Nesting Column</h4>
                  </div>
                  <div class="card-body grid-showcase">
                    <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
                    <div class="row">
                      <div class="col-sm-9"><span>Level 1: .col-sm-9</span>
                        <div class="row">
                          <div class="col-8 col-sm-6"><span>Level 2: .col-8 .col-sm-6</span></div>
                          <div class="col-4 col-sm-6"><span>Level 2: .col-4 .col-sm-6</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Order</h4>
                  </div>
                  <div class="card-body grid-showcase">
                    <p>Use <code>.order-</code> classes for controlling the <strong>visual order</strong> of your content. These classes are responsive, so you can set the <code>order</code> by breakpoint (e.g., <code>.order-1.order-md-2</code>). Includes support for <code>1</code> through <code>12</code> across all five grid tiers.</p>
                    <div class="row">
                      <div class="col"><span>First, but unordered</span></div>
                      <div class="col order-12"><span>Second, but last</span></div>
                      <div class="col order-1"><span>Third, but first</span></div>
                    </div>
                    <div class="row">
                      <div class="col order-last"><span>First, but last</span></div>
                      <div class="col"><span>Second, but unordered</span></div>
                      <div class="col order-first"><span>Third, but first</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Offset</h4>
                  </div>
                  <div class="card-body grid-showcase">
                    <p>Move columns to the right using <code>.offset-md-*</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>.offset-md-4</code> moves <code>.col-md-4</code> over four columns.</p>
                    <div class="row">
                      <div class="col-md-4"><span>.col-md-4</span></div>
                      <div class="col-md-4 offset-md-4"><span>.col-md-4 .offset-md-4</span></div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 offset-md-3"><span>.col-md-3 .offset-md-3</span></div>
                      <div class="col-md-3 offset-md-3"><span>.col-md-3 .offset-md-3</span></div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 offset-md-3"><span>.col-md-6 .offset-md-3</span></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-5 col-md-6"><span>.col-sm-5 .col-md-6</span></div>
                      <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><span>.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</span></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 col-md-5 col-lg-6"><span>.col-sm-6 .col-md-5 .col-lg-6</span></div>
                      <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><span>.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</span></div>
                    </div>
                  </div>
                </div>
              </div>
</template>