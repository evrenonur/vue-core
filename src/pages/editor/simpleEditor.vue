<template>
  <Breadcrumbs main="Editor" title="Simple Editor" />
    <div class="container-fluid cK-editor">
      <div class="row">
        <div class="col-md-12 ">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Simple Editor</h4>
            </div>
            <div class="card-body">
              <quill-editor
                v-model:value="state.content"
                :options="state.editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                @change="onEditorChange($event)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
 import { reactive } from 'vue'
export default {
    setup() {
    const state = reactive({
      content: '<h1>Some initial content</h1>',
      _content: '',
      editorOption: {
        placeholder: 'core',
      },
      disabled: false
    })

    const onEditorBlur = () => {
    
    }
    const onEditorFocus = () => {
   
    }
    const onEditorReady = () => {
    
    }
    const onEditorChange = ({  html, }) => {
    
      state._content = html
    }

    setTimeout(() => {
      state.disabled = true
    }, 2000)

    return { state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange }
  },
};
</script>