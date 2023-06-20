import dashbord from "../../data/dashbord.json"

const state = {
    appointment : dashbord.appointment,
    seller: dashbord.seller,
    selling : dashbord.selling,
    orderList : dashbord.orderList,
    activity : dashbord.activity,
    table : dashbord.table,
};

export default {
    namespaced: true,
    state,
}
