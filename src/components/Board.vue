<template>
  <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>

     <BoardColumn v-for="col in states" :key='col.key' :col='col'/>

  </div>
</template>

<script>
import BoardColumn from "./BoardColumn";
import { Store } from "./../store.js";

export default {
  name: "Board",
  data() {
    return {
      states: Store.states,
    };
  },
  components: {
    BoardColumn,
  },
};
</script>
