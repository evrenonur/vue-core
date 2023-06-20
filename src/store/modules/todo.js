import todo from "../../data/todo.json"

const state = {
    todo : todo.data
};

const mutations = {
    taskcomplete:(state,payload)=>{
        state.todo.find(function (list) {
            if (list.id === payload) {
                return list.status = list.status === 'complete' ? 'incomplete' : 'complete';
            }
        });
    },
    alltaskcomplete:(state,payload)=>{
       state.todo.filter(function (list) {
               return list.status = payload === true ? 'complete':'incomplete';
        });
    },
    tododelete:(state,payload)=>{
        state.todo = state.todo.filter(list => list.id !== payload);
    },
    addtodo:(state,payload)=>{
        let todoID= []
        state.todo.forEach(element => {
            todoID.push(element.id)
        });

        let id = Math.max(...todoID)+1;
         state.todo.unshift(
            {
                'id': id,
                'title': payload,
                'priority':"Pending",
                'date':"16 Jan",
                'badgeClass':"badge-light-danger",
                'delete': false,
                'status': 'incomplete'
            }
        );
    }
};

const actions = {
    taskcomplete:(context, payload) => {
        context.commit('taskcomplete',payload);
    },
    alltaskcomplete:(context,payload) => {
        context.commit('alltaskcomplete',payload);
    },
    tododelete:(context, payload) => {
        context.commit('tododelete',payload);
    },
    addtodo:(context, payload) => {
        context.commit('addtodo',payload);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};