<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header pb-0">  <h4>Default Kanban</h4> </div>
      <div class="card-body pb-0">
        <div id="demo1" >
          <div class="kanban-container d-flex row" >
            <div data-id="_todo"  v-for="(board,index) in dropZones" :key="index" data-order="1"  @drop="onDrop($event, index)" @dragover.prevent  @dragenter.prevent class="kanban-board col-xxl-4 col-md-12"
              style="width: 400px; margin-left: 15px; margin-right: 15px; padding: 0;"
            >
              <header class="kanban-board-header">
                <div class="kanban-title-board">{{board.title}}</div>
              </header>
              <main class="kanban-drag" >
                <div class="kanban-item is-moving" v-for="item in list(index)" :key="item.title" draggable="true" @dragstart="startDrag($event, item)">
                  <a class="kanban-box" href="#" draggable="false"><span class="date">{{item.date}}</span
                    ><span class="badge  f-right" :class="item.badge">{{item.priority}}</span>
                    <h6>{{item.title}}</h6>
                    <div class="d-flex align-items-start">
                      <img class="img-20 me-1 rounded-circle" :src="require('@/assets/images/user/3.jpg')" alt="" data-original-title="" title="" />
                      <div class="flex-grow-1">
                        <p>{{item.place}}</p>
                      </div>
                    </div>
                    <div class="d-flex mt-3">
                      <ul class="list">
                        <li><i class="fa fa-comments-o"></i>2</li>
                        <li><i class="fa fa-paperclip"></i>2</li>
                        <li><i class="fa fa-eye"></i></li>
                      </ul>
                      <div class="customers">
                        <ul>
                          <li class="d-inline-block me-3"> <p class="f-12 mb-0">{{item.more}}</p> </li>
                          <li class="d-inline-block">
                            <img class="img-20 rounded-circle" :src="require('@/assets/images/user/3.jpg')" alt="" data-original-title="" title=""/>
                          </li>
                          <li class="d-inline-block">
                            <img class="img-20 rounded-circle" :src="require('@/assets/images/user/1.jpg')" alt="" data-original-title="" title="" />
                          </li>
                          <li class="d-inline-block">
                            <img class="img-20 rounded-circle" :src="require('@/assets/images/user/5.jpg')" alt="" data-original-title="" title=""/>
                          </li>
                        </ul>
                      </div></div></a>
                </div>
              </main>
              <footer></footer>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dropZones:[{title:'Todo (2)',id:0},{title:'Doing (2)',id:1},{title:'Done (2)',id:3}],
    };
  },
   computed: {
    ...mapState({
      kanbanlist:(state)=>state.kanban.default,    
    }),
   },
  methods: {
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
};
</script>