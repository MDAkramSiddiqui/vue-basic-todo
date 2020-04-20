<template>
  <div class="uk-alert-default" uk-alert>
    <template v-if="task.edit">
      <input class="uk-input uk-form-width-small uk-form-small"   type="text" :placeholder="task.title" v-model="newTitle">
      <button class="uk-button uk-button-secondary uk-button-small" @click="saveTask(stateId, task.id, newTitle)"> Save </button>
    </template>
    <template v-else>
      <p> {{ task.title }} </p>
      <div class="has-text-centered icons">
        <button class="uk-button uk-button-primary uk-button-small" @click="editTask(stateId, task.id)">
            Edit
        </button>
        <span style="margin:2px">
        </span>
        <button class="uk-button uk-button-danger uk-button-small" @click="deleteTask(stateId, task.id)">
            Delete
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { Store } from "./../store";
export default {
  name: "Task",
  props: ["task", "stateId"],
  data() {
    return {
      newTitle: "",
    };
  },
  methods: {
    editTask(stateId, taskId) {
      Store.editTask(stateId, taskId);
    },
    saveTask(stateId, taskId, newTitle) {
      Store.saveTask(stateId, taskId, newTitle);
    },
    deleteTask(stateId, taskId) {
      Store.deleteTask(stateId, taskId);
    },
  },
};
</script>
