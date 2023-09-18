import * as taskService from '../services/taskService';
import { useTaskContext } from '../tasks/TaskContext';

export default function useTaskLogic() {

  const {
    records,
    setRecords,
    openPopup,
    setOpenPopup,
    recordForEdit,
    setRecordForEdit,
    filterFn,
    setFilterFn,

  } = useTaskContext();

  const addOrEdit = (task, resetForm) => {
    if (task.id == '0') {
      taskService.insertTask(task);
    }
    else {
      taskService.updateTask(task);
    }
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(taskService.getAllTasks());
  };

  const deleteTask = (task) => {
    taskService.deleteTask(task);
    setRecords(taskService.getAllTasks());
  };

  const onCompleteChange = (taskId, newCompleted) => {
    const updatedRecords = records.map(task => {
      if (task.id == taskId) {
        return { ...task, isCompleted: newCompleted ? 1 : 0 }
      }
      return task;
    })

    setRecords(updatedRecords);
  }

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value == "")
          return items;
        else
          return items.filter(task => task.taskName.toLowerCase().includes(target.value))
      }
    })
  }

  const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true);
  }

  return {
    addOrEdit,
    deleteTask,
    onCompleteChange,
    handleSearch,
    openInPopup,
    records,
    setRecords,
    openPopup,
    setOpenPopup,
    recordForEdit,
    setRecordForEdit,
    filterFn,
    setFilterFn,
  }
};