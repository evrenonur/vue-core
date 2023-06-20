<template>
                                <div class="modal fade modal-bookmark" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
                                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close">                                                 </button>
                                      </div>
                                      <div class="modal-body">
                                        <form class="form-bookmark needs-validation" id="bookmark-form" novalidate=""  @submit.prevent="onCustomStyleSubmit">
                                          <div class="form-row">
                                            <div class="form-group col-md-12">
                                              <label for="task-title">Task Title</label>
                                              <input class="form-control" id="task-title" type="text" required="" autocomplete="off" v-bind:class=" formSubmitted ? inputs.task.errorMessage.length ? 'is-invalid' : 'is-valid' : '' "  v-model="inputs.task.data">
                                            </div>
                                            <div class="form-group col-md-12">
                                              <label for="sub-task">Sub task</label>
                                              <input class="form-control" id="sub-task" type="text" required="" autocomplete="off" v-bind:class=" formSubmitted ? inputs.sub.errorMessage.length ? 'is-invalid' : 'is-valid' : '' "  v-model="inputs.sub.data">
                                            </div>
                                            <div class="form-group col-md-12">
                                              <div class="d-flex date-details">
                                                <div class="d-inline-block">
                                                  <label class="d-block mb-0">
                                                    <input class="checkbox_animated" type="checkbox">Remind on
                                                  </label>
                                                </div>
                                                <div class="d-inline-block">
                                                  <input class="datepicker-here form-control digits" type="text" data-language="en" placeholder="Date" v-bind:class=" formSubmitted ? dateError ? 'is-invalid'  : 'is-valid' : '' "   v-model="date">
                                                </div>
                                                <div class="d-inline-block">
                                                  <select class="form-control" v-bind:class=" formSubmitted ? selectError ? 'is-invalid'  : 'is-valid' : '' "   v-model="select">
                                                    <option v-for="(value,index) in optionValues" :value="value" :key="value+index">{{value}} am</option>
                                                  </select>
                                                </div>
                                                <div class="d-inline-block">
                                                  <label class="d-block mb-0">
                                                    <input class="checkbox_animated" type="checkbox">Notification
                                                  </label>
                                                </div>
                                                <div class="d-inline-block">
                                                  <label class="d-block mb-0">
                                                    <input class="checkbox_animated" type="checkbox">Mail
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="form-group col">
                                                <select class="js-example-basic-single">
                                                  <option value="task">My Task</option>
                                                </select>
                                              </div>
                                              <div class="form-group col">
                                                <select class="js-example-disabled-results" id="bm-collection">
                                                  <option value="general">General</option>
                                                </select>
                                              </div>
                                            </div>
                                            <div class="form-group col-md-12 my-0">
                                              <textarea class="form-control" required="" autocomplete="off" v-bind:class=" formSubmitted ? descError ? 'is-invalid'  : 'is-valid' : '' "   v-model="desc">  </textarea>
                                            </div>
                                          </div>
                                          <input id="index_var" type="hidden" value="6">
                                          <button class="btn btn-secondary" id="Bookmark" type="submit">Save</button>
                                          <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Cancel</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
</template><script>
import taskMixin from "@/mixins/taskMixin"
export default {
   mixins: [taskMixin],
   data(){
        return{
          errors: [],
          inputs:{
            task:{
              data:'',
              errorMessage:'',
            },sub:{
              data:'',
              errorMessage:''
            },date:{
              data:'',
              errorMessage:''
            },select:{
              data:'',
              errorMessage:''
            },desc:{
              data:'',
              errorMessage:''
            }
          },
          formSubmitted:false,
            optionValues:['7:00','7:30','8:00','8:30','9:00','9:30','10:00','11:00','11:30','12:00','12:30','1:00','2:00','3:00','4:00','5:00','6:00'],
   }
    },    
}
</script>