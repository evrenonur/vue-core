const kanbanMixin = {
    
    methods: {
     removeDone(){
       for(var i = this.kanbanlist.length-1;i>=0;i--)
         this.kanbanlist[i].list===2 && this.kanbanlist.splice(i,1)
     },
     addDefaultBoard(){
       let objToAdd = {
            "title": "New deafult board",
             "list": 0,
             "place":"Pixelstrap, New york",
             "image":"@/assets/images/user/3.jpg",
             "priority":"Low",
             "img":"other-images/sidebar-bg.jpg",
             "badge":"badge-success",
             "id":7,
              "date":"24/7/20"
           }
           this.kanbanlist.push(objToAdd)
     },
       addTodoBoard(){
       let objToAdd = {
            "title": "Test Sidebar",
             "list": 0,
             "place":"Themeforest, australia",
             "image":"@/assets/images/user/3.jpg",
             "badge":"badge-danger",
             "id":8,
             "more":"+5",
             "priority":"Urgent",
              "date":"24/7/20"
           }
           this.kanbanlist.push(objToAdd)
     },
     list(index) {
       return this.kanbanlist.filter((kanbanlist) => kanbanlist.list === index);
     },
     startDrag(evt, item) {
       evt.dataTransfer.dropEffect = "move";
       evt.dataTransfer.effectAllowed = "move";
       evt.dataTransfer.setData("itemID", item.id);
     },
     onDrop(evt, list) {
       const itemID = evt.dataTransfer.getData("itemID");
       const item = this.kanbanlist.find((kanbanlist) => kanbanlist.id == itemID);
       item.list = list;
     },
   },
 }
   
   export default kanbanMixin