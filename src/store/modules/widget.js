import widget from "../../data/widget.json"

const state = {
   
    activity : widget.activity,
    table : widget.table,
    employee : widget.employee
};

export default {
    namespaced: true,
    state,
}
