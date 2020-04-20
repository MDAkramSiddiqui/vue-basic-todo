import { Seed } from "./seed";
export const Store = {
  states: Seed,
  setActiveState(id) {
    this.states.map(
      (el) => (el.id === id ? (el.active = true) : (el.active = false))
    );
  },
  getActiveState() {
    return this.states.find((el) => el.active === true);
  },
  addNewTask(stateTitle) {
    const activeState = this.getActiveState();
    activeState.tasks.push({
      id: activeState.tasks.length + 1,
      title: stateTitle,
      edit: false,
    });
  },
  editTask(stateId, taskId) {
    const activeState = this.states.find((el) => el.id === stateId);
    activeState.tasks.map(
      (el) => (el.id === taskId ? (el.edit = true) : (el.edit = false))
    );
  },
  saveTask(stateId, taskId, newTitle) {
    const activeState = this.states.find((el) => el.id === stateId);
    activeState.tasks.map((el) => {
      if (el.id === taskId) {
        if (newTitle.length > 0) el.title = newTitle;
        el.edit = false;
      }
    });
  },
  deleteTask(stateId, taskId) {
    const activeState = this.states.find((el) => el.id === stateId);
    const taskIndex = activeState.tasks.findIndex((el) => el.id === taskId);
    activeState.tasks.splice(taskIndex, 1);
  },
};
