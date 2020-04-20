<template>
  <div>
    <div class="uk-flex-center">
      <div class="task-header">
          <div class="uk-card uk-card-default uk-card-small uk-card-body">
              <h3 class="uk-card-title"> New {{ getActiveStateName }} </h3>
              <div class="uk-margin">
                  <input class="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Add Task" v-model="title">
              </div>
              <button class="uk-button uk-button-secondary uk-button-small" @click="addNewTask(title)">Save
              </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Store } from "./../store";
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    getActiveStateName() {
      return Store.getActiveState().name;
    },
  },
  methods: {
    addNewTask(stateTitle) {
      if (stateTitle.length) Store.addNewTask(stateTitle);
      this.title = "";
    },
  },
};
</script>
