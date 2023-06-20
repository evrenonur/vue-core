<template>
      <div class="col-xl-3 col-md-6 xl-30 box-col-30">
                  <div class="email-sidebar md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)" @click="collapseFilter()">email filter</a>
                    <div class="md-sidebar-aside email-left-aside" :class="filtered?'open':''">
                      <div class="card">
                        <div class="card-body">
                          <div class="email-app-sidebar">
                            <div class="d-flex">
                              <div class="flex-shrink-0"><img class="me-3 rounded-circle" src="@/assets/images/user/user.png" alt=""></div>
                              <div class="flex-grow-1">
                                <h6 class="f-w-600"><router-link to="/users/profile"> MARK JENCO </router-link></h6>
                                <p>Markjecno@gmail.com</p>
                              </div>
                            </div>
                            <ul class="nav main-menu" role="tablist">
                              <li class="nav-item"><a class="btn-primary btn-block btn-mail w-100" id="pills-darkhome-tab" data-bs-toggle="pill" href="#pills-darkhome" role="tab" aria-selected="true"><i class="icofont icofont-envelope me-2"></i> NEW MAIL</a></li>
                              <li class="nav-item"><a class="show" id="pills-darkprofile-tab" data-bs-toggle="pill" href="#pills-darkprofile" role="tab" aria-selected="false"><span class="title"><i class="icon-import"></i> Inbox</span><span class="badge pull-right">(236)</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-folder"></i> All mail</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-new-window"></i> Sent</span><span class="badge pull-right">(69)</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-pencil-alt"></i> DRAFT</span><span class="badge pull-right">(59)</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-trash"></i> TRASH</span><span class="badge pull-right">(99)</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-info-alt"></i> IMPORTANT</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-star"></i> Starred</span></a></li>
                              <li>
                                <hr>
                              </li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-email"></i> UNREAD</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-export"></i> SPAM</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-share"></i> OUTBOX</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-file"></i> UPDATE</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-bell"></i> ALERT</span></a></li>
                              <li><a href="javascript:void(0)"><span class="title"><i class="icon-notepad"></i> NOTES</span><span class="badge pull-right">(20)</span></a></li>
                            </ul>
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
      filtered: false,
    }
  },
  methods:{
      collapseFilter() {
        this.filtered = !this.filtered;
      },
  }
}
</script>