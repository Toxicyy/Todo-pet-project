import { configureStore } from "@reduxjs/toolkit";
import { nightModeSlice } from "./state/NightMode.slice";
import { userSlice } from "./state/user.slice";
import { tabsSlice } from "./state/Tabs.slice";
import { taskStatisticSlice } from "./state/TaskStatistic.slice";
import { todoListSlice } from "./state/TodoList.slice";
import { addTodoModalSlice } from "./state/AddTodoModal.slice";

export const store = configureStore({
  reducer: {
    [nightModeSlice.name]: nightModeSlice.reducer,
    userSlice: userSlice.reducer,
    tabs: tabsSlice.reducer,
    taskStatistic: taskStatisticSlice.reducer,
    todoList: todoListSlice.reducer,
    [addTodoModalSlice.name]: addTodoModalSlice.reducer
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
