<template>
  <div class="mb-2">
    <label class="col-form-label">Hiding The Search Box</label>
    <multiselect
      v-model="value"
      :options="multipleoptions"
      :multiple="true"
      :taggable="true"
      group-values="libs"
      group-label="language"
      :group-select="true"
      :close-on-select="false"
      track-by="name"
      label="name"
      placeholder="Pick a value"
      @tag="addTag"
    ></multiselect>
  </div>
  <div class="mb-2">
    <label class="col-form-label">Enable-Disable</label>
    <multiselect
      v-model="value1"
      :options="multiple"
      :searchable="false"
      :group-select="true"
      :close-on-select="false"
      track-by="name"
      :disabled="disabled"
      label="name"
      placeholder="Pick a value"
    ></multiselect>
   
     <div class="text-end mt-2">
        <button  @click="disabled =!disabled" class="btn btn-primary js-programmatic-enable mt-2">Enable</button>
        <button  @click="disabled = !disabled" class="btn btn-danger js-programmatic-disable mt-2 ms-2">Disable</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      value1:[{ code: 1, name: "Smith" },],
      disabled: true,
      multipleoptions: [
        {
          language: "Developer",
          libs: [
            { code: 1, name: "Smith" },
            { code: 2, name: "Peter" },
            { code: 3, name: "James" },
            { code: 4, name: "Hanry Die" },
            { code: 5, name: "John Doe" },
            { code: 6, name: "Harry Poter" },
          ],
        },
      ],
      multiple:[
            { code: 1, name: "Smith" },
            { code: 2, name: "Peter" },
            { code: 3, name: "James" },
            { code: 4, name: "Hanry Die" },
            { code: 5, name: "John Doe" },
            { code: 6, name: "Harry Poter" },
      ]
    };
  },
};
</script>