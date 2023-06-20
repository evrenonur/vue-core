import bootstrap from "../../data/bootstrap.json"

const state = {
	tableData1 : bootstrap.tableData1,
	inverse: bootstrap.inverse,
	hoverable: bootstrap.hoverable,
	table2: bootstrap.table2,
	sizingTablesXl: bootstrap.sizingTablesXl,
	tableData: bootstrap.tableData,
	tableData2: bootstrap.tableData2
};

export default {
	namespaced: true,
	state,
};