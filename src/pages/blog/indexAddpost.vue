<template>
      <Breadcrumbs main="Blog" title="Add Post" />
      <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Post Edit</h4>
                  </div>
                  <div class="card-body add-post">
                    <form class="row needs-validation" novalidate="" >
                      <div class="col-sm-12">
                        <div class="mb-3">
                          <label for="validationCustom01">Title:</label>
                          <input class="form-control"   id="validationCustom01" type="text" placeholder="Post Title" required="" >
                          <div class="valid-feedback" ></div>
                        </div>
                        <div class="mb-3">
                          <label>Type:</label>
                          <div class="m-checkbox-inline">
                            <label for="edo-ani">
                              <input class="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked="">Text
                            </label>
                            <label for="edo-ani1">
                              <input class="radio_animated" id="edo-ani1" type="radio" name="rdo-ani">Image
                            </label>
                            <label for="edo-ani2">
                              <input class="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" checked="">Audio
                            </label>
                            <label for="edo-ani3">
                              <input class="radio_animated" id="edo-ani3" type="radio" name="rdo-ani">Video
                            </label>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div class="col-form-label"> 
                            <label>Category:</label>
                             <multiselect  v-model="multiValue" tag-placeholder="Add this as new tag" placeholder="Select Your Name" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                          </div>
                        </div>
                        <div class="email-wrapper">
                          <div class="theme-form">
                            <div class="mb-3">
                              <label>Content:</label>
                               <ckeditor :editor="editor" id="text-box" name="text-box" cols="10" rows="2" ></ckeditor>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                   <dropZone/>
                    <div class="btn-showcase text-end">
                      <button class="btn btn-primary" type="submit">Post</button>
                      <input class="btn btn-light" type="reset" value="Discard">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
 import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import dropZone from "@/components/common/dropZone.vue"
export default {
     components: {
      ckeditor: CKEditor.component,
      dropZone
    },
    data(){
        return{
             errors: [],
          formSubmitted:false,
          title:"",
          titleError:false,
              editor: ClassicEditor,
             multiValue: null,
               options: [
          { code: 1, name: 'Lifestyle' },
          { code: 2, name: 'Travel' },
          { code: 3, name: 'Other' },
        ],
        }
    },
      methods:{
    
        }
}
</script>