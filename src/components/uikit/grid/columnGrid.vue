<template>
      <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Grid Column</h4>
                  </div>
                  <div class="card-body grid-showcase">
                    <p>Using a single set of <code>.col-md-*</code> grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns within any <code>.row</code>.</p>
                    <div class="row">
                      <div class="col-md-1 text-center"><span>col-md-1</span></div>
                      <div class="col-md-2 text-center"><span>col-md-2</span></div>
                      <div class="col-md-2 text-center"><span>col-md-2</span></div>
                      <div class="col-md-3 text-center"><span>col-md-3</span></div>
                      <div class="col-md-4 text-center"><span>col-md-4</span></div>
                      <div class="col-md-5 text-center"><span>col-md-5</span></div>
                      <div class="col-md-7 text-center"><span>col-md-7</span></div>
                      <div class="col-md-6 text-center"><span>col-md-6</span></div>
                      <div class="col-md-6 text-center"><span>col-md-6</span></div>
                      <div class="col-md-8 text-center"><span>col-md-8</span></div>
                      <div class="col-md-4 text-center"><span>col-md-4</span></div>
                      <div class="col-md-9 text-center"><span>col-md-9</span></div>
                      <div class="col-md-3 text-center"><span>col-md-3</span></div>
                      <div class="col-md-10 text-center"><span>col-md-10</span></div>
                      <div class="col-md-2 text-center"><span>col-md-2</span></div>
                      <div class="col-md-12 text-center"><span>col-md-12</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Setting one column width</h4>
                  </div>
                  <div class="card-body grid-showcase">
                    <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
                    <div class="row">
                      <div class="col"><span>1 of 3</span></div>
                      <div class="col-6"><span>2 of 3 (wider)</span></div>
                      <div class="col"><span> 3 of 3</span></div>
                    </div>
                    <div class="row">
                      <div class="col"><span>1 of 3</span></div>
                      <div class="col-5"><span> 2 of 3 (wider)</span></div>
                      <div class="col"><span>3 of 3</span></div>
                    </div>
                  </div>
                </div>
              </div>
</template>