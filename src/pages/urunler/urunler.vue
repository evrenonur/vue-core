<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h4>Responsive Tables with Light Background</h4><span>A <code>.table-responsive , .table-light</code> inside table element.</span>
      </div>
      <div class="card-block row">
        <div class="col-sm-12 col-lg-12 col-xl-12">
          <div class="table-responsive theme-scrollbar">
            <table class="table table-light">
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Başlık</th>
                <th scope="col">Oluşturulma Tarihi</th>
                <th scope="col">Güncellenme Tarihi</th>
                <th scope="col">İşlemler</th>
              </tr>
              </thead>
              <tbody>

              <tr v-for="urun in tableData" :key="urun.id">
                <th scope="row">3</th>
                <td>WordPress</td>
                <td>Pixelstrap@gmail.com</td>
                <td>+91 635609347</td>
                <td>
                  <button class="btn btn-info"><i class="fa fa-edit"></i></button>
                  <button class="btn btn-danger" style="margin-left: 5px"><i class="fa fa-trash"></i></button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


import ResponsiveTable from "@/components/table/bootstrap/responsiveTable.vue";

export default {
  name: 'Urunler',
  components: {
    ResponsiveTable
  },
  data() {
    return {
      columns: [
        {field: "title", key: "a", title: "Name", align: "center"},
        {field: "created_at", key: "b", title: "Date", align: "left"},
        {field: "updated_at", key: "c", title: "Hobby", align: "right"},
      ],
      tableData: this.$store.state.urunler
    };
  },

  mounted() {
    this.$store.dispatch("datatable/getItemsProducts");
  }
}


</script>
