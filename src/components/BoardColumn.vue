<template>
  <div>
      <div class="uk-card uk-card-default uk-card-body" id="todo-col" style="cursor:pointer;" @click='setActiveState(col.id)'>
          <h3> {{ col.name }} </h3>
          <Task v-for="task in col.tasks" :key='task.id' :task='task' :stateId="col.id"/>
      </div>
  </div>
</template>

<script>
import Task from "./Task";
import { Store } from "./../store";

export default {
  name: "BoardColumn",
  props: ["col"],
  components: {
    Task,
  },
  methods: {
    setActiveState(id) {
      Store.setActiveState(id);
    },
  },
};
</script>
