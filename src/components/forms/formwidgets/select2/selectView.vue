<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header pb-0">
        <h4 class="card-title">Select-2</h4>
      </div>
      <div class="card-body">
        <div class="mb-2">
          <label class="col-form-label">Default Placeholder</label>
          <multiselect  v-model="multiValue" tag-placeholder="Add this as new tag" placeholder="Select Your Name" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
        </div>
        <div class="mb-2"  >
          <label class="col-form-label">Select2 single select</label>
             <multiselect v-model="value" :options="options1" :searchable="false" group-values="libs"   group-label="language" :group-select="true"  :close-on-select="false" track-by="name" label="name" placeholder="Pick a value"></multiselect>
        </div>
        <div class="mb-2">
           <label class="col-form-label">Select2 multi select</label>
           <multiselect  v-model="multiValue3" tag-placeholder="Add this as new tag" placeholder="Select Your Name" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
        </div>
        <div class="mb-2">
          <label class="col-form-label">RTL support</label>
           <multiselect  v-model="multiValue2" tag-placeholder="Add this as new tag" placeholder="Select Your Name" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag" ></multiselect>
        </div>
        <div class="mb-2">
           <label class="col-form-label">Limiting The Number Of Selections</label>
            <multiselect  v-model="multiValue1" tag-placeholder="Add this as new tag" placeholder="Select Your Name" label="name" track-by="code"  :options="optionslist" :multiple="true" :taggable="true" @tag="addTag" ></multiselect>
        </div>
       <div class="mb-2">
           <label class="col-form-label">Disabled Results</label>
            <multiselect v-model=" multivalue4" :options="options4" :searchable="false"  :group-select="true"  :close-on-select="false" track-by="name" label="name" placeholder="Pick a value"></multiselect>
        </div>
        <searchBox/>
      </div>
    </div>
  </div>
</template>
<script>
import searchBox from "./searchBox.vue"
export default {
  components:{
  searchBox
  },
  data() {
      return {
         multiValue: null,
         multiValue1:null,
         multiValue2:null,
         multiValue3:null,
         multivalue4:[{code:1, name:'First'}],
        options: [
          { code: 1, name: 'Alabama' },
          { code: 2, name: 'Wyoming' },
          { code: 3, name: 'Coming' },
          { code: 4, name: 'Hanry Die' },
          { code: 5, name: 'John Doe' }
        ],
         optionslist: [
          { code: 1, name: 'Alabama' },
          { code: 2, name: 'Wyoming' },
          { code: 3, name: 'Coming' },
          { code: 4, name: 'Hanry Die' },
          { code: 5, name: 'John Doe' }
        ],
         options3: [
          { code: 1, name: 'Alabama' },
          { code: 2, name: 'Wyoming' },
          { code: 3, name: 'Coming' },
          { code: 4, name: 'Hanry Die' },
          { code: 5, name: 'John Doe' }
        ],
        options4:[{code:1, name:'First'},{code:2, name:"second(disable)",disabled: true},{code:3,name:"Third"}],
        options1: [
        {
          language: 'Developer',
          libs: [
            { name: 'Alabama', category: 'Front-end' },
            { name: 'Wyoming', category: 'Backend' }
          ]
        },
        {
          language: 'Designer',
          libs: [
            { name: 'Peter', category: 'Backend' },
            { name: 'Hanry Die', category: 'Backend' },
            { name: 'John Doe', category: 'Backend' }
          ]
        },

      ],
      value: [{ name: 'Alabama', category: 'Front-end' },]
      }
    },
   
};
</script>