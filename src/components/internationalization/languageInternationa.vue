<template>
     <div class="col-lg-12">
                <div class="site">
                  <div class="site-bd">
                    <div class="wrapper">
                      <div class="card">
                        <div class="card-header language-header pb-0">
                          <h4>Internationalization</h4>
                          <div class="main" role="main">
                            <select class="langChoice js-languageSelect" v-model="$i18n.locale">
                              <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang"> {{ lang }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="card-body"> 
                          <div class="row">
                            <div class="col-sm-6">
                              <h5 class="hdg hdg_main js-languagePageHdg">{{$t('Static Sub Nav')}}</h5>
                              <div class="masthead" role="banner">
                                <ul class="icon-lists border navs-icon hList hList_loose masthead-nav js-languageList">
                                  <li><a href="javascript:void(0)"><span> {{ $t('Base')}}</span></a></li>
                                  <li><a href="javascript:void(0)"><span> {{$t('Advance')}}</span></a>
                                    <ul class="hList hList_loose masthead-nav js-languageList">
                                      <li class="pl-navs-inline"><a href="javascript:void(0)"><span>{{$t('Scrollable')}}</span></a></li>
                                      <li class="pl-navs-inline"><a href="javascript:void(0)"><span>{{$t('Tree View')}}</span></a></li>
                                      <li class="pl-navs-inline"><a href="javascript:void(0)"><span>{{$t('Rating')}}</span></a></li>
                                    </ul>
                                  </li>
                                  <li><a href="javascript:void(0)"><span data-mlr-text=""> {{$t('News')}}</span></a></li>
                                  <li><a href="javascript:void(0)"><span data-mlr-text=""> {{$t('Tables')}}</span></a></li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-sm-6 language-xs">
                              <h5 class="hdg hdg_main js-languagePageHdg">{{$t('Static Sub Nav')}}</h5>
                              <div class="masthead" role="banner">
                                <ul class="icon-lists border navs-icon hList hList_loose masthead-nav js-languageList">
                                  <li><a href="javascript:void(0)"><span> {{ $t('Base')}}</span></a></li>
                                  <li><a href="javascript:void(0)"><span> {{$t('Advance')}}</span></a>
                                    <ul class="hList hList_loose masthead-nav js-languageList">
                                      <li class="pl-navs-inline"><a href="javascript:void(0)"><span>{{$t('Scrollable')}}</span></a><span class="pull-right badge badge-primary">New</span></li>
                                      <li class="pl-navs-inline"><a href="javascript:void(0)"><span>{{$t('Tree View')}}</span></a><span class="pull-right badge badge-primary">Find</span></li>
                                      <li class="pl-navs-inline"><a href="javascript:void(0)"><span>{{$t('Rating')}}</span></a></li>
                                    </ul>
                                  </li>
                                  <li><a href="javascript:void(0)"><span data-mlr-text=""> {{$t('News')}}</span></a></li>
                                  <li><a href="javascript:void(0)"><span data-mlr-text=""> {{$t('Tables')}}</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
    data(){
        return{
            langs: ['English', 'German','Russian','Arabic'],
        }
    }
}
</script>