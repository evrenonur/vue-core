<template>
     <div class="col-xl-9 col-md-12 xl-70 box-col-70">
                  <div class="email-right-aside">
                    <div class="card email-body">
                      <div class="email-profile">                                  
                        <div class="email-body">                                        
                          <div class="email-compose">
                            <div class="email-top compose-border">                                              
                              <div class="compose-header">
                                <h4 class="mb-0">New Message</h4>
                                <button class="btn btn-primary" type="button"><i class="fa fa-file me-2"></i> save</button>
                              </div>
                            </div>
                            <div class="email-wrapper">
                              <form class="theme-form">
                                <div class="form-group">
                                  <label class="col-form-label pt-0" for="exampleInputEmail1">To</label>
                                  <input class="form-control" id="exampleInputEmail1" type="email">
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputPassword1">Subject</label>
                                  <input class="form-control" id="exampleInputPassword1" type="text">
                                </div>
                                <div class="form-group">
                                  <label>Message</label>
                                  <ckeditor :editor="editor" id="text-box" name="text-box" cols="10" rows="2" ></ckeditor>      
                                </div>
                                <div class="form-group">
                                  <dropZone/>
                                </div>
                              </form>
                              <div class="action-wrapper">
                                <ul class="actions">
                                  <li><a class="btn btn-secondary" href="javascript:void(0)"><i class="fa fa-paper-plane me-2"></i>send</a></li>
                                  <li><a class="btn btn-danger" href="javascript:void(0)"><i class="fa fa-times me-2"></i>cancel</a></li>
                                </ul>
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
import dropZone from "@/components/common/dropZone.vue"
 import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    components:{
        dropZone,
        ckeditor: CKEditor.component
    },
      data(){
      return{
         editor: ClassicEditor,
      }
    }
}
</script>