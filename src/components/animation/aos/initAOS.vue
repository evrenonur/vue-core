<template>
     <div class="card">
                  <div class="card-header pb-0">
                    <h4>Init AOS</h4>
                  </div>
                  <div class="card-body">
                    <div><span class="comment">// The Below Function is example of how to initlize reveal</span>
                      <div class="line"><span></span> &lt;script&gt; <span></span><br><code> AOS.init();</code><br><span> &lt;</span> /script <span> &gt; </span></div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>How to use it?</h4><span>All you have to do is to add <code>data-aos</code> attribute to html element, like so:</span>
                  </div>
                  <div class="card-body">
                    <div class="txt-primary"><span> &lt;</span> div data-aos="animation_name" <span> &gt;  </span></div>
                  </div>
                </div>
                 <div class="card">
                  <div class="card-header pb-0">
                    <h4>Advanced settings</h4><span>These settings can be set both on certain elements, or as default while initializing script (in options object without <code> data- part).</code></span>
                  </div>
                  <div class="card-body table-responsive theme-scrollbar">
                    <table class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Description</th>
                          <th>Example value</th>
                          <th>Default value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><em><code>data-aos-offset</code></em></td>
                          <td>Change offset to trigger animations sooner or later (px)</td>
                          <td>200</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td><em><code>data-aos-duration</code></em></td>
                          <td>*Duration of animation (ms)</td>
                          <td>600</td>
                          <td>400</td>
                        </tr>
                        <tr>
                          <td><em><code>data-aos-easing</code></em></td>
                          <td>Choose timing function to ease elements in different ways</td>
                          <td>ease-in-sine</td>
                          <td>ease</td>
                        </tr>
                        <tr>
                          <td><em><code>data-aos-delay</code></em></td>
                          <td>Delay animation (ms)</td>
                          <td>300</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td><em><code>data-aos-anchor</code></em></td>
                          <td>Anchor element, whose offset will be counted to trigger animation instead of actual elements offset</td>
                          <td>#selector</td>
                          <td>null</td>
                        </tr>
                        <tr>
                          <td><em><code>data-aos-anchor-placement</code></em></td>
                          <td>Anchor placement - which one position of element on the screen should trigger animation</td>
                          <td>top-center</td>
                          <td>top-bottom</td>
                        </tr>
                        <tr>
                          <td><em><code>data-aos-once</code></em></td>
                          <td>Choose wheter animation should fire once, or every time you scroll up/down to element</td>
                          <td>true</td>
                          <td>false</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
</template>