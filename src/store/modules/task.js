import task from "@/data/task.json"

const state = {
    data : task.data,
    task : task.task
};

export default {
    namespaced: true,
    state,
}